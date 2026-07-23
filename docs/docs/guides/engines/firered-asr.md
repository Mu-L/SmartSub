---
sidebar_position: 6
title: FireRedASR
description: 妙幕 FireRedASR 引擎配置指南：FireRedASR-AED large 中英模型，内置 sherpa-onnx 原生库离线运行，中文识别精度优先的本地转写选择。
keywords: [FireRedASR, 小红书语音识别, 中文 ASR, 高精度中文转写]
---

# FireRedASR

<ProviderMeta
  website="https://github.com/FireRedTeam/FireRedASR"
  websiteLabel="FireRedASR（GitHub）"
  credentials="无需凭据"
  freeTier="完全免费"
  pricing="本地运行，无费用"
  bestFor="中文精度优先的本地转写"
  offline
/>

小红书开源的语音识别模型，妙幕集成 **FireRedASR-AED large**（中 / 英），中文识别精度在开源模型中属第一梯队。通过内置 sherpa-onnx 原生库运行，无需额外环境。

## 在妙幕中配置

1. 「引擎」页面选中「本地多模型引擎」分组，找到 FireRedASR
2. 点「下载」获取模型（large 模型体积较大，耐心等待；支持多下载源）
3. 任务向导「语音模型」中选择即可使用

<div className="img-container">
  <img src="/img/v3/engines/local-multi.webp" alt="本地多模型引擎页面：FireRedASR 模型下载入口" />
</div>

## 特点与适用

- **中文精度优先**：正式发布内容、对错字容忍度低的场景优先选它
- 中英双语支持，对网络用语与口语表达友好
- 模型较大、速度慢于轻量模型——批量长视频先用小模型试跑，重要成片用它精转

## 常见问题

- **速度偏慢**：正常，AED large 走精度路线；结合[并发任务数](/intro/quickstart)与批量策略安排任务
- **时间轴粒度**：无词级时间戳，长句拆分按文本比例兜底
- **与 FunASR 怎么选**：都试跑一段素材对比——FireRedASR 精度略优，FunASR 速度与多语种更优

---

> 信息更新于 2026-07。
