import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Setup your device

This chapter offers a streamlined guide for developers to set up the **RUBIK Pi 3** development board across **Ubuntu**, **Windows®**, and **macOS®** environments. Whether you're powering on the device for the first time, configuring the debug UART for serial access, or establishing network and SSH connections, this section ensures a smooth and reliable onboarding experience.  
It also covers essential procedures such as entering **EDL mode** for firmware flashing and verifying your **Ubuntu 24.04** installation—laying the foundation for AI, multimedia, and embedded development workflows.  

### 🏁 Let’s Get Started!
![](.././images/Setup1.png)

<a id="poweron"></a>
## Power on the device

 Connect a 12V, 3A Type-C power adapter.  
 :::warning
RUBIK Pi 3 supports Power Delivery (PD) 3.0 power input. **A Type-C 12V 3A power adapter compliant with PD 3.0 is recommended for input power**.
The power indicator LED near the power port will turn on if the power adapter meets requirements and power negotiation succeeds. If the adapter does not meet requirements, the LED will remain off and the device will not boot.
:::
:::note
Plug in a USB Type-C to USB Type-A or a Type-C cable to establish connection for flashing operation.  
:::

Board versions v02 and later support automatic power-on after the power adapter is connected. You can check the hardware version number at the following location on the board. In the example below, the hardware version is V02.

![](./images/20250728-124347.jpg)

