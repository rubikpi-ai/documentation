---
sidebar_position: 3
description: ''
custom_edit_url: https://github.com/rubikpi-ai/documentation/blob/main/docs-cn/docs/makers-hub/ai-machine-learning/YOLO-Pro-Smart-Parking-Meter-Rubik-Pi-3.md
"slug": "/yolo-pro-smart-parking-meter-rubik-pi-3/"
---
# YOLO-Pro 智能停车计时器 - 魔方派 3

作者：Jallson Suryo

项目链接：[https://studio.edgeimpulse.com/public/624749/live](https://studio.edgeimpulse.com/public/624749/live)

演示视频：[https://youtu.be/x9OswYAFIKg](https://youtu.be/x9OswYAFIKg)

GitHub 仓库：[https://github.com/Jallson/YOLO_based_Parking_Meter](https://github.com/Jallson/YOLO_based_Parking_Meter)

如需树莓派版本，请参考：[https://docs.edgeimpulse.com/projects/expert-network/smart-parking-meter-raspberry-pi](https://docs.edgeimpulse.com/projects/expert-network/smart-parking-meter-raspberry-pi)

![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo00.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=ac6412b98fdb1a91987657507d3c20a1)
## 问题描述

传统的路边停车管理依赖静态标识、限时计费和人工巡查，效率低且容易出现违规和管理漏洞，尤其在限时或付费区域更为突出，影响城市管理和收入。智慧城市背景下，亟需自动化、智能化系统实时监控停车行为。

![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo01.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=5ecc513b1cc4fbdcfbf50ca0f3b4933b)
停车区域

## 解决方案

为应对上述挑战，并作为视觉边缘 AI 部署学习的一部分，我们开发了这个采用 Edge Impulse YOLO Pro 目标检测的项目。模型在 Edge Impulse Studio 训练优化后，部署在 [Thundercomm 魔方派 3](https://rubikpi.ai) 上进行实时推理。基于迁移学习和 YOLO Pro 预训练权重，训练数据量大幅减少，同时保持用例高准确率。系统与 Python 跟踪逻辑无缝集成，实现分区停车规则（如禁停区、付费时长、违规阈值）视觉反馈和时序跟踪。最终形成低成本、节能、可扩展的当代城市停车管理解决方案 — 智能停车计时器。
![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo02.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=87797420798f8aad9ed803d43fab7457)
视觉停车系统

### 硬件清单

- [魔方派 3](https://rubikpi.ai)
- USB-C 电源适配器（如 27W Pi 5 电源）
- 树莓派 5 主动散热器（可选）
- 3D 打印外壳（可选）
- PC/笔记本（用于 SSH 和 EDL 模式刷机）
- 键盘、鼠标
- USB-C/A 转 USB-C
- USB-C/A 转 micro-USB
- USB 摄像头/网络摄像头（如 Logitech C920/C922）
- HDMI 显示器
- 迷你三脚架
- 带停车场景的小车模型

![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo03.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=014d67a7284fa79d2177326bee113472)
硬件

### 软件与在线服务

- Edge Impulse Studio
- Edge Impulse Linux & Python SDK
- Ubuntu OS (24.04)
- OpenCV

## 步骤

### 1. 准备魔方派 3

魔方派 3 出厂预装 Qualcomm Linux（基于 Yocto）或精简版 Ubuntu。如果是 QC Linux，需刷成 Ubuntu OS，因为 QC Linux 不支持 `apt`和`dpkg`包管理器，对 OpenCV、GStreamer 的支持有限，且运行环境受限。

准备 USB-C 和 micro-USB 线，[下载 Qualcomm Launcher](https://softwarecenter.qualcomm.com/catalog/item/Qualcomm_Launcher)，按[刷机教程](https://www.thundercomm.com/rubik-pi-3/en/docs/rubik-pi-3-user-manual/1.0.0-u/Update-Software/3.2.Flash-using-Qualcomm-Launcher) 刷写并切换到 Ubuntu OS。

![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/QC01.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=7eee5e5cc4ddbb0c834b67420b2ea3a9)
Qualcomm Launcher

![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/QC02.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=f2739bff994d1406f1d8d048ee5a902f)
EDL 模式

![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/QC03.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=1686511321a51f033a1cb73392ad452b)
Wi-Fi 配置

![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/QC04.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=d1589e38e9127517b49cd630c6d254b5)
刷机完成

刷机成功后，联网、重启并登录（用户名/密码均为 ubuntu），打开终端/SSH，安装 Edge Impulse CLI：
```
sudo apt update
curl -sL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt install -y gcc g++ make build-essential nodejs sox gstreamer1.0-tools gstreamer1.0-plugins-good gstreamer1.0-plugins-base gstreamer1.0-plugins-base-apps
sudo npm install edge-impulse-linux -g —unsafe-perm
```

> 说明：Python SDK 及其他依赖请见第 5 步。

**桌面/显示问题与排查**
默认情况下，魔方派的 Ubuntu 烧录过程仅安装命令行（服务器）版本的 Ubuntu。如需添加 Desktop 环境，可以尝试以下解决方案：

**方案 1：安装 LXDE/轻量桌面**
运行以下命令：
```
sudo apt update
sudo apt install lxde
sudo reboot
```

**方案 2：安装 Ubuntu 桌面版（推荐）**
运行以下命令：
```
sudo apt install qcom-adreno1- libgbm-msm1- libegl-mesa0 libegl1 libgles2 libglvnd0 libvulkan1 weston-
sudo apt install ubuntu-desktop
sudo reboot
```

### 2. 采集数据

在 Edge Impulse Studio 中构建模型的初始阶段需要准备数据。您可以收集自己的数据，以更好地满足项目需求。可用手机/相机采集图片保存到文件夹。Edge Impulse Studio 新手可按如下步骤：
1. 打开 [studio.edgeimpulse.com](https://studio.edgeimpulse.com)，注册或登录，创建新项目。
2. 选择图片项目，目标检测。
3. 进入 Dashboard > Project Info， 选择 **Bounding Boxes** 标注方式，目标设备选 **魔方派 3**。
4. 在数据采集页，点击 Upload Data，选择保存数据的文件夹并上传。

也可将 USB 摄像头接魔方派，通过 Edge Impulse Studio 采集图片。魔方派安装好 Edge Impulse Linux CLI 后，运行：
`edge-impulse-linux --clean`
 

运行该命令后会启动一个向导，提示你登录并选择项目，然后将魔方派与 USB 摄像头连接到 Studio 项目以采集照片。
![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo04.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=7a4db0d2efe089b46da73da3f95e6fad)
上传数据

![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo05.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=a6c6586dc7fd9e7210acaaf1dbdff178)
从魔方派采集样本

![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo06.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=8dc03854365ede48d0312733040e4fed)
从连接的设备采样

### 3. 标注

下一步是标注，点击 Data Acquisition，再点击 Labeling queue 页签，拖动方框圈选目标并标注，然后点击保存。重复此操作直到所有图片都被标注。也可以尝试 Edge Impulse 的新功能 [AI 自动标注](https://docs.edgeimpulse.com/studio/projects/data-acquisition/ai-labeling) 来加快处理。
 

标注完成后，建议将数据按 8:2 比例分为训练集和测试集。如果还未分好，可以点击 Train / Test Split 自动完成。
![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo07.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=797983cc8cd14bd9d7572d56fb18562d)
手动标注


### 4. 训练并构建 YOLO-Pro 模型

标注数据集准备好后，进入 Impulse Design > Create Impulse，设置图片宽高为 **320x320**，选择 Fit shortest axis，然后添加 Image 和 Object Detection 学习模块，点击保存。接着进入 Image Parameters，选择 RGB 作为色彩深度，保存参数。然后点击 Generate，可查看特征数据的分布图。

进入 Object Detection 配置训练参数，选择 GPU，训练轮数设为 200，学习率 0.001，模型大小选中等，神经网络架构选 **YOLO-Pro**。设置完成后点击 Start 开始训练并观察进度。

如果训练精度达到 90% 左右，进入 Model Testing，点击 Classify all，结果也在 90% 左右即可进入最后部署阶段。

![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo08.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=c5b756c2b150de40a6859da962fadad2)
学习模块

![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo09.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=658f499e67dbf6120a498ee9687c4a0a)
保存参数

![](https://mintcdn.com/edgeimpulse/zkPsEzVgmFnPIeTD/.assets/images/smart-parking-meter-rubik-pi/photo10.png?fit=max&auto=format&n=zkPsEzVgmFnPIeTD&q=85&s=8ec3d39e1e88c87df9f21629575e1529)
生成特征

![](https://mintcdn.com/edgeimpulse/X_EQ4hZ1JvdmBO7u/.assets/images/smart-parking-meter-rubik-pi/photo11.png?fit=max&auto=format&n=X_EQ4hZ1JvdmBO7u&q=85&s=b9a9004c8d9e27444fca4d318c98664f)
神经网络设置与结果

![](https://mintcdn.com/edgeimpulse/X_EQ4hZ1JvdmBO7u/.assets/images/smart-parking-meter-rubik-pi/photo12.png?fit=max&auto=format&n=X_EQ4hZ1JvdmBO7u&q=85&s=62b7dceaa1ade13b7532416d3be5d175)
对比效果

![](https://mintcdn.com/edgeimpulse/X_EQ4hZ1JvdmBO7u/.assets/images/smart-parking-meter-rubik-pi/photo13.png?fit=max&auto=format&n=X_EQ4hZ1JvdmBO7u&q=85&s=7b52cfa7fba651f059a5d2455699fc74)
模型测试


### 5. 在魔方派 3 上部署模型

只需确保模型已在 Edge Impulse Studio 构建完成。现在可以直接在魔方派（Ubuntu 24.04）上测试、下载和运行模型。

在魔方派上需做如下准备：安装较新版本的 Python 3（>=3.7），Ubuntu 24.04 默认自带 Python 3.12，可用 `python3 --version` 验证。

确保已安装最新版 Edge Impulse Linux CLI（见第 1 步）。然后安装 Linux Python SDK、OpenCV、ffmpeg、Gstreamer、numpy 等依赖：
```
sudo apt update && sudo apt upgrade -y
sudo apt install -y python3-pip python3-opencv ffmpeg gstreamer1.0-tools gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav libportaudio2
pip3 install numpy
pip3 install edge_impulse_linux
```

你可以克隆此仓库获取示例：`git clone https://github.com/edgeimpulse/linux-sdk-python`

然后安装其它依赖：`pip install -r requirements.txt`

接下来通过 Edge Impulse runner 构建/下载/运行模型。在魔方派终端或通过 PC/笔记本 ssh 连接后，直接输入 `edge-impulse-linux-runner`（如曾用过其他项目可加 `--clean` 重新选择）。登录账号后选择项目，再选择具体 Impulse（如有），并确保选择 **quantized model**。此过程会下载专为 aarch64 QNN（高通 Hexagon 架构）构建的 *model.eim* 文件。控制台会显示下载路径。例如下图所示文件位于 */home/ubuntu/.ei-linux-runner/models/624749/v10-quantized…../model.eim*。
![](https://mintcdn.com/edgeimpulse/X_EQ4hZ1JvdmBO7u/.assets/images/smart-parking-meter-rubik-pi/photo14.png?fit=max&auto=format&n=X_EQ4hZ1JvdmBO7u&q=85&s=412b3da41b1434ed3d65c6ba68793ca8)
Edge Impulse Runner

下载完成后可用 Ctrl+C 停止推理。

为方便访问，可用如下命令将其复制到 home 目录：`cp -v model.eim /home/ubuntu`

现在模型已准备就绪，可用 Python 等高级语言调用。为确保模型可用，可在连接摄像头的魔方派上重新运行 EI Runner。在浏览器访问魔方派本地 IP 的 4912 端口，查看摄像头画面与推理结果。再次运行：`edge-impulse-linux-runner`

![](https://mintcdn.com/edgeimpulse/X_EQ4hZ1JvdmBO7u/.assets/images/smart-parking-meter-rubik-pi/video01.gif?s=8926f67f37bfd458aa1310488aaa2a90)
实时推理

魔方派 3 上推理时间约 1-3ms，对于目标检测而言速度非常快（树莓派 3 约 40ms）。


### 6. 构建智能停车应用（Python）

借助 Edge Impulse Runner 的高精度实时推理，我们可以编写基于 Python 的停车计时程序。该代码利用 YOLO-Pro 模型检测到的边界框进行目标跟踪和停车时长分析。每一帧会识别车辆位置和尺寸，并通过交并比(IoU)、中心距离和尺寸相似度与已跟踪目标匹配。若匹配成功，判断车辆是否移动，未移动则累计“静止”时长，移动或 3 秒后重新出现则重置计时。只有车辆静止超过 5 秒才显示边界框，确保其确实停车。

每辆车还会根据位置分配到四个停车区（A、B、C、D）之一。A、B 区允许停车，超时（30 秒或 100 秒）边框变红；C 区为禁停区，5 秒后变红；D 区为付费区，显示金额，每 10 秒收取 5 美元。分区逻辑可灵活调整，视觉反馈通过彩色边框和叠加文本实现。

> 说明：分钟已转换为秒，无需按实际停车时长等待。

![](https://mintcdn.com/edgeimpulse/X_EQ4hZ1JvdmBO7u/.assets/images/smart-parking-meter-rubik-pi/photo15.png?fit=max&auto=format&n=X_EQ4hZ1JvdmBO7u&q=85&s=e42453f0b438d1b5be6f67f00be0a873)
代码截图

![](https://mintcdn.com/edgeimpulse/X_EQ4hZ1JvdmBO7u/.assets/images/smart-parking-meter-rubik-pi/photo16.png?fit=max&auto=format&n=X_EQ4hZ1JvdmBO7u&q=85&s=750e9abcbab43c5c597fa5f951230ace)
魔方派显示效果

所有代码、图片和视频可在 https://github.com/Jallson/YOLO_based_Parking_Meter 获取。

连接 USB 摄像头后，运行程序（`parkingmeter.py`）：

`python3 parkingmeter.py <path to modelfile>/model.eim`

演示视频：
https://www.youtube.com/watch?v=x9OswYAFIKg
## 总结

我们已成功将 YOLO-Pro 机器学习模型集成到基于 Python 的视觉停车计时系统中。即便训练数据集很小，模型在本用例下依然表现出可靠精度。目标检测与跟踪的结合让系统能识别已停车车辆、监控时长，并在短暂消失或边框变化时保持跟踪。

系统支持多停车区，每区有独立规则，如禁停提醒、超时警告、动态计费等。这种灵活性让系统能适应真实场景且资源占用低。凭借实时性能、简单部署和低成本硬件，项目目标已圆满达成，且具备良好扩展性，适合智慧城市大规模部署。
