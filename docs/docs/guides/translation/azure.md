---
sidebar_position: 20
title: 微软翻译（Azure Translator）
description: 妙幕微软翻译配置指南：Azure Translator 资源创建、API Key 与区域获取步骤，F0 免费层每月 200 万字符。
keywords: [微软翻译, Azure Translator, 必应翻译 API, 免费翻译额度, Azure 区域]
---

# 微软翻译（Azure Translator）

<ProviderMeta
  website="https://portal.azure.com/"
  websiteLabel="Azure 门户"
  credentials="API Key + Region"
  freeTier="F0 免费层每月 200 万字符"
  pricing="超出后按字符计费（S1 层）"
  bestFor="语种覆盖广、免费层慷慨；能接受 Azure 注册流程的用户"
/>

Azure 认知服务的 Translator：**F0 免费层每月 200 万字符**，130+ 语种，质量稳定。注册流程比国内厂商繁琐，但值得。

## 申请步骤

1. 注册 [Azure](https://azure.microsoft.com/)（需绑卡，免费层不扣费）
2. 在门户[创建 Translator 资源](https://portal.azure.com/#view/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/~/TextTranslation)，定价层选 **F0（免费）**
3. 资源创建后，在「**密钥和终结点**」页面获取 **密钥（Key）** 与 **区域（Region）**（如 `eastasia`）

## 在妙幕中配置

「翻译」页面选「微软翻译」：

<div className="img-container">
  <img src="/img/v3/translation/azure.webp" alt="微软翻译配置：API Key 与 Region" />
</div>

| 字段         | 填写                                              |
| ------------ | ------------------------------------------------- |
| API Key      | 密钥和终结点页面的 Key 1（或 Key 2）              |
| Region       | 资源区域标识，如 `eastasia`（**不是**终结点 URL） |
| 批量翻译数量 | 接口支持大批量，**最大 1000**                     |

点「**测试翻译**」验证后即可使用。

## 常见问题

- **401001**：Key 与 Region 不匹配——Region 必须是资源所在区域的小写标识
- **免费层限速**：F0 有请求频率限制，批量大任务适当加请求间隔
- **每月 200 万用完**：升级 S1 按量计费，或搭配其它免费服务轮换

---

> 信息更新于 2026-07，免费层政策以 Azure 门户为准。