:::note
If the blue LED on the board is constantly lit, it indicates that the power button was pressed for too long, and the board is in fastboot mode. Please refer to [**troubleshooting guide**](../11.Troubleshooting/13.troubleshooting.md#how-do-i-exit-fastboot-mode-on-the-rubik-pi-3) to exit the fastboot mode. 
:::


<a id="setUART"></a>
## Set up the Debug UART

The debug UART displays diagnostic messages and provides access to the device via a UART shell.

1. Connect a Micro-USB cable to the Micro-USB port on your RUBIK Pi 3.

![](./images/20250701-180541.jpg)

2. Connect the other end of the Micro-USB cable to the host.
   Follow one of the following instructions based on the host operating system.

<Tabs>
<TabItem value="Ubuntuhost" label="Ubuntu host">

1. Run the following commands to install screen for accessing the UART console.
   ```shell
   sudo apt update
   sudo apt install screen
   ```

2. Run the following command to check the USB port:

   ```shell
   ls /dev/ttyACM*
   ```

   Sample output

   ```shell
   /dev/ttyACM0
   ```

3. Run the following command to open the debug UART session.  
   ```shell
   sudo screen <serial_port> <baud_rate>
   ```
Example: `sudo screen /dev/ttyACM0 115200`  
4. Open the debug UART interface and press Enter to display the authentication prompt.  
5. If Canonical Ubuntu is already flashed on the device, log in via the UART console and proceed to reset the user password.  
    * Account: `ubuntu`
    * Password: `ubuntu`

:::tip
 If you are unable to log in properly, check that your RUBIK Pi 3 has been upgraded to the Ubuntu 24.04. For detailed upgrade steps, refer to [Update software](../2.Update-Software/2.upgrade-ubuntu.md).
:::

:::tip

 If you do not see the authentication console as expected, please check the USB connection. If necessary, disconnect and reconnect the Micro USB cable.
::: 
</TabItem>
<TabItem value="winhost" label="Windows host">

1. Download [PuTTY](https://www.putty.org/) for your Windows host. Make sure you select the correct version (32-bit or 64-bit).  
2. Run the installation wizard and follow the prompts.  
3. After installation, open the PuTTY application from the list of installed programs in the **Start** menu, or search for it in the search bar on the taskbar.  
4. In the PuTTY Configuration dialog box, perform the following actions:  

   1. Select Serial.  
   2. Specify the serial line based on the UART port detected in Windows Device Manager.  

   :::note
   If the UART port is not detected, download the driver and update it using Windows Device Manager:  
   * On x86 systems: [USB to UART serial driver](https://ftdichip.com/wp-content/uploads/2023/09/CDM-v2.12.36.4-WHQL-Certified.zip).  
   * On Arm(®) systems: Visit https://oemdrivers.com/usb-ft232r-usb-uart-arm64. Under **Drivers**, click **FTDI CDM VCP Drivers**.
   :::

   1. Set the baud rate to 115200.  
   2. Click **Open** to start the PuTTY session.  

    ![](.././images/image-3.jpg)

5. Open the serial device and press **Enter** to bring up the authentication prompt.  
6. Log in to the UART console and follow the prompts to reset the password.  

    * Account: `ubuntu`    
    * Password: `ubuntu`  

:::tip
If you are unable to log in properly, check that your RUBIK Pi 3 has been upgraded to the Ubuntu 24.04. For detailed upgrade steps, refer to [Update software](../2.Update-Software/2.upgrade-ubuntu.md).
:::

:::tip
 If you do not see the authentication console as expected, please check the USB connection. If necessary, disconnect and reconnect the Micro USB cable.
:::
</TabItem>
<TabItem value="machost" label="macOS host">

1. Run the following command to check the serial device connected to the macOS host.
   ```shell
   ls /dev/cu.*
   ```
2. Find your device in the list of serial devices.

    ![](.././images/image-4.jpg)

3. Run the following command to open the serial device.
    ```shell
    screen <serial_device_node> <baud_rate>
    ```
    :::note
    * Replace `<serial_device_node>` with the device node name.  
    * Replace `<baud_rate>` with an appropriate baud rate.
    :::

Sample command: `ceteam@Qualcomms-MacBook-Pro ~ % screen /dev/cu.usbserial-DM03SDQQ 115200`

4. Open the serial device and press **Enter** to bring up the authentication prompt.  
5. Log in to the UART console and follow the prompts to reset the password.  
    * Account: `ubuntu`  
    * Password: `ubuntu`

:::tip
 If you are unable to log in properly, check that your RUBIK Pi 3 has been upgraded to the Ubuntu 24.04. For detailed upgrade steps, refer to [Update software](../2.Update-Software/2.upgrade-ubuntu.md).
:::

:::tip  
 If you do not see the authentication console as expected, please check the USB connection. If necessary, disconnect and reconnect the Micro USB cable.
::: 
</TabItem>
</Tabs>

<a id="conNET"></a>
## Connect to the network

Use one of the following methods to establish an internet connection and obtain the device's IP address.

<Tabs>
<TabItem value="WiFi" label="Connect using Wi-Fi">

The device is running in Station mode for Wi-Fi. When the device boots up, it initializes the Wi-Fi host driver and performs network management authentication. Users can establish a wireless connection using the nmcli command-line tool.

1. Run the following command to connect to the wireless access point (Wi-Fi router):

   ```shell
   nmcli dev wifi connect <WiFi-SSID> password <WiFi-password>
   ```

    Example

    ```
    nmcli dev wifi connect RUBIKPiWiFi password 1234567890
    ```
    ```
    Device 'wlan0' successfully activated with 'd7b990bd-3b77-4b13-b239-b706553abaf8'.
    ```

2. Run the following command to verify the connection and device status:

      ```shell
      nmcli -p device
      ```

    ![](.././images/image-7.jpg)

3. Run the following command to verify the WLAN connection status and IP address.

    ```shell
    ip addr
     ```

     ![](.././images/image-8.jpg)

4. To ensure the connection is active, perform a ping operation to a website such as that of RUBIK Pi:

     ```shell
    ping rubikpi.ai
     ```
 </TabItem>
   <TabItem value="ETH" label="Connect using Ethernet">

1. Connect one end of an Ethernet cable to the Ethernet port (RJ45) on your RUBIK Pi 3, and the other end to the network router.

![](.././images/image-5.jpg)

2. After establishing the connection, run the following command on the UART serial console to obtain the IP address:

    ```shell
    ip addr
    ```

    ![](.././images/image-6.jpg)
  </TabItem>
</Tabs>

## Establish SSH connection  

Secure Shell (SSH) is used for secure file transfer between the host and RUBIK Pi 3.

Before connecting to SSH, ensure that the network connection is established.

1. To find the IP address based on the network connection type, run the following command in the UART console:

   ```shell
   ip addr
   ```

2. Run the following command from the host to establish an SSH connection with the device. Use the IP address obtained in step 1.

   ```shell
   ssh <user name>@ip-address
   ```

    Example:
    ```
    ssh ubuntu@192.168.0.222
    ```

3. To connect to SSH, enter the user's password when prompted.

:::note
Ensure that the host is connected to the same network as the device.
:::

<a id="conHDMI"></a>
## Connect an HDMI display

To connect an HDMI display and view the Ubuntu 24.04 desktop environment along with the output of sample applications, follow these steps:  
1. Connect one end of the HDMI cable to the HDMI port on RUBIK Pi 3.  
2. Connect the other end of the HDMI cable to the display.

![](.././images/图片.jpg)

3. Power on the device and check the HDMI display.

![](.././images/20250814-171041.jpg) 

## Enter into EDL mode
**EDL Mode** is required to flash firmware and OS images directly to RubikPi 3 using Qualcomm's QDL tool.  
If the device is pre-flashed and fully provisioned, EDL mode can be skipped during initial setup. 

	<a id="enterEDL"></a>

	![](.././images/image-18.jpg)
    
    
	<Tabs>
	<TabItem value="method1" label="Method1">

	1. Press and hold the **[EDL]** button (No. 12 in the figure above).

	![](.././images/image-19.jpg)

	2. Connect the power supply into port 10, as shown in the figure below.

	![](.././images/image-20.jpg)

	3. Insert the Type-C cable into port 5 and wait three seconds to enter 9008 mode.

	![](.././images/20250314-155547.jpg)
   

	</TabItem>
	<TabItem value="method2" label="Method2">
    If your device is already running a Canonical Ubuntu image, follow the steps below to enter EDL (Emergency Download) mode.
 
    **Through UART:**  
    1. Login from UART terminal  
    2. Run the following command.  
    ```shell
    sudo reboot edl
    ```
 
    **Through SSH:**  
    1. Connect the device based on IP-address remotely.  
    2. Login on to SSH prompt  
    3. Run the following command.
    ```shell
    sudo reboot edl
    ```

    **Through SBC:**  
    1. On weston display, select terminal.  
    2. Login to the weston terminal 
    3. Run the following command.  
    ```shell
    sudo reboot edl
    ```

	</TabItem>
	</Tabs>
