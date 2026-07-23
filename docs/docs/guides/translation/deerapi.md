---
sidebar_position: 10
title: DeerAPI（聚合平台）
description: 妙幕 DeerAPI 翻译配置指南：一个 Key 调用 GPT、Claude、Gemini、Grok 等多家模型，支持支付宝微信充值，无需境外支付方式。
keywords: [DeerAPI, AI 聚合平台, GPT 翻译, Claude 翻译, 中转 API]
---

# DeerAPI（聚合平台）

<ProviderMeta
  website="https://api.deerapi.com/register?aff=QvHM"
  websiteLabel="DeerAPI"
  credentials="API Key"
  freeTier="无（充值制，支持支付宝 / 微信）"
  pricing="按 token 计费，聚合价格便宜"
  bestFor="想用 GPT / Claude / Grok 等境外模型但没有境外支付方式的用户"
/>

AI 聚合平台：一个 Key 调用 GPT、Claude、Gemini、Grok 等多家模型，**支付宝 / 微信直接充值**，免去境外绑卡烦恼，速度快价格低。

## 申请步骤

1. 注册 [DeerAPI](https://api.deerapi.com/register?aff=QvHM)
2. 充值（支付宝 / 微信）
3. 在控制台创建 / 复制 API Key（`sk-` 开头）

## 在妙幕中配置

「翻译」页面选「DeerAPI」：

<div className="img-container">
  <img src="/img/v3/translation/deerapi.webp" alt="DeerAPI 翻译配置：API 地址、API Key 与模型名称" />
</div>

| 字段     | 填写                                                                             |
| -------- | -------------------------------------------------------------------------------- |
| API 地址 | 预填 DeerAPI 端点，无需修改                                                      |
| API Key  | 控制台的密钥                                                                     |
| 模型名称 | 平台支持的任意模型 ID，如 `gpt-4o-mini`、`claude-sonnet-4-5`、`gemini-2.5-flash` |

点「**测试翻译**」验证后即可使用。

## 常见问题

- **哪个模型划算**：字幕翻译用轻量档就很好（`gpt-4o-mini` / `gemini-flash` 级别），大批量成本更可控
- **余额不足**：平台充值后重试
- **模型不存在**：以平台模型列表的准确 ID 为准

---

> 信息更新于 2026-07，模型与价格以 DeerAPI 平台为准。
