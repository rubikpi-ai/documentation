# Qualcomm® IMSDK

The Qualcomm® Intelligent Multimedia SDK (IMSDK) is a set of GStreamer plugins that let you run computer vision operations on the GPU of your Dragonwing development board; and that can create AI pipelines that run fully on GPU and NPU, without ever having to yield back to the CPU (zero-copy). Together this makes it possible to achieve much higher throughput rates than when you implement AI CV pipelines yourself in e.g. OpenCV + TFLite.


$$  So... GStreamer pipelines?
The IMSDK is built on top of GStreamer. GStreamer is a multimedia framework that lets you describe a processing pipeline for video or audio, and it takes care of running each step in order. In 'normal Python' you might write OpenCV code that grabs a frame from a webcam, resizes and crops it, calls into an inference function, draws bounding boxes on the result, and then outputs or displays the frame again — with each step running on the CPU unless you explicitly wire up GPU/NPU APIs yourself. With GStreamer + IMSDK, you declare that same sequence once in a pipeline string, and the framework streams frames through the chain for you.

What IMSDK adds on Qualcomm® hardware is the ability for those steps to be transparently accelerated: resize/crop and drawing bounding boxes can run on the GPU, inference can run on the NPU, and whole chains of operations (e.g. crop → resize → NN inference) can execute without ever yielding back to the CPU (zero-copy). From your application you only need to configure the pipeline; the underlying framework handles frame-by-frame scheduling, synchronization, and accelerator offload.

The IMSDK provides the special GStreamer plugins that make this possible. For example, 'qtivtransform' offloads color conversion, cropping, and resizing to the GPU, while 'qtimltflite' handles inference on the NPU. This way, the same high-level pipeline you'd write with standard GStreamer can now run almost entirely on dedicated accelerators, giving you real-time throughput with minimal CPU load.


$$ Setting up GStreamer and the IMSDK
Alright, let's go build some applications using the IMSDK.

1. Install GStreamer, the IMSDK and some extra dependencies we'll need in this example. Open the terminal on your development board, or an ssh session to your development board, and run:  
```python
# Add the Qualcomm IoT PPA
sudo apt-add-repository -y ppa:ubuntu-qcom-iot/qcom-ppa

# Install GStreamer / IM SDK
sudo apt update
sudo apt install -y gstreamer1.0-tools gstreamer1.0-tools gstreamer1.0-plugins-good gstreamer1.0-plugins-base gstreamer1.0-plugins-base-apps gstreamer1.0-plugins-qcom-good gstreamer1.0-qcom-sample-apps

# Install Python bindings for GStreamer, and some build dependencies
sudo apt install -y v4l-utils libcairo2-dev pkg-config python3-dev libgirepository1.0-dev gir1.2-gstreamer-1.0
```
2. 
Clone the example repo, create a venv, and install its dependencies:  
```python
# Clone repo
git clone https://github.com/edgeimpulse/qc-ai-docs-examples-imsdk.git
cd qc-ai-docs-examples-imsdk/tutorial

# Create a new venv
python3 -m venv .venv
source .venv/bin/activate

# Install Python dependencies
pip3 install -r requirements.txt
```
3. You'll need a camera (either built-in, on the RB3 Gen 2 Vision Kit) or a USB webcam.

If you want to use a USB webcam:

