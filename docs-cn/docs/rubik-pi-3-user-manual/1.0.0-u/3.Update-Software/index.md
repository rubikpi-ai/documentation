---
custom_edit_url: https://github.com/rubikpi-ai/documentation/blob/main/docs-cn/docs/rubik-pi-3-user-manual/1.0.0-u/3.Update-Software/index.md
---
# 更新软件

完成设置并且设备成功启动后，在设备shell中运行以下命令来验证操作系统版本：

        ```shell
        cat /etc/os-release 
        ```
    输出：
        ```json
    NAME="Ubuntu"
    VERSION_ID="24.04"
    VERSION="24.04.2 LTS (Noble Numbat)"
    VERSION_CODENAME=noble
    ID=ubuntu
    ID_LIKE=debian
    HOME_URL="https://www.ubuntu.com/"
    SUPPORT_URL="https://help.ubuntu.com/"
    BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
    PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
    UBUNTU_CODENAME=noble
    LOGO=ubuntu-logo
    ```

根据操作系统版本，按照以下路径之一升级或刷写您的软件。

|路径          | 何时使用           | 链接|
|--------------|-------------------|------|
|将预装Ubuntu升级到最新的Canonical版本（**无需重新刷写**）|如果您的魔方派已经运行Ubuntu，请使用此路径升级到具有最新工具和修复的版本，无需完全重新安装。|[**🔗升级Canonical Ubuntu到最新版本**](3.1.upgrade-ubuntu.md)|
|在Android/QLI/Ubuntu上刷写Canonical Ubuntu 24.04（**用于全新Ubuntu设置**）|使用此路径从Android或Qualcomm Linux (QLI)完全切换到用于开发的Canonical Ubuntu 24.04。|[**🔗 使用Qualcomm Launcher刷写镜像**](3.2.Flash-using-Qualcomm-Launcher.md)|


:::note
如果您在使用Qualcomm Launcher刷写时遇到问题，请参考故障排除部分中的手动刷写方法 [**手动刷写**](../11.Troubleshooting/11.1.flash-over-android.md)。
:::