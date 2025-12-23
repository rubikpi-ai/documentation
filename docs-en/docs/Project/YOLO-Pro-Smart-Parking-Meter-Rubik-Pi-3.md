# YOLO-Pro Smart Parking Meter - Rubik Pi 3

Created By: Jallson Suryo 

Public Project Link: [https://studio.edgeimpulse.com/public/624749/live](https://studio.edgeimpulse.com/public/624749/live) 

Demo Video link: [https://youtu.be/x9OswYAFIKg](https://youtu.be/x9OswYAFIKg) 

GitHub Repo: [https://github.com/Jallson/YOLO_based_Parking_Meter](https://github.com/Jallson/YOLO_based_Parking_Meter) 

For the same project built using a Raspberry Pi, check this link: [https://docs.edgeimpulse.com/projects/expert-network/smart-parking-meter-raspberry-pi](https://docs.edgeimpulse.com/projects/expert-network/smart-parking-meter-raspberry-pi) ![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo00.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=ac6412b98fdb1a91987657507d3c20a1)
## ​Problem Statement

 Traditional on-street parking enforcement, which relies on static signage, time-limited meters, and periodic monitoring by human attendants, is prone to inefficiencies, non-compliance, and enforcement gaps. These limitations often result in parking misuse, particularly in areas with time-restricted or paid zones, undermining both urban regulation and revenue. In the context of smart cities, there is a need for automated, intelligent systems that can monitor parking behavior in real time. ![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo01.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=5ecc513b1cc4fbdcfbf50ca0f3b4933b)
Parking Zone

## ​Solution

 To address this challenge and as part of a learning process in deploying vision-based Edge AI, we developed this project powered by Edge Impulse’s YOLO Pro object detection. The model is trained and optimized using Edge Impulse Studio, then deployed on a [Thundercomm Rubik Pi 3](https://rubikpi.ai) for real-time inference. Leveraging transfer learning and pre-trained weights from YOLO Pro, we significantly reduced the amount of data required for model training while maintaining high accuracy for our targeted use case. This system integrates seamlessly with Python-based tracking logic, enabling enforcement of zone-specific parking rules (e.g., no-parking zones, paid durations, violation thresholds) with visual feedback and temporal tracking. The result is a low-cost, energy-efficient, and scalable solution suitable for modern urban parking management — a Smart Parking Meter. ![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo02.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=87797420798f8aad9ed803d43fab7457)
Vision-based Parking System

### ​Hardware Components

 - [Rubik Pi 3](https://rubikpi.ai)
 - USB-C Power Adaptor (eg. 27W Pi 5 Power adapter)
 - Raspberry Pi 5 Active Cooler (optional)
 - 3D print case (optional)
 - PC/laptop (for ssh and EDL mode firmware flash)
 - Keyboard, mouse
 - USB-C/A to USB-C
 - USB-C/A to micro-USB
 - USB Camera/webcam (eg. Logitech C920/C922)
 - LCD/monitor with HDMI cable
 - Mini tripod
 - Car Miniatures with Street Parking setup

 ![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo03.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=014d67a7284fa79d2177326bee113472)
Hardware

### ​Software & Online Services

 - Edge Impulse Studio
 - Edge Impulse Linux & Python SDK
 - Ubuntu OS (24.04)
 - OpenCV

## ​Steps

### ​1. Preparing the Rubik Pi

 When we receive the Rubik Pi 3, we will find it pre-installed with either Qualcomm Linux (based on Yocto), or a minimal Ubuntu OS version. If yours comes with QC Linux, you need to switch to Ubuntu OS, because it lacks `apt` and `dpkg` package managers, has limited OpenCV, GStreamer support, and runs in a restricted environment. 
 Prepare a USB-C and a micro-USB cable, then follow this link — [https://softwarecenter.qualcomm.com/catalog/item/Qualcomm_Launcher](https://softwarecenter.qualcomm.com/catalog/item/Qualcomm_Launcher) — to download Qualcomm Launcher. Next, follow the instructions here: 
 [https://www.thundercomm.com/rubik-pi-3/en/docs/rubik-pi-3-user-manual/1.0.0-u/Update-Software/3.2.Flash-using-Qualcomm-Launcher](https://www.thundercomm.com/rubik-pi-3/en/docs/rubik-pi-3-user-manual/1.0.0-u/Update-Software/3.2.Flash-using-Qualcomm-Launcher) to perform the flashing and switch the Rubik Pi to Ubuntu OS. ![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/QC01.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=7eee5e5cc4ddbb0c834b67420b2ea3a9)
Qualcomm Launcher

 ![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/QC02.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=f2739bff994d1406f1d8d048ee5a902f)
Put in EDL mode

 ![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/QC03.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=1686511321a51f033a1cb73392ad452b)
WiFi Config

 ![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/QC04.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=d1589e38e9127517b49cd630c6d254b5)
Setup Complete

 Once successfully flashed, connect to the network, reboot and login (ubuntu/ubuntu for user/password), open up the terminal/ssh then you can proceed to install the Edge Impulse CLI:
```
sudo apt update
curl -sL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt install -y gcc g++ make build-essential nodejs sox gstreamer1.0-tools gstreamer1.0-plugins-good gstreamer1.0-plugins-base gstreamer1.0-plugins-base-apps
sudo npm install edge-impulse-linux -g —unsafe-perm
```

>  Note: For the Python SDK and other dependencies, follow the instruction as described in Step 5 below.

 **Desktop / display problems and troubleshooting** 
 By default, the Rubik Pi Ubuntu flashing process will only install the command-line (Server) version of Ubuntu. To add a Desktop, you can try the following solutions: 
 
 **Option 1: Install LXDE / Light desktop** 
 
 Run the following commands:
```
sudo apt update
sudo apt install lxde
sudo reboot
```

 **Option 2: Install Ubuntu Desktop version (recommended)** 
 
 Run the following commands:
```
sudo apt install qcom-adreno1- libgbm-msm1- libegl-mesa0 libegl1 libgles2 libglvnd0 libvulkan1 weston-
sudo apt install ubuntu-desktop
sudo reboot
```

### ​2. Collecting Data

 In the initial stage of building a model in Edge Impulse Studio, we need to prepare the data. You can collect your own data to better suit the purposes of your project; in this case we capture from smartphone/camera and save them in a folder. For those who are not familiar with Edge Impulse Studio, please follow these steps —> Open [studio.edgeimpulse.com](https://studio.edgeimpulse.com), login or create an account then create a new project. Choose Images project option, then Object detection. In Dashboard > Project Info, choose **Bounding Boxes** for labeling method and **Rubik Pi 3* for target device. Then in Data acquisition, click on Upload Data tab. Choose your saved folder then upload. 
 
 You also can connect a USB camera to the Rubik Pi and connect to Edge Impulse Studio to collect images. With the Edge Impulse Linux CLI setup on the Rubik Pi, run: `edge-impulse-linux --clean` 
 
 This will start a wizard which asks you to login and choose your project, then connects your Rubik Pi with USB camera to your Studio project to collect photos. ![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo04.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=7a4db0d2efe089b46da73da3f95e6fad)
Upload data

 ![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo05.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=a6c6586dc7fd9e7210acaaf1dbdff178)
Collect sample from Rubik Pi

 ![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo06.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=8dc03854365ede48d0312733040e4fed)
Sampling from connected device

### ​3. Labeling

 The next step is labeling, now click on Data Acquisition, click on Labeling queue tab, then drag a box around an object and label it, then click Save. Repeat this until all images are labelled. Alternatively, you can try Edge Impulse’s new feature [AI auto labeling](https://docs.edgeimpulse.com/studio/projects/data-acquisition/ai-labeling) to help speed things up. 
 
 After labeling, it’s recommended to split the data into Training and Testing sets, around an 80/20 ratio. If you haven’t done this yet, click on Train / Test Split to automate this process. ![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo07.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=797983cc8cd14bd9d7572d56fb18562d)
Manual labeling

### ​4. Train and build Yolo-Pro model

 Once your labelled dataset is ready, go to Impulse Design > Create Impulse, and set the image width and height to **320x320**. Choose Fit shortest axis, then select Image and Object Detection as the learning blocks, and click Save Impulse. Next, navigate to the Image Parameters section, select RGB as the color depth, and press Save parameters. After that, click on Generate, where you’ll be able to see a graphical distribution of the feature data. 
 
 Now, move to the Object Detection section and configure the training settings. Select GPU and set the training cycles to around 200, learning rate to 0.001 and medium for model size. Choose **YOLO-Pro** as the NN architecture. Once done, start training by pressing Start, and monitor the progress. 
 
 If everything goes well and the precision result is around 90%, proceed to the next step. Go to the Model Testing section, click Classify all, and if the result is around 90%, you can move on to the final step — Deployment. 
 
 ![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo08.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=c5b756c2b150de40a6859da962fadad2)
Learning blocks

 ![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo09.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=658f499e67dbf6120a498ee9687c4a0a)
Save parameters

 ![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo10.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=8ec3d39e1e88c87df9f21629575e1529)
Generate features

 ![](https://mintcdn.com/edgeimpulse/X_EQ4hZ1JvdmBO7u/.assets/images/smart-parking-meter-rubik-pi/photo11.png?fit=max&auto=format&n=X_EQ4hZ1JvdmBO7u&q=85&s=b9a9004c8d9e27444fca4d318c98664f)
NN setting & result

 ![](https://mintcdn.com/edgeimpulse/X_EQ4hZ1JvdmBO7u/.assets/images/smart-parking-meter-rubik-pi/photo12.png?fit=max&auto=format&n=X_EQ4hZ1JvdmBO7u&q=85&s=62b7dceaa1ade13b7532416d3be5d175)
Side by side comparison

 ![](https://mintcdn.com/edgeimpulse/X_EQ4hZ1JvdmBO7u/.assets/images/smart-parking-meter-rubik-pi/photo13.png?fit=max&auto=format&n=X_EQ4hZ1JvdmBO7u&q=85&s=7b52cfa7fba651f059a5d2455699fc74)
Model test

### ​5. Deploy Model on Rubik Pi

 Simply ensure that the model has been built in Edge Impulse Studio. Now, you can test, download the model, and run everything directly from the Rubik Pi (Ubuntu 24.04). 
 
 On the Rubik, there are several things that need to be done. Install a recent version of Python 3 (>= 3.7). Ubuntu 24.04 should comes with with Python 3.12 installed. You can verify this by running this command: `python3 —version`.
 
 Ensure you have the latest Edge Impulse Linux CLI installed (in Step 1). Then install the Linux Python SDK, OpenCV, ffmpeg, Gstreamer, numpy and other dependencies: 
```
sudo apt update && sudo apt upgrade -y
sudo apt install -y python3-pip python3-opencv ffmpeg gstreamer1.0-tools gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav libportaudio2
pip3 install numpy
pip3 install edge_impulse_linux
```

 You can clone this repository to get the examples: `git clone https://github.com/edgeimpulse/linux-sdk-python` 
 
 Then install other dependencies: `pip install -r requirements.txt` 
 
 Next, build/download/run the model via the Edge Impulse runner. Open a terminal on the Rubik Pi or ssh from your PC/laptop then simply type `edge-impulse-linux-runner` (you can add `--clean` to allow you to select your project if you’ve tried a different project in the past). Log in to your account then choose your project. Then choose your specific Impulse (if any) and be sure to select **quantized model**. This process will download the `model.eim`, which is specifically built for aarch64 QNN (Qualcomm Hexagon) architecture. During this process, the console will display the path where the `model.eim` has been downloaded. For example, in the image below, it shows the file located at `/home/ubuntu/.ei-linux-runner/models/624749/v10-quantized…../model.eim` ![](https://mintcdn.com/edgeimpulse/X_EQ4hZ1JvdmBO7u/.assets/images/smart-parking-meter-rubik-pi/photo14.png?fit=max&auto=format&n=X_EQ4hZ1JvdmBO7u&q=85&s=412b3da41b1434ed3d65c6ba68793ca8)
Edge Impulse Runner

 Once this file is downloaded, you can stop the inference process with Ctrl-C on the keyboard. 
 
 For convenience, you can use the following command to copy it to the home directory for easier access: `cp -v model.eim /home/ubuntu` 
 
 Now the model is ready to run in a high-level language such as Python. To ensure this model works, we can re-run the EI Runner with a camera attached to the Rubik Pi. You can see the camera feed and inference in a browser, at the local IP address of the Rubik on port 4912. Run this command once again: `edge-impulse-linux-runner`
 
  ![](https://mintcdn.com/edgeimpulse/X_EQ4hZ1JvdmBO7u/.assets/images/smart-parking-meter-rubik-pi/video01.gif?s=8926f67f37bfd458aa1310488aaa2a90)
Live inferencing

 The inferencing time is around 1-3ms on the Rubik Pi 3, which is very fast for object detection speed (around 40ms on a Raspberry Pi 3 as a reference).

### ​6. Build a Smart Parking Application (Python)

 With the impressive accuracy of live inferencing using the Edge Impulse Runner, we can now create a Python-based Parking Meter program. This code performs object tracking and parking duration analysis using bounding boxes detected by our YOLO-Pro model. For every frame, it identifies the location and size of detected cars, then attempts to match them with previously tracked objects using Intersection over Union (IoU), distance between centers, and size similarity. If a match is found, it checks whether the object has moved; if not, it updates the tracked object’s “stopped” duration. If the object has moved or reappeared after more than 3 seconds, it resets the timer. The system only starts displaying bounding boxes if a car has remained stationary for 5 seconds or more, ensuring it is actually parked. 
 
 Each car is also assigned to one of four parking zones (A, B, C, or D) based on its location. Zone A and B allow parking but turn the bounding box red if the duration exceeds 30 or 100 seconds. Zone C is a no-parking zone and triggers a red box after just 5 seconds. Zone D is a paid parking area where the display shows a dollar amount instead of time, charging $5 every 10 seconds. This zone-based logic allows for flexible rules depending on where the car is parked, and visual feedback is given via color-coded bounding boxes and overlaid text.

>  Note: Minutes are converted to seconds. So that we don’t have to wait for the actual parking time :-)

 ![](https://mintcdn.com/edgeimpulse/X_EQ4hZ1JvdmBO7u/.assets/images/smart-parking-meter-rubik-pi/photo15.png?fit=max&auto=format&n=X_EQ4hZ1JvdmBO7u&q=85&s=e42453f0b438d1b5be6f67f00be0a873)
Code Screenshot

 ![](https://mintcdn.com/edgeimpulse/X_EQ4hZ1JvdmBO7u/.assets/images/smart-parking-meter-rubik-pi/photo16.png?fit=max&auto=format&n=X_EQ4hZ1JvdmBO7u&q=85&s=750e9abcbab43c5c597fa5f951230ace)
Rubik Pi display

 All code, images and videos can be accessed at: [https://github.com/Jallson/YOLO_based_Parking_Meter](https://github.com/Jallson/YOLO_based_Parking_Meter) 
 
 With a USB camera connected to the Rubik Pi, run the program (`parkingmeter.py`) with the following command: `python3 parkingmeter.py <path to modelfile>/model.eim` 
 
 Check out our demo video:
 https://www.youtube.com/watch?v=x9OswYAFIKg
## ​Conclusion

 We have successfully implemented a YOLO-Pro ML model into our Python-based visual parking meter system. Despite using a minimal dataset for training, the model achieved reliable accuracy in our use case. The integration of object detection and tracking allows the system to recognize parked vehicles, monitor their duration, and maintain consistent tracking even in challenging conditions like short disappearances or slight changes in bounding box size. 
 
 The system also supports multiple parking zones, each with its own enforcement rules, such as no-parking alerts, time-based violations, and dynamic fee calculation. This level of flexibility demonstrates the system’s ability to adapt to real-world constraints while keeping resource usage low. With its real-time performance, simple setup, and cost-effective hardware, the project has successfully met our objectives. The result is also scalable, well-suited for broader deployment in smart city infrastructure.
