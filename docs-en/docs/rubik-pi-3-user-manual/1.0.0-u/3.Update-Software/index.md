# Update Software

After completing the setup and once the device has successfully booted, verify the OS version by running the following commands in the device shell:

        ```shell
        cat /etc/os-release 
        ```
    Output: 
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

Based on the OS version, follow one of the path below to upgrade or flash your software.  
|Path          | When to choose           | Links|
|--------------|-------------------|------|
|Upgrade Preinstalled Ubuntu to Latest Canonical Build (**Without Reflashing**)|If your RUBIK Pi already runs Ubuntu, use this path to upgrade with the latest tools and fixes—no full reinstall needed.|[**🔗Upgrade Canonical Ubuntu to Latest Build**](../3.Update-Software/3.1.upgrade-ubuntu.md)|
|Flash Canonical Ubuntu 24.04 Over Android/QLI/Ubuntu (**For Fresh Ubuntu Setup**)|Use this path to fully switch from Android or Qualcomm Linux (QLI) to Canonical Ubuntu 24.04 for development.|<a href='/rubik-pi-3/en/docs/rubik-pi-3-user-manual/1.0.0-u/Update-Software/3.2.Flash-using-Qualcomm-Launcher' target='_blank'>**🔗 Flash images using Qualcomm Launcher**</a>|


:::note
If you experience issues while flashing with the Qualcomm Launcher, please refer to the manual flashing method in the Troubleshooting section [**Manual Flash**](../11.Troubleshooting/11.1.flash-over-android.md).  
:::