---
sidebar_position: 5
title: ElevenLabs Scribe
description: 妙幕 ElevenLabs Scribe 云端听写配置指南：scribe_v2 模型支持 90+ 语种与词级时间戳，注册有免费额度。
keywords: [ElevenLabs, Scribe, 语音转文字, 多语种转写, scribe_v2]
---

# ElevenLabs Scribe

<ProviderMeta
  website="https://elevenlabs.io/"
  websiteLabel="elevenlabs.io"
  credentials="API Key"
  freeTier="免费计划含少量转写额度"
  pricing="按订阅套餐 / 用量计费"
  bestFor="多语种内容；已订阅 ElevenLabs（配音 / 克隆）的用户复用同一账号"
/>

以 TTS 闻名的 ElevenLabs 的转写产品线：Scribe 模型支持 90+ 语种、词级时间戳（妙幕会走内置成句管线，时间轴更精准）。

## 申请步骤

1. 注册 [ElevenLabs](https://elevenlabs.io/)（免费计划即可开始）
2. 头像菜单 → **API Keys** → 创建密钥（`sk_` 开头）

## 在妙幕中配置

「引擎」页面 → 云端听写分组选「ElevenLabs」：

<div className="img-container">
  <img src="/img/v3/cloud-asr/elevenlabs.webp" alt="ElevenLabs Scribe 云端听写配置表单" />
</div>

| 字段     | 填写                                               |
| -------- | -------------------------------------------------- |
| API Key  | 上一步创建的密钥                                   |
| 模型     | 默认 `scribe_v2`（`scribe_v1` 已被官方废弃，勿选） |
| Base url | 默认 `https://api.elevenlabs.io/v1`，一般无需修改  |

点「**测试连接**」验证后即可使用。

## 常见问题

- **额度怎么算**：转写消耗账户的用量额度（与 TTS 共享账户体系），免费计划额度有限，批量任务建议付费计划
- **同账号还能做什么**：[ElevenLabs 配音与即时声音克隆](/guides/tts/elevenlabs)
- **401 报错**：确认 Key 有效且账户未欠费

---

> 信息更新于 2026-07，模型与定价以 [ElevenLabs 官网](https://elevenlabs.io/pricing) 为准。
