---
sidebar_position: 3
title: faster-whisper
description: 妙幕 faster-whisper 引擎配置指南：应用内下载自包含运行时，模型按需从 HuggingFace 获取，支持 NVIDIA GPU，CPU / GPU 运行时秒级切换。
keywords: [faster-whisper, CTranslate2, whisper 加速, NVIDIA 转写, 语音识别]
---

# faster-whisper

<ProviderMeta
  website="https://github.com/SYSTRAN/faster-whisper"
  websiteLabel="faster-whisper（GitHub）"
  credentials="无需凭据"
  freeTier="完全免费"
  pricing="本地运行，无费用"
  bestFor="追求速度与精度的用户；NVIDIA 显卡可用 GPU 运行时"
  offline
/>

基于 CTranslate2 的 whisper 实现，同级模型下速度通常快于原版。运行时与模型都在应用内按需下载，无需自己折腾 Python 环境。

## 在妙幕中配置

「引擎」页面选中「faster-whisper」：

1. **安装运行时**：首次使用点安装，应用会下载一个自包含运行时（独立于系统 Python）
2. **选择计算设备**：CPU 或 GPU（NVIDIA CUDA）。两种运行时可以共存——**切换不再重复下载**，旧运行时本地驻留，切回秒级完成、可离线；卸载引擎时一并清理
3. **下载模型**：模型按需从 HuggingFace / 镜像源下载（tiny 到 large-v3 与蒸馏版），也可手动导入

完成后在任务向导「语音模型」中选择 faster-whisper 的模型即可。

## 可靠性

- 模型加载前**自动校验完整性**，残缺文件不再导致莫名转写失败，会提示重新下载
- 与内置引擎一样支持词级时间戳，配合「每条字幕最大字数」按词重新成句

## 常见问题

- **运行时下载失败**：在「设置 → 下载源（高级）」切换镜像源或配置代理后重试
- **GPU 运行时要装 CUDA Toolkit 吗**：不需要，运行时自带依赖；只要求 NVIDIA 驱动版本不过旧
- **本地开发者**：源码与构建在独立仓库 [smartsub-py-engine](https://github.com/buxuku/smartsub-py-engine)，见[开发说明](/development)

---

> 信息更新于 2026-07。
