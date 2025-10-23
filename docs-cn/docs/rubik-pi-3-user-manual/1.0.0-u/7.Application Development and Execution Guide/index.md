# 探索示例应用程序

本小节介绍一种模块化、实践性的AI开发方法，该方法采用高通®支持的工具、运行时环境及框架。  
无论您是训练模型、部署预训练网络还是构建多模态 AI 工作流程，本指南都提供模块化、实践性的方法。

本节内容涵盖：

* 使用**Edge Impulse** 和**Qualcomm® AI Hub** 创建模型
* 使用**LiteRT、TensorFlow Lite** 和 **ONNX Runtime** 进行推理
* **Llama.cpp** 本地执行大型语言模型
* 用**Genie** 进行工作流程编排
* 使用**IMSDK** 和机器人 SDK 的示例应用程序

每个部分都独立设计，您可以直接跳转到符合项目需求的工具和流程。目标是为将 AI 集成到现实世界的边缘应用程序中，提供清晰、可复用的示例和实用的方法。

## 应用程序开发和执行流程摘要

| 流程| 目的
|----------|----------
| [**Edge Impulse**](1.Building%20AI%20Models/1.edge_impulse.md)| 使用音频、图像和其他传感器数据构建和训练 AI 模型，或者以多种格式引入您自己的模型。
| [**Qualcomm® AI Hub**](./1.Building%20AI%20Models/2.qualcomm_ai_hub.md)| Qualcomm® AI Hub 简化了将视觉、音频和语音应用的 AI 模型部署到边缘设备的过程。您可以在几分钟内在托管的 Qualcomm 平台设备上优化、验证和部署您自己的 AI 模型。
| [**LiteRT/TFLite**](./2.Framework-Driven%20AI%20Sample%20Execution/3.litert_tflite.md)| LiteRT通过AI Engine Direct委托，在Dragonwing设备的CPU与NPU上运行量化模型（支持Python/C++），以极简配置实现高性能端侧AI。
| [**ONNX**](2.Framework-Driven%20AI%20Sample%20Execution/4.onnx.md)| ONNX 通过导出模型实现跨平台 AI 部署。在Dragonwing设备上，集成AI Engine Direct的ONNX运行时支持在NPU上执行计算，从而实现峰值性能。
| [**Llama.cpp**](2.Framework-Driven%20AI%20Sample%20Execution/5.llama_cpp.md)| 使用针对 GPU 和量化格式优化的 C++ 后端在本地执行大型语言模型。
| [**Qualcomm® Genie**](2.Framework-Driven%20AI%20Sample%20Execution/6.genie.md)| 使用 Qualcomm 的生成式 AI 运行时来编排 AI 微服务和多模态工作流程。
| [**Qualcomm® IMSDK**](./3.IMSDK/1.Update%20JSON%20Config.md)| Qualcomm IMSDK 是一个多媒体和 AI SDK，用于在 Qualcomm Linux 平台上构建高性能视觉管道。它包括 GStreamer 插件、AI 运行时集成和消息传递支持，帮助加速机器人、监控和嵌入式 AI 开发。
| [**Qualcomm® QIRP**](../7.Application%20Development%20and%20Execution%20Guide/4.Robotics-Sample-Applications/Robotics%20Sample%20Applications.md)| QIRP SDK是一款面向高通Linux平台的机器人专用开发工具包，提供基于ROS的模块、硬件加速节点与交叉编译工具链，助力构建智能机器人系统。