Find out the device ID:
```python 
v4l2-ctl --list-devices
# msm_vidc_media (platform:aa00000.video-codec):
#         /dev/media0
#
# msm_vidc_decoder (platform:msm_vidc_bus):
#         /dev/video32
#         /dev/video33
#
# C922 Pro Stream Webcam (usb-0000:01:00.0-2):
#         /dev/video2     <-- So /dev/video2
#         /dev/video3
#         /dev/media3
```
4. Set the environment variable (we'll use this in our examples):  
```python
export IMSDK_VIDEO_SOURCE="v4l2src device=/dev/video2"
```
If you're on the RB3 Gen 2 Vision Kit, and want to use the built-in camera:  
```python
export IMSDK_VIDEO_SOURCE="qtiqmmfsrc name=camsrc camera=0"
```
### Ex 1: Resizing and cropping on GPU vs. CPU  
Let's show how much faster working on the GPU can be compared to the CPU. If you have a neural network that expects a 224x224 RGB input, you'll need to preprocess your data: first, grab the frame from the webcam (e.g. native resolution is 1980x1080), then crop it to a 1/1 aspect ratio (e.g. crop to 1080x1080), then resize to the desired resolution (224x224), and then create a Numpy array from the pixels.

1. Create a new file ex1.py, and add:
```python 
from gst_helper import gst_grouped_frames, atomic_save_image, timing_marks_to_str
import time, argparse

parser = argparse.ArgumentParser(description='GStreamer -> Python RGB frames')
parser.add_argument('--video-source', type=str, required=True, help='GStreamer video source (e.g. "v4l2src device=/dev/video2" or "qtiqmmfsrc name=camsrc camera=0")')
args, unknown = parser.parse_known_args()

PIPELINE = (
    # Video source
    f"{args.video_source} ! "
    # Properties for the video source
    "video/x-raw,width=1920,height=1080 ! "
    # An identity element so we can track when a new frame is ready (so we can calc. processing time)
    "identity name=frame_ready_webcam silent=false ! "
    # Crop to square
    "videoconvert ! aspectratiocrop aspect-ratio=1/1 ! "
    # Scale to 224x224 and RGB
    "videoscale ! video/x-raw,format=RGB,width=224,height=224 ! "
    # Event when the crop/scale are done
    "identity name=transform_done silent=false ! "
    # Send out the resulting frame to an appsink (where we can pick it up from Python)
    "queue max-size-buffers=2 leaky=downstream ! "
    "appsink name=frame drop=true sync=false max-buffers=1 emit-signals=true"
)

for frames_by_sink, marks in gst_grouped_frames(PIPELINE):
    print(f"Frame ready")
    print('    Data:', end='')
    for key in list(frames_by_sink):
        print(f' name={key} {frames_by_sink[key].shape}', end='')
    print('')
    print('    Timings:', timing_marks_to_str(marks))

    # Save image to disk, frames_by_sink has all the
    frame = frames_by_sink['frame']
    atomic_save_image(frame=frame, path='out/gstreamer.png')
```
2. Let's run this. This pipeline runs on the CPU (using vanilla GStreamer components):
```
python
python3 ex1.py --video-source "$IMSDK_VIDEO_SOURCE"

# Frame ready
#     Data: name=frame (224, 224, 3)
#     Timings: frame_ready_webcam→transform_done: 17.89ms, transform_done→pipeline_finished: 1.89ms (total 19.78ms)
# Frame ready
#     Data: name=frame (224, 224, 3)
#     Timings: frame_ready_webcam→transform_done: 18.01ms, transform_done→pipeline_finished: 1.42ms (total 19.44ms)
```
Here you see the resize/crop takes 18ms., for a total of ~20ms. per frame processing time (measured on RB3 with the built-in camera).

Now let's make this run on the GPU instead... Replace:  
```python 
    # Crop to square
    "videoconvert ! aspectratiocrop aspect-ratio=1/1 ! "
    # Scale to 224x224 and RGB
    "videoscale ! video/x-raw,format=RGB,width=224,height=224 ! "
```
With:
```python
    # Crop (square), the crop syntax is ('<X, Y, WIDTH, HEIGHT >').
    # So here we use 1920x1080 input, then center crop to 1080x1080 ((1920-1080)/2 = 420 = x crop)
    f'qtivtransform crop="<420, 0, 1080, 1080>" ! '
    # then resize to 224x224
    "video/x-raw,format=RGB,width=224,height=224 ! "
```

Run this again:  
```python 
python3 ex1.py --video-source "$IMSDK_VIDEO_SOURCE"

# Frame ready
#     Data: name=frame (224, 224, 3)
#     Timings: frame_ready_webcam→transform_done: 2.48ms, transform_done→pipeline_finished: 1.64ms (total 4.13ms)
# Frame ready
#     Data: name=frame (224, 224, 3)
#     Timings: frame_ready_webcam→transform_done: 1.93ms, transform_done→pipeline_finished: 1.26ms (total 3.19ms)
````
🚀 You've now sped up the crop/resize operation by 9 times; with just two lines of code.  

### Ex 2: Tee'ing streams and multiple outputs  
So... in the pipeline above you've seen a few elements that will be relevant when interacting with your own code:

Identity elements (e.g. identity name=frame_ready_webcam silent=false). These can be used to debug timing in a pipeline. The timestamp when they're emitted is saved, and then returned at the end of the pipeline in the marks element (k/v pair, key is the identity name, value is the timestamp).

Appsink elements (e.g. appsink name=frame). These are used to send data from a GStreamer pipeline to your application. Here the element before the appsink is a video/x-raw,format=RGB,width=224,height=224 - so we'll send a 224x224 RGB array to Python. You receive these in the frames_by_sink element (k/v pair, key is the appsink name, value is the data).

You can have multiple appsinks per pipeline. For example, you might want to grab the original 1920x1080 image as well. In that case you can split the pipeline up in two parts, right after identity name=frame_ready_webcam; and send one part to a new appsink; and the other part through the resize/crop pipeline.

Create a new file ex2.py and add:
```python
from gst_helper import gst_grouped_frames, atomic_save_image, timing_marks_to_str
import time, argparse

parser = argparse.ArgumentParser(description='GStreamer -> Python RGB frames')
parser.add_argument('--video-source', type=str, required=True, help='GStreamer video source (e.g. "v4l2src device=/dev/video2" or "qtiqmmfsrc name=camsrc camera=0")')
args, unknown = parser.parse_known_args()

PIPELINE = (
    # Video source
    f"{args.video_source} ! "
    # Properties for the video source
    "video/x-raw,width=1920,height=1080 ! "
    # An identity element so we can track when a new frame is ready (so we can calc. processing time)
    "identity name=frame_ready_webcam silent=false ! "

    # Split the stream
    "tee name=t "

    # Branch A) convert to RGB and send to original appsink
        "t. ! queue max-size-buffers=1 leaky=downstream ! "
        "qtivtransform ! video/x-raw,format=RGB ! "
        "appsink name=original drop=true sync=false max-buffers=1 emit-signals=true "

    # Branch B) resize/crop to 224x224 -> send to another appsink
        "t. ! queue max-size-buffers=1 leaky=downstream ! "
        # Crop (square), the crop syntax is ('<X, Y, WIDTH, HEIGHT >').
        # So here we use 1920x1080 input, then center crop to 1080x1080 ((1920-1080)/2 = 420 = x crop)
        f'qtivtransform crop="<420, 0, 1080, 1080>" ! '
        # then resize to 224x224
        "video/x-raw,format=RGB,width=224,height=224 ! "
        # Event when the crop/scale are done
        "identity name=transform_done silent=false ! "
        # Send out the resulting frame to an appsink (where we can pick it up from Python)
        "queue max-size-buffers=2 leaky=downstream ! "
        "appsink name=frame drop=true sync=false max-buffers=1 emit-signals=true "
)

for frames_by_sink, marks in gst_grouped_frames(PIPELINE):
    print(f"Frame ready")
    print('    Data:', end='')
    for key in list(frames_by_sink):
        print(f' name={key} {frames_by_sink[key].shape}', end='')
    print('')
    print('    Timings:', timing_marks_to_str(marks))

    # Save image to disk
    frame = frames_by_sink['frame']
    atomic_save_image(frame=frame, path='out/imsdk.png')
    original = frames_by_sink['original']
    atomic_save_image(frame=original, path='out/imsdk_original.png')
    ```
    
2. Run this:
```Python
python3 ex2.py --video-source "$IMSDK_VIDEO_SOURCE"

# Frame ready
#     Data: name=frame (224, 224, 3) name=original (1080, 1920, 3)
#     Timings: frame_ready_webcam→transform_done: 1.79ms, transform_done→pipeline_finished: 4.75ms (total 6.54ms)
# Frame ready
#     Data: name=frame (224, 224, 3) name=original (1080, 1920, 3)
#     Timings: frame_ready_webcam→transform_done: 3.63ms, transform_done→pipeline_finished: 3.59ms (total 7.22ms)
```

(The out/ directory has the last processed frames in both original and resized resolutions)

Alright! That gives you two outputs from a single pipeline. Now you know how to construct more complex applications in a single pipeline.