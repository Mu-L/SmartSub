---
sidebar_position: 8
title: 通义千问（AI 翻译）
description: 妙幕通义千问翻译配置指南：阿里云百炼 DashScope API Key 获取步骤，qwen 系模型国内直连，新用户有免费 token 额度。
keywords: [通义千问翻译, qwen 翻译, DashScope, 阿里云百炼, AI 字幕翻译]
---

# 通义千问（AI 翻译）

<ProviderMeta
  website="https://dashscope.console.aliyun.com/apiKey"
  websiteLabel="阿里云百炼控制台"
  credentials="API Key（DashScope）"
  freeTier="新用户各模型有免费 token 额度"
  pricing="按 token 计费"
  bestFor="国内直连、中文质量好；已有阿里云账号的用户"
/>

阿里云百炼（DashScope）平台的 qwen 系大模型：国内直连免代理，新用户开通即送各模型的免费 token 额度。

## 申请步骤

1. 登录 [阿里云百炼](https://bailian.console.aliyun.com/)（阿里云账号）并开通服务
2. 在 [API-KEY 管理](https://dashscope.console.aliyun.com/apiKey) 创建密钥（`sk-` 开头）

## 在妙幕中配置

「翻译」页面选「通义千问」：

<div className="img-container">
  <img src="/img/v3/translation/qwen.webp" alt="通义千问翻译配置：DashScope 兼容端点、API Key 与模型名称" />
</div>

| 字段     | 填写                                                                             |
| -------- | -------------------------------------------------------------------------------- |
| API 地址 | 默认为 DashScope 的 OpenAI 兼容端点，无需修改                                    |
| API Key  | 上一步创建的密钥                                                                 |
| 模型名称 | 按质量 / 成本选：`qwen-turbo`（快而省）、`qwen-plus`（均衡）、`qwen-max`（最强） |

点「**测试翻译**」验证后即可使用。

## 常见问题

- **免费额度**：各模型的新用户免费 token 在百炼控制台可查，用完按量计费
- **限流**：默认限流较宽松；触发 429 时降并发
- **同账号还能做什么**：[阿里云翻译（传统机翻）](./aliyun)、[阿里云云端听写](/guides/cloud-asr/aliyun)

---

> 信息更新于 2026-07，模型与价格以百炼控制台为准。
