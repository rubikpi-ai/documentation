---
sidebar_position: 1
description: ''
custom_edit_url: https://github.com/rubikpi-ai/documentation/blob/main/docs-cn/docs/makers-hub/ai-machine-learning/Anomaly-Detection-with-the-Rubik-Pi-3-and-n8n.md
"slug": "/anomaly-detection-with-the-rubik-pi-3-and-n8n/"
---
# 使用魔方派 3 与 n8n 进行异常检测

作者：Roni Bandini
项目链接：[https://studio.edgeimpulse.com/public/374008/live](https://studio.edgeimpulse.com/public/374008/live)
GitHub仓库：[https://github.com/ronibandini/rubikpi3-anomaly-detection](https://github.com/ronibandini/rubikpi3-anomaly-detection)

---
## 简介

本项目旨在使用 Edge Impulse 在 [魔方派 3](https://rubikpi.ai) 上进行计算机视觉质量检测，并通过 n8n 工作流聚合数据并通过邮件发送报告。

![](https://mintcdn.com/edgeimpulse/gbh2rZSgVmZcPbB8/.assets/images/anomaly-detection-n8n-rubik-pi/01.jpg?fit=max&auto=format&n=gbh2rZSgVmZcPbB8&q=85&s=913dffb19cb19734d37169ac6a830705)

## 魔方派 3 简介

魔方派 3 是一款基于高通跃龙™ QCS6490 平台的高性能轻量级开发板。它是首款基于 Qualcomm AI 平台为开发者设计的树莓派风格开发板，以开发者友好的形态提供高性能边缘 AI 能力。主要参数如下：
- 平台：高通跃龙™ QCS6490
- 尺寸：100 mm x 75 mm（紧凑型桌面尺寸）
- AI 性能：集成 Hexagon NPU，最高可达 12 TOPS（万亿次运算/秒）
- GPU：Adreno 643
- 内存：8 GB LPDDR4x
- 存储：128 GB UFS 2.2（比常见的 eMMC 或 SD 卡更快更专业）。

魔方派 3 支持多种操作系统，包括 Qualcomm Linux、Android 和 Ubuntu/Debian，适用于各种 AI、物联网和工业应用。

## 什么是 n8n？

[n8n](https://n8n.io) 是一个流行的自动化和工作流平台，可以轻松连接 API、服务和设备。它让你无需复杂编程即可设计自动化流程、聚合数据并触发如发送报告等操作。

## 所需硬件

- [Thundercomm 魔方派 3](https://www.thundercomm.com/product/rubik-pi)
- 主动式散热器
- 电源：Type-C PD，12V 3A
- USB 网络摄像头

## 硬件连接

1. 电源、USB 摄像头和网线连接到 魔方派 3。
2. 将网线另一端连接到路由器。
3. 按下电源键，等待 魔方派 3 启动。
4. 登录路由器后台查看分配给 魔方派 3 的 IP，或连接键盘、鼠标和显示器。
5. 通过 SSH 或直接在控制台登录：

用户：`ubuntu` 密码：`ubuntu`
> 说明：本教程假定魔方派 3 运行 Canonical Ubuntu。若使用 Qualcomm Linux 系统，`root / rubikpi` 为有效的登录凭证。

## 软件安装

运行以下命令：
```
sudo apt update
wget https://cdn.edgeimpulse.com/firmware/linux/setup-edge-impulse-qc-linux.sh
sudo apt install selinux-utils
source ~/.profile
chmod +x setup-edge-impulse-qc-linux.sh
./setup-edge-impulse-qc-linux.sh
```

![](https://mintcdn.com/edgeimpulse/gbh2rZSgVmZcPbB8/.assets/images/anomaly-detection-n8n-rubik-pi/02.jpg?fit=max&auto=format&n=gbh2rZSgVmZcPbB8&q=85&s=686fbc965df0cb3b7f8b5d33c41d92e9)

## 异常检测项目

您可以从头开始创建一个视觉异常检测项目——参考 [此项目](https://docs.edgeimpulse.com/projects/expert-network/fomo-ad-ti-tda4vm) 了解如何在 Edge Impulse 中构建异常检测项目，或直接克隆本项目。该项目是使用电子元件训练完成的。[https://studio.edgeimpulse.com/studio/374008/acquisition/training?page=1](https://studio.edgeimpulse.com/studio/374008/acquisition/training?page=1)。
在魔方派 3 上，用 Edge Impulse 账号登录并选择项目，直接运行：
```
edge-impulse-linux-runner
```

Edge Impulse Linux runner 的默认 JSON 输出如下：
```
visual anomalies 1ms. [
{"height":19,"label":"anomaly","value":57.811683654785156,"width":19,"x":0,"y":0},
{"height":19,"label":"anomaly","value":69.89027404785156,"width":19,"x":19,"y":0},
```

## n8n 流程

1. 在 [https://app.n8n.cloud/register](https://app.n8n.cloud/register) 注册免费账号
2. 创建包含 x、y 和 value 字段的数据表
3. 导入 n8n 模板：[https://github.com/ronibandini/rubikpi3-anomaly-detection/blob/main/EI%20with%20Rubik%20Pi%203%20upload.json](https://github.com/ronibandini/rubikpi3-anomaly-detection/blob/main/EI%20with%20Rubik%20Pi%203%20upload.json)
4. 点击 `webhook` 节点获取生产 URL
5. 在 魔方派 3 下载 [runner.py](https://github.com/ronibandini/rubikpi3-anomaly-detection/blob/main/runner.py)，并将文件中的 `webhook` 和 `threshold` 变量修改为你的值。
6. 在 魔方派 3 上运行 `python3 runner.py`

![](https://mintcdn.com/edgeimpulse/gbh2rZSgVmZcPbB8/.assets/images/anomaly-detection-n8n-rubik-pi/03.jpg?fit=max&auto=format&n=gbh2rZSgVmZcPbB8&q=85&s=177d8fe51e3c9b7cf4552c8234136404)

![](https://mintcdn.com/edgeimpulse/gbh2rZSgVmZcPbB8/.assets/images/anomaly-detection-n8n-rubik-pi/04.jpg?fit=max&auto=format&n=gbh2rZSgVmZcPbB8&q=85&s=2ce7311b9ed5616e6a5e63a8b4f3817f)

将物体放在摄像头前。当异常分数超过阈值时，n8n 表会新增一条记录。你可以随时点击“Generate Graph”，将异常检测图表发送到你的邮箱。

![](https://mintcdn.com/edgeimpulse/gbh2rZSgVmZcPbB8/.assets/images/anomaly-detection-n8n-rubik-pi/05.jpg?fit=max&auto=format&n=gbh2rZSgVmZcPbB8&q=85&s=7713130a6d75d00db448f43912c46d11)

![](https://mintcdn.com/edgeimpulse/gbh2rZSgVmZcPbB8/.assets/images/anomaly-detection-n8n-rubik-pi/06.jpg?fit=max&auto=format&n=gbh2rZSgVmZcPbB8&q=85&s=8da201244a25cb516d84c23a03db5185)

## 总结

该项目展示了如何将魔方派 3 与 Edge Impulse 异常检测模型结合使用，并通过 n8n 生成的自动化工具简化工作流创建，操作十分简便。凭借原生 Ubuntu 支持，可轻松安装 Edge Impulse Linux Runner；模型创建过程与其他 Edge Impulse 项目一样在 Studio 中完成；异常检测报告则通过 n8n 直观友好的界面进行处理。

![](https://mintcdn.com/edgeimpulse/gbh2rZSgVmZcPbB8/.assets/images/anomaly-detection-n8n-rubik-pi/07.jpg?fit=max&auto=format&n=gbh2rZSgVmZcPbB8&q=85&s=612b65a1433b6157a79a76d7d12a1386)

## 文件与链接

 [https://github.com/ronibandini/rubikpi3-anomaly-detection](https://github.com/ronibandini/rubikpi3-anomaly-detection) 
 [https://studio.edgeimpulse.com/studio/374008/devices](https://studio.edgeimpulse.com/studio/374008/devices)


