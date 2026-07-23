---
sidebar_position: 5
title: Qwen3-ASR
description: 妙幕 Qwen3-ASR 引擎配置指南：通义千问开源语音识别模型（qwen3-asr-0.6b），内置 sherpa-onnx 原生库离线运行，中文识别表现优秀。
keywords: [Qwen3-ASR, 通义千问语音识别, 中文转写, 开源 ASR]
---

# Qwen3-ASR

<ProviderMeta
  website="https://github.com/QwenLM"
  websiteLabel="Qwen（GitHub）"
  credentials="无需凭据"
  freeTier="完全免费"
  pricing="本地运行，无费用"
  bestFor="中文内容的轻量本地转写"
  offline
/>

通义千问开源的语音识别模型（集成 `qwen3-asr-0.6b`），与 FunASR、FireRedASR 一样通过内置 sherpa-onnx 原生库运行，无需额外环境。

## 在妙幕中配置

1. 「引擎」页面选中「本地多模型引擎」分组，找到 Qwen3-ASR
2. 点「下载」获取模型（支持多下载源）
3. 任务向导「语音模型」中选择即可使用

<div className="img-container">
  <img src="/img/v3/engines/local-multi.webp" alt="本地多模型引擎页面：Qwen3-ASR 模型下载入口" />
</div>

## 特点与适用

- 0.6B 参数量，**体积小、加载快**，CPU 即可运行
- 中文识别表现优秀，适合日常中文内容快速转写
- 与 FunASR / FireRedASR 同分组管理，可下载多个模型按任务对比效果

## 常见问题

- **与 FunASR / FireRedASR 怎么选**：三者都是中文强项——追求多语种选 FunASR（SenseVoice），追求中文精度选 FireRedASR，追求轻量选 Qwen3-ASR；都免费，建议实测各自跑一段素材对比
- **时间轴粒度**：无词级时间戳，长句拆分按文本比例兜底

---

> 信息更新于 2026-07。
