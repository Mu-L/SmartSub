---
sidebar_position: 7
title: Gemini（免费 AI 翻译）
description: 妙幕 Gemini 翻译配置指南：Google AI Studio 免费创建 API Key，gemini flash 系模型翻译质量高，免费额度即可满足日常字幕翻译。
keywords: [Gemini 翻译, Google AI Studio, 免费 AI 翻译, gemini flash 字幕翻译]
---

# Gemini（免费 AI 翻译）

<ProviderMeta
  website="https://aistudio.google.com/apikey"
  websiteLabel="Google AI Studio"
  credentials="API Key（可免费创建）"
  freeTier="免费档限速可用，日常字幕够用"
  pricing="超出免费档按 token 计费"
  bestFor="想要高质量 AI 翻译又不想充值的用户"
/>

Google 的大模型 API。亮点是 **API Key 可以在 AI Studio 免费创建**，免费档限速额度做字幕翻译基本够用，质量属第一梯队。

## 申请步骤

1. 用 Google 账号登录 [Google AI Studio](https://aistudio.google.com/apikey)
2. 点「Create API key」创建密钥（`AIza` 开头）

## 在妙幕中配置

「翻译」页面选「Gemini」：

<div className="img-container">
  <img src="/img/v3/translation/gemini.webp" alt="Gemini 翻译配置：OpenAI 兼容端点、API Key 与模型名称" />
</div>

| 字段     | 填写                                                         |
| -------- | ------------------------------------------------------------ |
| API 地址 | 默认为 Google 官方 OpenAI 兼容端点，无需修改                 |
| API Key  | 上一步创建的密钥                                             |
| 模型名称 | 推荐 flash 系（速度快、免费额度友好），如 `gemini-2.5-flash` |

点「**测试翻译**」验证后即可使用。

## 参数建议

- **免费档限速**：批次并发数设为 1–2、请求间隔 1 秒起，避免 429
- **思考模式**：保持关闭（Gemini 思考会显著增加延迟与 token 消耗，翻译场景不需要）
- 支持[术语表](/advanced/glossary)与回显对齐校验

## 常见问题

- **国内访问**：需要代理（「设置 → 网络代理」）
- **429 RESOURCE_EXHAUSTED**：触发免费档限速，降并发加间隔，或错峰使用
- **地区不可用**：AI Studio 对部分地区有限制，代理出口换支持的地区

---

> 信息更新于 2026-07，免费额度政策以 [Google AI 官网](https://ai.google.dev/pricing) 为准。
