---
sidebar_position: 2
---
# Notice for Use

:::danger[Important Notice:]

**Never touch any components on the board while it is powered on or in operation. Doing so may result in hardware damage or system malfunction, and in severe cases may cause burns due to high temperatures.**

:::

:::danger[Warning:]

- Do not use a desktop or laptop computer to power your RUBIK Pi 3. This may cause damage to both the computer and the RUBIK Pi 3.
- Any external power supply used with the RUBIK Pi must comply with all applicable local laws and regulations.
- A **12 V DC power supply rated at ≥ 3 A** is required. The power supply should feature overcurrent, overvoltage, and surge protection.

:::

## Safety Instructions:

1. **Operating Environment**

- Temperature & Humidity: Operate only in indoor environments within 0 °C to 50 °C and ≤ 85% relative humidity (non-condensing). Operation in misty or high-humidity environments is strictly prohibited.
- Ventilation & Cooling: Ensure heat sinks and cooling fans function properly. Do not block ventilation openings. Keep the board away from intense heat sources such as halogen lamps, welding sparks, or lasers.

2. **Power Supply & Shutdown**

- Complete all peripheral connections before powering on. Do not plug or unplug the DC power jack while the board is energized.
- Shutdown procedure: Execute `shutdown -h now`, wait for all LEDs to turn off, then disconnect power.
- Avoid frequent power cycling or the use of unregulated DIY power supplies to prevent potential hardware damage.

3. **Electrostatic Discharge (ESD) Protection**

- Before handling the PCB, GPIO, FPC connectors, or other sensitive interfaces, wear an anti-static wrist strap or touch grounded metal to discharge static electricity.
- Store or transport the board in an anti-static bag.

4. **Mechanical Mounting**

- Place the device on a stable, flat, and insulated surface. Use appropriate standoffs to secure the PCB and prevent flexing.
- Always handle the board by its edges. Do not touch the electronic components directly.

5. **Peripherals and Interfaces**

- USB, HDMI, MIPI CSI/DSI interfaces should only be connected or disconnected while the device is powered off.
- For SD or UFS cards, unmount them via the operating system before removal.
- Use high-quality, well-shielded cables. Avoid excessively long connections that may cause signal degradation.
- Before connecting GPIO or expansion modules, verify voltage levels and current ratings to avoid short circuits or overloads.

6. **Regulatory Compliance & Modifications**

- When used with external accessories or enclosures, the RUBIK Pi must comply with all relevant local regulations (e.g., EMC, electrical safety, RF).
- Unauthorized modification of the PCB or the addition of uncertified wireless modules is strictly prohibited and may void warranty and compromise safety.
