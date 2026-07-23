---
sidebar_position: 2
title: OpenAI 兼容（在线转写）
description: 妙幕 OpenAI 兼容云端听写配置指南：对接 OpenAI whisper-1 / gpt-4o-transcribe 或任意 audio/transcriptions 协议端点（自建服务、中转站），支持多实例。
keywords:
  [OpenAI 转写, whisper-1, gpt-4o-transcribe, 语音转文字 API, OpenAI 兼容]
---

# OpenAI 兼容（在线转写）

<ProviderMeta
  website="https://platform.openai.com/"
  websiteLabel="OpenAI 平台"
  credentials="API Key"
  freeTier="视端点而定（OpenAI 官方无免费额度）"
  pricing="按音频时长计费（whisper-1 约 $0.006/分钟）"
  bestFor="已有 OpenAI Key，或想接自建 / 中转的兼容端点"
/>

走 `audio/transcriptions` 协议的通用接入方式：官方 OpenAI（`whisper-1`、`gpt-4o-transcribe`）、任何兼容端点（自建 whisper 服务、API 中转站）都能接，且**可添加多个实例**分别管理。

## 申请步骤（以 OpenAI 官方为例）

1. 注册 [OpenAI 平台](https://platform.openai.com/) 并绑定支付方式
2. 在 [API Keys 页面](https://platform.openai.com/api-keys) 创建密钥（`sk-` 开头，只显示一次，妥善保存）

## 在妙幕中配置

「引擎」页面 → 云端听写分组选「OpenAI」（或点「添加自定义」新建实例）：

<div className="img-container">
  <img src="/img/v3/cloud-asr/openai.webp" alt="OpenAI 兼容云端听写配置表单" />
</div>

| 字段                         | 填写                                                                           |
| ---------------------------- | ------------------------------------------------------------------------------ |
| Base url                     | 默认 `https://api.openai.com/v1`；自建 / 中转端点改成对方地址（以 `/v1` 结尾） |
| API Key                      | 上一步创建的密钥                                                               |
| 模型                         | 标签式录入，回车添加；官方常用 `whisper-1`、`gpt-4o-transcribe`                |
| 请求超时 / 并发数 / 请求间隔 | 默认即可，被限流时调低并发、加大间隔                                           |

填完点「**测试连接**」，通过即就绪。

## 常见问题

- **401 Unauthorized**：Key 错误或已吊销；中转端点需用对方签发的 Key
- **404 / 模型不存在**：确认端点支持 `audio/transcriptions` 且模型名正确
- **超时**：大文件上传耗时较长，加大「请求超时」；应用会自动压缩 / 切片
- **想用 Groq / 硅基流动**：侧栏已有独立预设，见 [Groq](./groq)、[硅基流动](./siliconflow)

---

> 信息更新于 2026-07，费用以 [OpenAI 定价页](https://openai.com/api/pricing/) 为准。
