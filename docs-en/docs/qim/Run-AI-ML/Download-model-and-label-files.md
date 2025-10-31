---
sidebar_position: 1
description: ''
custom_edit_url: https://github.com/rubikpi-ai/documentation/blob/main/docs-en/docs/qim/Run-AI-ML/Download-model-and-label-files.md
---
# Download model and label files

Download the model and label files for QCS6490, QCS9075, and QCS8275 to run the AI/ML sample applications.

Do the following on the Linux host computer:

1.  Enable SSH and connect to Wi-Fi. For instructions, see [Sign in using SSH](https://docs.qualcomm.com/bundle/publicresource/topics/80-70018-254/how_to.html#use-ssh).
    
    Note If SSH is already enabled and Wi-Fi is connected, skip this step.
    
2.  Sign in to the target device using SSH:
    
    ```xml
    ssh root@<ip address of target device>
    ```
    
3.  Download the automated script that allows you to download model and label files to the etc/models and etc/labels directories on the target device:
    
    ```cpp
    curl -L -O https://raw.githubusercontent.com/quic/sample-apps-for-qualcomm-linux/refs/heads/main/download_artifacts.sh
    ```
    
    Note Run this script on the target device. Ensure that the target device has a valid internet connection.
    
4.  Set permissions for the script:
    
    ```css
    chmod +x download_artifacts.sh
    ```
    
5.  Run the script with the required arguments to download model and label files on the target device:
    
    ```xml
    ./download_artifacts.sh -v GA1.4-rel -c <soc name>
    ```
    
    Here, replace `<soc name>` with either `QCS6490`, `QCS9075`, or `QCS8275`.
    
6.  The YOLOv8 and YOLO-NAS models aren't available by default. You can use the following options to either download the models using a script or export them with AI Hub APIs.
    
    If you are using [Multistream batch inference](https://docs.qualcomm.com/bundle/publicresource/topics/80-70018-50/multistream-batch-inference.html?vproduct=1601111740013072&version=1.4&facet=Qualcomm%20Intelligent%20Multimedia%20SDK) application, you can generate a batch model.
    
    *   Download the models using a script:
        1.  Create a [Qualcomm AI Hub account](https://app.aihub.qualcomm.com/account/).
        2.  Select the account name, then go to Settings in the upper right corner, and select the API token.
        3.  Export the models on the Linux host computer and set the required permissions:
            
            ```cpp
            curl -L -O https://raw.githubusercontent.com/quic/sample-apps-for-qualcomm-linux/refs/heads/main/scripts/export_model.sh
            ```
            
            ```css
            chmod +x export_model.sh
            ```
            
            Replace API\_TOKEN with the selected key:
            
            ```xml
            ./export_model.sh --api-token=<API_TOKEN>
            ```
            
    *   Export the models using AI Hub APIs:
        
        *   [YOLOv8-Detection-Quantized](https://github.com/quic/ai-hub-models/tree/main/qai_hub_models/models/yolov8_det_quantized)
        *   [Yolo-NAS-Quantized](https://github.com/quic/ai-hub-models/tree/main/qai_hub_models/models/yolonas_quantized)
        
        The current release (GA1.4) uses Qualcomm AI Runtime SDK v2.32.
        
        For example, to export the YOLOv8 QNN model, run the following command:
        
        ```cpp
        python -m qai_hub_models.models.yolov8_det.export --quantize w8a8 --target-runtime=qnn --chipset="qualcomm-qcs6490-proxy" --compile-options="--qairt_version 2.32" --profile-options "--qairt_version 2.32"
        ```
        
        For example, to export the YOLOv8 LiteRT model, run the following command:
        
        ```cpp
        python -m qai_hub_models.models.yolov8_det.export --quantize w8a8 --target-runtime=tflite --chipset="qualcomm-qcs6490-proxy"
        ```
        
    *   Generate a batch model.
        
        To change the batch size of the model, update \<N\> in the following `export` command:
        
        ```cpp
        python -m qai_hub_models.models.<Model_Name>.export --batch-size \<N\> --device "QCS6490 (Proxy)"
        ```
        
        For example, to export the YOLOv8 LiteRT model with `--batch-size 4`, run the following command:
        
        ```cpp
        python -m qai_hub_models.models.yolov8_det.export --quantize w8a8 --target-runtime=tflite --chipset="qualcomm-qcs6490-proxy" --batch-size 4
        ```
        
7.  Update the `q_offset` and `q_scale` constants of the quantized LiteRT model in the JSON file. For instructions, see [Obtain model constants](https://docs.qualcomm.com/bundle/publicresource/topics/80-70017-15B/integrate-ai-hub-models.html#obtain-model-constants).

If any model isn't available after downloading the script file, you can download the model from [IoT–Qualcomm AI Hub](https://aihub.qualcomm.com/iot/models/) and push it on the target device:

```xml
scp <model filename> root@<IP addr of the target device>:/etc/models
```

For example:

```typescript
scp mobilenet_v2_quantized.tflite root@<IP addr of the target device>:/etc/models
```

Note If you want to run the sample applications from the UART shell, remount the file system with read/write permission using the following command on the target device:

```powershell
mount -o remount,rw /usr
```