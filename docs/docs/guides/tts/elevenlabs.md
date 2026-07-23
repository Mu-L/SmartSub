---
sidebar_position: 8
title: ElevenLabs（含即时克隆）
description: 妙幕 ElevenLabs 配音配置指南：多语模型音色接入与即时声音克隆（IVC）步骤，多语言出海配音的高质量选择。
keywords: [ElevenLabs 配音, 即时声音克隆, IVC, 多语言配音, AI 配音]
---

# ElevenLabs（含即时克隆）

<ProviderMeta
  website="https://elevenlabs.io/"
  websiteLabel="elevenlabs.io"
  credentials="API Key"
  freeTier="免费计划含少量额度（克隆需付费套餐）"
  pricing="按订阅套餐 / 字符计费"
  bestFor="多语言出海配音的音质标杆；即时声音克隆"
/>

多语 TTS 的头部服务商：同一音色可说几十种语言、情感自然，是「一条视频配多国语言」场景的首选。支持**即时声音克隆（IVC）**——上传一段声音即刻可用。

## 申请步骤

1. 注册 [ElevenLabs](https://elevenlabs.io/)（免费计划可先试音色）
2. 头像菜单 → **API Keys** → 创建密钥（`sk_` 开头）
3. 需要克隆功能时订阅付费套餐（Starter 起支持 IVC）

## 在妙幕中配置

「音色」页面 → 在线服务选「ElevenLabs」：

<div className="img-container">
  <img src="/img/v3/tts/elevenlabs.webp" alt="ElevenLabs 配音配置表单" />
</div>

填入 API Key，配置音色候选（可从 ElevenLabs 音色库挑选），点「**测试连接**」验证后使用。

## 即时声音克隆（IVC）

1. 「音色」页点「添加音色」→ 选「**ElevenLabs 即时克隆**」
2. 提供参考音频（或现场录音），即传即用
3. 克隆音色进入「我的音色」，多语配音时**保持你的音色说外语**——出海视频的杀手锏

:::tip 云端音色可找回
IVC 音色托管在 ElevenLabs 平台，本地误删可重新取回。
:::

## 常见问题

- **额度消耗快**：按字符计费，多语模型档位越高越贵；批量前先小段试算成本
- **401 / 权限不足**：克隆等功能需要对应套餐等级
- **同账号还能做什么**：[ElevenLabs Scribe 云端听写](/guides/cloud-asr/elevenlabs)

---

> 信息更新于 2026-07，套餐与价格以 [ElevenLabs Pricing](https://elevenlabs.io/pricing) 为准。
