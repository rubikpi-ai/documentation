---
custom_edit_url: https://github.com/rubikpi-ai/documentation/blob/main/docs-en/docs/rubik-pi-3-user-manual/1.0.0-u/7.Application Development and Execution Guide/index.md
---

# Explore Sample Applications 

This section outlines a modular, hands-on approach to AI development using Qualcomm®-supported tools, runtimes, and frameworks.  
Whether you're training models, deploying pre-trained networks, or building multimodal AI workflows, this guide offers a modular, hands-on approach.  

The document covers:  
* Model creation with **Edge Impulse** and **Qualcomm® AI Hub**  
* Inference using **LiteRT, TensorFlow Lite, and ONNX Runtime**  
* Local execution of large language models with **Llama.cpp**  
* Workflow orchestration with **Genie**  
* Sample applications using **IMSDK** and robotics SDKs 

Each section is designed to be standalone, so you can jump directly into the tools and flows that match your project needs. The goal is to provide clear, reusable examples and practical insights for integrating AI into real-world edge applications.

## Application Development & Execution Flow Summary

|Flow               |Purpose                                                                                               |
|-------------------|------------------------------------------------------------------------------------------------------|
|[**Edge Impulse**](1.Building%20AI%20Models/1.edge_impulse.md)     |Build and train AI models using audio, image and other sensor data - or bringing your own model in a variety of formats.                       |
|[**Qualcomm® AI Hub**](./1.Building%20AI%20Models/2.qualcomm_ai_hub.md) |Qualcomm® AI Hub simplifies deploying AI models for vision, audio, and speech applications to edge devices. You can optimize, validate, and deploy your own AI models on hosted Qualcomm platform devices within minutes.|
|[**LiteRT/TFLite**](./2.Framework-Driven%20AI%20Sample%20Execution/3.litert_tflite.md)    |LiteRT enables high-performance, on-device AI by running quantized models (Python or C++) on both CPU and NPU of Dragonwing devices using AI Engine Direct delegates—all with minimal setup.| 
|[**ONNX**](2.Framework-Driven%20AI%20Sample%20Execution/4.onnx.md)             |ONNX enables cross-platform AI deployment by exporting models. On Dragonwing devices, ONNX Runtime with AI Engine Direct allows execution on the NPU for maximum performance.| 
|[**Llama.cpp**](2.Framework-Driven%20AI%20Sample%20Execution/5.llama_cpp.md)        | Execute large language models locally using a C++ backend optimized for GPU and quantized formats.  |
|[**Qualcomm® Genie**](2.Framework-Driven%20AI%20Sample%20Execution/6.genie.md)             | Orchestrate AI microservices and multimodal workflows using Qualcomm’s generative AI runtime.        |
|[**Qualcomm® IMSDK**](./3.IMSDK/1.Update%20JSON%20Config.md)         | Qualcomm IMSDK is a multimedia and AI SDK for building high-performance vision pipelines on Qualcomm Linux platforms.It includes GStreamer plugins, AI runtime integration, and messaging support to accelerate robotics, surveillance, and embedded AI development.      |
|[**Qualcomm® QIRP**](../7.Application%20Development%20and%20Execution%20Guide/4.Robotics-Sample-Applications/Robotics%20Sample%20Applications.md)             | QIRP SDK is a robotics-focused software development kit for Qualcomm Linux platforms, offering ROS-based modules, hardware-accelerated nodes, and cross-compilation tools for building intelligent robotic systems.      |
