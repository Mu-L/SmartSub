---
sidebar_position: 2
title: 本地配音引擎（Kokoro / VITS）
description: 妙幕本地 TTS 引擎配置指南：Kokoro 多语 v1.1（中英 103 音色）与 VITS 中文 AIShell3（174 音色），基于 sherpa-onnx 离线运行，免费无用量限制。
keywords: [本地 TTS, Kokoro, VITS, 离线配音, 免费文字转语音, sherpa-onnx]
---

# 本地配音引擎（Kokoro / VITS）

<ProviderMeta
  credentials="无需凭据"
  freeTier="完全免费"
  pricing="本地运行，无费用"
  bestFor="零成本批量配音；隐私敏感与离线环境"
  offline
/>

两个基于 sherpa-onnx 的本地语音合成模型：**下载一次、离线合成、无用量限制**。批量配音的多进程并行让速度接近线性提升，引擎隔离运行不影响主程序。

## 两个模型

| 模型                   | 语言    | 音色数 | 特点                                       |
| ---------------------- | ------- | ------ | ------------------------------------------ |
| **Kokoro 多语 v1.1**   | 中 / 英 | 103    | 多语模型，英文与中文音色均衡，**本地首选** |
| **VITS 中文 AIShell3** | 中      | 174    | 中文说话人库，音色选择多                   |

## 在妙幕中配置

「音色」页面 → 本地模型：

<div className="img-container">
  <img src="/img/v3/tts/kokoro.webp" alt="Kokoro 本地模型下载页面" />
</div>

1. 选中 Kokoro 或 VITS，点「**下载**」（下载源国内加速优先，失败自动回退 GitHub 直连；也可手动下载后经「导入」放置）
2. 下载完成即就绪，到[配音工作台](/features/tts-dubbing)的引擎下拉里选用，逐行可换音色

## 使用建议

- **中英混合内容**选 Kokoro；**纯中文**且想要更多说话人选 VITS
- 试听后再批量：工作台里逐行试听不同音色，确定后应用到全局
- 本地合成速度取决于 CPU；批量任务自动多进程并行

## 常见问题

- **下载失败**：切换「设置 → 下载源」或配置代理；也可手动下载解压后经「导入」放置
- **想要自己的声音**：见 [ZipVoice 声音克隆](./zipvoice)
- **音质要求更高**：本地模型音质实用级；发布级品质考虑 [Azure](./azure) / [火山豆包](./volcengine) / [ElevenLabs](./elevenlabs)

---

> 信息更新于 2026-07。
