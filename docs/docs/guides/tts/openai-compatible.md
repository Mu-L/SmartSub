---
sidebar_position: 5
title: OpenAI 兼容（配音）
description: 妙幕 OpenAI 兼容 TTS 配置指南：接入 OpenAI audio/speech 协议端点（OpenAI、硅基流动等），内置预设可添加多个自定义实例。
keywords: [OpenAI TTS, audio speech, 硅基流动配音, tts-1, 文字转语音 API]
---

# OpenAI 兼容（配音）

<ProviderMeta
  website="https://platform.openai.com/"
  websiteLabel="OpenAI 平台"
  credentials="API Key"
  freeTier="视端点而定（硅基流动有免费模型）"
  pricing="按字符 / token 计费"
  bestFor="已有 OpenAI / 硅基流动账号；想接自建或中转 TTS 端点"
/>

走 `audio/speech` 协议的通用接入：OpenAI 官方（`tts-1` 等）、硅基流动（CosyVoice 系）以及任意兼容端点都能接，内置 OpenAI / 硅基流动预设，还可**添加多个自定义实例**。

## 申请步骤

- **OpenAI**：在 [API Keys](https://platform.openai.com/api-keys) 创建密钥（需绑卡）
- **硅基流动**：在 [API 密钥管理](https://cloud.siliconflow.cn/account/ak) 创建密钥（注册送额度，部分 TTS 模型免费）

## 在妙幕中配置

「音色」页面 → 在线服务选「OpenAI」或「SiliconFlow 硅基流动」（或「添加自定义服务」）：

<div className="img-container">
  <img src="/img/v3/tts/openai.webp" alt="OpenAI 兼容 TTS 配置表单" />
</div>

| 字段        | 填写                                                                                 |
| ----------- | ------------------------------------------------------------------------------------ |
| Base url    | 官方 `https://api.openai.com/v1` 或对应平台端点（预设已填好）                        |
| API Key     | 对应平台的密钥                                                                       |
| 模型 / 音色 | 按平台文档填模型 ID 与音色候选（OpenAI 如 `tts-1` + `alloy` 等；硅基流动按模型广场） |

点「**测试连接**」验证后即可在配音工作台使用。

## 常见问题

- **404 / 不支持**：确认端点实现了 `audio/speech` 接口（不是所有 OpenAI 兼容端点都带 TTS）
- **中文效果**：OpenAI 官方音色偏英文；中文内容建议硅基流动（CosyVoice）、[Azure](./azure) 或[火山豆包](./volcengine)
- **一号多用**：硅基流动的 Key 同时可用于[翻译](/guides/translation/siliconflow)与[云端听写](/guides/cloud-asr/siliconflow)

---

> 信息更新于 2026-07。
