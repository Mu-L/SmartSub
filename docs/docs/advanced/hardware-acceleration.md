---
sidebar_position: 1
title: GPU 硬件加速
description: 妙幕 GPU 加速指南：NVIDIA CUDA（11.8 / 12.2 / 12.4 / 13.0 加速包应用内下载）、AMD 与 Intel 显卡 Vulkan、Apple 芯片 Core ML 与 Metal，自动检测推荐、失败自动回退 CPU。
keywords:
  [
    whisper CUDA 加速,
    GPU 加速字幕,
    Vulkan,
    Core ML,
    Metal,
    显卡加速转写,
    CUDA Toolkit,
  ]
---

# GPU 硬件加速

GPU 加速能把转写速度提升数倍到数十倍。**v3 起加速包由应用内管理，无需手动安装 CUDA Toolkit**——安装应用后到「引擎」页面，软件会自动检测显卡并推荐加速方案。

## 各平台加速矩阵

| 平台                          | 加速后端            | 说明                                                              |
| ----------------------------- | ------------------- | ----------------------------------------------------------------- |
| Windows / Linux + NVIDIA      | **CUDA**            | 支持 CUDA 11.8.0 / 12.2.0 / 12.4.0 / 13.0.2，应用内下载对应加速包 |
| Windows / Linux + AMD / Intel | **Vulkan**          | 加速包已内置，开箱即用                                            |
| macOS（Apple 芯片）           | **Core ML / Metal** | mac-arm64 版本自动启用                                            |
| 任意平台                      | **CPU**             | 无可用 GPU 时自动回退                                             |

## 在应用内管理加速

打开「引擎」页面选中 whisper.cpp（内置），「GPU 加速」区域会显示当前状态、检测详情与可选加速方式：

<div className="img-container">
  <img src="/img/v3/engines/whisper-cpp.webp" alt="引擎页 GPU 加速面板：运行状态、加速方式选择与检测详情" />
</div>

- **NVIDIA 用户**：应用检测显卡后推荐匹配的 CUDA 加速包版本，一键下载启用；驱动过旧时按提示升级驱动即可，无需装 CUDA Toolkit
- **AMD / Intel 用户**：Vulkan 已内置，自动启用
- **Apple 芯片**：可在「自动（推荐）」与「Metal」之间选择——自动模式优先 CoreML（功耗低、发热小，但模型首次使用需编译，medium / large 可能等几分钟到几十分钟）；Metal 模式即开即用、全部模型可用

## 加速模式与自动回退

加速模式支持**自动 / 仅 GPU / 仅 CPU**三档：

- 加速加载失败会**自动降级到 CPU** 继续任务，不会中断
- 「检测详情」面板给出失败原因（驱动版本、显存不足等）
- 量化模型（q5 / q8）没有 CoreML 版本，在 Apple 芯片上会自动使用 Metal

## 常见问题

**启用 GPU 加速后应用闪退？**
把加速模式切换为「仅 CPU」，或改用其它转写引擎；诊断面板会给出失败原因。

**faster-whisper 的加速？**
faster-whisper 使用独立的自包含运行时，CPU / GPU 运行时切换不再重复下载，切回秒级完成，详见 [faster-whisper 配置](/guides/engines/faster-whisper)。

**合成（烧录）也能硬件加速吗？**
可以，视频合成支持硬件加速编码（VideoToolbox / NVENC / QSV），见[视频合成](../features/video-merge)。
