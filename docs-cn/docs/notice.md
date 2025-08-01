# 魔方派使用须知

:::danger[重要提示：]

**上电或通电运行时，严禁用手接触板卡上的任何元器件。否则可能导致器件损坏、系统异常，严重时还可能因高温造成烫伤。**

:::

:::danger[警告：]

- RUBIK Pi 使用的任何外置电源必须符合所在国家/地区的相关法律法规与标准。
- 建议使用 12 V DC / ≥ 3 A 的稳压电源，且具备过流、过压及浪涌保护功能。

:::

## 安全使用说明：

1. **运行环境**

- 温度/湿度：仅在 0 ℃–50 ℃、≤ 85 % RH（无凝露）室内环境运行；禁止在水雾或潮湿环境中操作。
- 通风散热：保持散热片/风扇正常工作，勿覆盖通风孔；远离强光热源（如卤素灯、焊接火花、激光）。

2. **供电与关机**

- 上电前先完成外设连接，切勿带电插拔 DC 头。
- 关机流程：先执行`shutdown -h now` → 待指示灯熄灭 → 再断电。
- 禁止频繁插拔电源或使用不合规的 DIY 适配器，以免损坏板卡。

3. **静电防护（ESD）**

- 操作 PCB、GPIO、FPC 等接口前，佩戴防静电手环或先触摸接地金属，释放人体静电。
- 搬运或存放时保持板卡处于防静电袋内，避免与导电物品直接接触。

4. **机械固定**

- 将产品置于 稳固、平坦、绝缘 的表面，并使用 standoff 将 PCB 固定，避免弯折。
- 拿取板卡时保持边缘握持，严禁直接接触电子元件区域。

5. **外设与接口**

- USB / HDMI / MIPI CSI-DSI 建议断电插拔；SD/UFS 卡需先软件卸载。
- 使用质量合格且屏蔽良好的线缆，避免长线缆信号衰减。
- 接入 GPIO 或其他扩展模块前，请确认电平、电流规格，防止短路或过载。

6. **法规与改装**

- RUBIK Pi 与任何外设或外壳组合使用时，均应符合当地 EMC、安规及射频法规。
- 禁止私自改动 PCB 或增设未经认证的无线模块，否则可能导致安全隐患及失去保修。
