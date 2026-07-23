---
sidebar_position: 4
title: FunASR（中文优选）
description: 妙幕 FunASR 引擎配置指南：SenseVoice（中英日韩粤）与 Paraformer-zh 模型，经内置 sherpa-onnx 原生库离线运行，中文字幕识别表现优秀。
keywords: [FunASR, SenseVoice, Paraformer, 中文语音识别, 中文字幕生成]
---

# FunASR（中文优选）

<ProviderMeta
  website="https://github.com/modelscope/FunASR"
  websiteLabel="FunASR（GitHub）"
  credentials="无需凭据"
  freeTier="完全免费"
  pricing="本地运行，无费用"
  bestFor="中文 / 中英混合内容，识别准确率通常高于同级 whisper 模型"
  offline
/>

阿里达摩院开源的语音识别体系。妙幕集成了两个模型：**SenseVoice**（中 / 英 / 日 / 韩 / 粤五语种）与 **Paraformer-zh**（中文专精），通过内置 sherpa-onnx 原生库运行，**无需安装任何额外环境**。

## 在妙幕中配置

「引擎」页面选中「本地多模型引擎」分组（FunASR 与 Qwen3-ASR、FireRedASR 同在此分组）：

<div className="img-container">
  <img src="/img/v3/engines/local-multi.webp" alt="本地多模型引擎页面：FunASR、Qwen3-ASR、FireRedASR 模型下载与管理" />
</div>

1. 找到 SenseVoice 或 Paraformer-zh，点「下载」（支持 ModelScope / GitHub 等多源，国内下载友好）
2. 下载完成即就绪，任务向导「语音模型」里选择对应模型开始转写

## 两个模型怎么选

| 模型              | 语言                   | 特点                         |
| ----------------- | ---------------------- | ---------------------------- |
| **SenseVoice**    | 中 / 英 / 日 / 韩 / 粤 | 多语种，速度快，综合表现好   |
| **Paraformer-zh** | 中文                   | 中文专精，标点与词汇处理成熟 |

中文播客、网课、会议录音优先试 FunASR——多数场景比同级 whisper 模型更准，且对中英夹杂内容更友好。

## 常见问题

- **需要 GPU 吗**：不需要，CPU 即可流畅运行（模型为 onnx 推理）
- **时间轴粒度**：FunASR 系无词级时间戳，长句拆分按文本比例兜底；对断句要求极高时可对比内置 whisper.cpp 的效果
- **模型下载失败**：切换下载源或代理后重试，也可手动下载后导入

---

> 信息更新于 2026-07。
