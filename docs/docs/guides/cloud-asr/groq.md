---
sidebar_position: 3
title: Groq（免费快速转写）
description: 妙幕 Groq 云端听写配置指南：whisper-large-v3 模型推理速度极快，免费档额度慷慨，注册即可用，适合零成本在线转写。
keywords: [Groq, whisper-large-v3, 免费语音转文字, 快速转写, Groq API]
---

# Groq（免费快速转写）

<ProviderMeta
  website="https://groq.com/"
  websiteLabel="groq.com"
  credentials="API Key"
  freeTier="有免费档（按分钟限额，日常字幕任务够用）"
  pricing="超出免费档按时长计费"
  bestFor="零成本快速在线转写，whisper 系模型推理极快"
/>

Groq 用自研推理芯片跑 whisper 模型，速度极快且提供慷慨的免费档——**想零成本体验云端听写，从它开始**。

## 申请步骤

1. 注册 [Groq Cloud](https://console.groq.com/)（支持 Google/GitHub 登录，无需绑卡）
2. 在 [API Keys](https://console.groq.com/keys) 页面创建密钥（`gsk_` 开头）

## 在妙幕中配置

「引擎」页面 → 云端听写分组选「Groq」（OpenAI 兼容预设，Base url 已预填）：

<div className="img-container">
  <img src="/img/v3/cloud-asr/groq.webp" alt="Groq 云端听写配置表单" />
</div>

| 字段     | 填写                                                                       |
| -------- | -------------------------------------------------------------------------- |
| Base url | 预填 Groq 端点，无需修改                                                   |
| API Key  | 上一步创建的 `gsk_` 密钥                                                   |
| 模型     | 推荐 `whisper-large-v3`（精度）或 `whisper-large-v3-turbo`（更快更省额度） |

点「**测试连接**」验证后即可在任务中选用。

## 常见问题

- **429 Too Many Requests**：触发免费档限流——调低「并发数」、把「请求间隔」加到 1–2 秒
- **免费额度多大**：Groq 免费档按请求数与音频分钟数双重限额，具体以 [官方限额页](https://console.groq.com/docs/rate-limits) 为准
- **国内访问**：部分网络环境需要代理，可在「设置 → 网络代理」统一配置

---

> 信息更新于 2026-07，额度与限流政策以 Groq 官方为准。
