---
sidebar_position: 2
description: ''
custom_edit_url: https://github.com/rubikpi-ai/documentation/blob/main/docs-cn/docs/makers-hub/ai-machine-learning/Audio-Classification-and-GPIO-Response-Rubik-Pi-3.md
"slug": "/audio-classification-and-gpio-response-rubik-pi-3/"
---
# 音频分类与 GPIO 响应 - 魔方派 3

作者：Roni Bandini

项目链接：[https://studio.edgeimpulse.com/studio/828677](https://studio.edgeimpulse.com/studio/828677)

GitHub 仓库：[https://github.com/ronibandini/Rubik-Pi-AudioClassification](https://github.com/ronibandini/Rubik-Pi-AudioClassification)

![](https://mintcdn.com/edgeimpulse/WqaPsdFJNoI52uqV/.assets/images/audio-classification-gpio-rubik-pi/01.jpg?fit=max&auto=format&n=WqaPsdFJNoI52uqV&q=85&s=f75ffe3998ed96e6d6e4998e9db68093)
## 简介

布宜诺斯艾利斯的犯罪模式像时尚潮流一样不断变化。最近，砸车窗盗窃物品的案件频发。我有多台朝向街道的摄像头，经常能目睹这些犯罪，失主也会找我要录像。但报案越晚，找回失物的概率就越低。

受此问题启发，同时也为了测试魔方派 3 的新功能，本项目在魔方派 3 上部署一个声音分类模型。该模型可识别玻璃破碎的独特声音，并在检测到声音时触发 GPIO 响应（如立即亮灯/警报或发送通知）。
## 魔方派 3 简介

魔方派 3 是一款基于高通跃龙™ QCS6490 平台的高性能轻量级开发板。它是首款基于 Qualcomm AI 平台为开发者设计的树莓派风格开发板，以开发者友好的形态提供高性能边缘 AI 能力。主要参数如下：
- 平台：高通跃龙™ QCS6490
- 尺寸：100 mm x 75 mm（紧凑型桌面尺寸）
- AI 性能：集成 Hexagon NPU，最高可达 12 TOPS（万亿次运算/秒）
- GPU：Adreno 643
- 内存：8 GB LPDDR4x
- 存储：128 GB UFS 2.2（比常见的 eMMC 或 SD 卡更快更专业）。

魔方派 3 支持多种操作系统，包括 Qualcomm Linux、Android 和 Ubuntu/Debian，适用于各种 AI、物联网和工业应用。

## 所需硬件

- [Thundercomm 魔方派 3](https://www.thundercomm.com/product/rubik-pi)
- 主动式散热器
- 电源：Type-C PD，12V 3A
- USB 麦克风（也可用 3.5mm 接口的普通麦克风）
- 1 个 LED
- 2 根母对母跳线

## 硬件连接

1. 将电源、USB 麦克风和网线连接到魔方派 3。
2. 将网线另一端连接到路由器。
3. 按下电源键，等待魔方派 3 启动。
4. 登录路由器后台查看分配给魔方派 3 的 IP，或连接键盘、鼠标和显示器。
5. 通过 SSH 或直接在控制台登录：

用户：`ubuntu` 密码：`ubuntu`
> 说明：本教程假定魔方派 3 运行 Canonical Ubuntu。若使用 Qualcomm Linux，`root / rubikpi` 为有效的登录凭证。

## 声音分类项目

我已创建新的 Edge Impulse 项目，并通过数据采集上传了街道常规声音和玻璃破碎声音。

玻璃破碎音频文件（.wav 格式）来自另一个公开项目，由 [Zalmotek](https://zalmotek.com) 在 [Edge Impulse 教程](https://docs.edgeimpulse.com/projects/expert-network/glass-break-detection-nordic-thingy53) 中创建。该项目及音频文件可在此克隆：https://studio.edgeimpulse.com/studio/828677

![](https://mintcdn.com/edgeimpulse/WqaPsdFJNoI52uqV/.assets/images/audio-classification-gpio-rubik-pi/02.jpg?fit=max&auto=format&n=WqaPsdFJNoI52uqV&q=85&s=3e6d130ab28ef4a3f1a665e08d65c9e3)
## 软件安装

在魔方派 3 上运行以下命令安装 Edge Impulse：
```
sudo apt update
wget https://cdn.edgeimpulse.com/firmware/linux/setup-edge-impulse-qc-linux.sh
sudo apt install selinux-utils
source ~/.profile
chmod +x setup-edge-impulse-qc-linux.sh
./setup-edge-impulse-qc-linux.sh
```

连接 USB 麦克风，然后运行：
```
alsamixer
```

按 **F6** 选择 USB 麦克风输入，多次按上箭头提高输入音量。

![](https://mintcdn.com/edgeimpulse/WqaPsdFJNoI52uqV/.assets/images/audio-classification-gpio-rubik-pi/03.jpg?fit=max&auto=format&n=WqaPsdFJNoI52uqV&q=85&s=fde5460ba05ee416043a5405e1d9a084)

退出后运行以下命令安装 Python 并启用 GPIO 访问：
```
sudo apt install python3-pip
sudo apt install python3-periphery
sudo groupadd -f gpio
sudo usermod -aG gpio ubuntu
sudo nano /etc/udev/rules.d/99-gpio.rules
```

在文件中添加如下内容：
```
SUBSYSTEM=="gpio";, KERNEL==";gpiochip*";, GROUP=";gpio";, MODE=";0660";
SUBSYSTEM==";gpio";, ACTION==";add";, PROGRAM=";/bin/sh -c 'chown root:gpio /sys/class/gpio/export /sys/class/gpio/unexport; chmod 220 /sys/class/gpio/export /sys/class/gpio/unexport'";
SUBSYSTEM==";gpio";, ACTION==";add";, PROGRAM=";/bin/sh -c 'chown root:gpio /sys%p/direction /sys%p/value; chmod 660 /sys%p/direction /sys%p/value'";
```

按 Ctrl+S 保存，Ctrl+X 退出。

最后，重载 udev 规则并重启：
```
sudo udevadm control --reload-rules
sudo udevadm trigger
sudo reboot
```

重启并重新连接后，运行：
```
edge-impulse-linux-runner --clean
```


登录你的 Edge Impulse 账号，选择项目并选择 USB 麦克风。推理将自动开始，你会看到类似如下的输出：
```
classifyRes 2ms. { street: 0.9999, glass: 0.0001 }
classifyRes 2ms. { street: 0.8629, glass: 0.1371 }
```

按 Control+C 退出推理。

![](https://mintcdn.com/edgeimpulse/WqaPsdFJNoI52uqV/.assets/images/audio-classification-gpio-rubik-pi/04.jpg?fit=max&auto=format&n=WqaPsdFJNoI52uqV&q=85&s=5d2f6e594a53abdaa9b8a9afef0e7ed0)
## GPIO 设置

现在将 LED 连接到 GPIO 13 和 GPIO 6（GND）。注意，魔方派 3 的 13 号引脚对应子系统编号 571。下表为所有引脚映射。

![](https://mintcdn.com/edgeimpulse/WqaPsdFJNoI52uqV/.assets/images/audio-classification-gpio-rubik-pi/05.jpg?fit=max&auto=format&n=WqaPsdFJNoI52uqV&q=85&s=628e59eae7084a4c044439dfeeb4cc65)

![](https://mintcdn.com/edgeimpulse/WqaPsdFJNoI52uqV/.assets/images/audio-classification-gpio-rubik-pi/08.jpg?fit=max&auto=format&n=WqaPsdFJNoI52uqV&q=85&s=7132bc5d69dab288aaa1f290b9ec8706)
### Python 解析器

将[本项目 GitHub 仓库](https://github.com/ronibandini/Rubik-Pi-AudioClassification)中的`glass.py`文件通过 SFTP 传到魔方派 3，也可直接在魔方派 3 上克隆仓库。

然后运行 `python3 glass.py`。

推理将自动开始，每当检测到玻璃破碎声时，GPIO 引脚会被拉高（本例中点亮 LED）。可以通过编写应用逻辑来扩展功能，适配各种使用场景。

![](https://mintcdn.com/edgeimpulse/WqaPsdFJNoI52uqV/.assets/images/audio-classification-gpio-rubik-pi/06.jpg?fit=max&auto=format&n=WqaPsdFJNoI52uqV&q=85&s=7435a9a810e230d09824d91978963de0)

![](https://mintcdn.com/edgeimpulse/WqaPsdFJNoI52uqV/.assets/images/audio-classification-gpio-rubik-pi/07.jpg?fit=max&auto=format&n=WqaPsdFJNoI52uqV&q=85&s=8a169bd59664ac28a0e7b0bc6fca6341)
## 功能增强

还可以让魔方派 3 在推理发生时调用 webhook，发送 WhatsApp 或邮件通知。以下是实现该功能的代码示例：
```
def call_webhook(webhook_url, confidence):
    import requests
    from datetime import datetime

    try:
        payload = {
            "event": "window_break_detected",
            "confidence": confidence,
            "timestamp": datetime.now().isoformat(),
            "device": "Rubik Pi 3"
        }

        response = requests.post(
            webhook_url,
            json=payload,
            timeout=5
        )

        if response.status_code == 200:
            print(f"✓ Webhook notification sent successfully")
        else:
            print(f"⚠️ Webhook returned status code: {response.status_code}")

    except requests.exceptions.Timeout:
        print("⚠️ Webhook request timed out")
    except requests.exceptions.RequestException as e:
        print(f"⚠️ Webhook error: {e}")
```

## 补充说明

在启发式编程范式下，利用音频检测玻璃破碎极具挑战，但如今只要选对工具就能轻松实现。Thundercomm 魔方派 3 与 Edge Impulse 无缝集成，拥有充足的资源支持本地机器学习推理，并可通过 GPIO 引脚灵活连接外部设备。
## 相关链接

[Edge Impulse 项目页面](https://studio.edgeimpulse.com/studio/828677)
[项目 GitHub](https://github.com/ronibandini/Rubik-Pi-AudioClassification)
## 联系方式

 Roni Bandini [https://www.linkedin.com/in/ronibandini](https://www.linkedin.com/in/ronibandini/)
