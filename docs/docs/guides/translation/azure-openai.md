---
sidebar_position: 11
title: Azure OpenAI
description: 妙幕 Azure OpenAI 翻译配置指南：Azure AI 服务资源创建、部署端点格式与密钥获取，企业合规场景的 GPT 翻译接入。
keywords: [Azure OpenAI 翻译, Azure GPT, 企业 AI 翻译, Azure 部署端点]
---

# Azure OpenAI

<ProviderMeta
  website="https://portal.azure.com/"
  websiteLabel="Azure 门户"
  credentials="部署端点 + API Key"
  freeTier="无（新 Azure 账号常有赠金）"
  pricing="按 token 计费（Azure 账单）"
  bestFor="企业合规 / 数据区域要求场景下用 GPT 系模型"
/>

微软 Azure 托管的 OpenAI 模型服务：模型与 OpenAI 同源，但走 Azure 的合同、区域与合规体系，适合企业用户。

## 申请步骤

1. 在 [Azure 门户](https://portal.azure.com/) 创建 **Azure OpenAI** 资源（部分区域需申请配额）
2. 在 Azure AI Foundry 中**部署模型**（如 `gpt-4o-mini`），记下部署名
3. 在资源的「**密钥和终结点**」页面获取 API Key 与终结点地址

## 在妙幕中配置

「翻译」页面选「Azure OpenAI」：

<div className="img-container">
  <img src="/img/v3/translation/azure-openai.webp" alt="Azure OpenAI 翻译配置：部署端点与 API Key" />
</div>

| 字段     | 填写                                                             |
| -------- | ---------------------------------------------------------------- |
| API 地址 | 部署端点，格式参照配置页占位符（含资源名、部署名与 api-version） |
| API Key  | 密钥和终结点页面的 Key                                           |

点「**测试翻译**」验证后即可使用。

## 常见问题

- **404 DeploymentNotFound**：端点里的部署名与实际部署不一致
- **401**：Key 与资源不匹配（每个资源的 Key 独立）
- **配额不足（429）**：在 Azure 提升部署的 TPM 配额或降低并发

---

> 信息更新于 2026-07，配额与价格以 Azure 门户为准。
