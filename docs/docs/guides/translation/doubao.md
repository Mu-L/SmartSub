---
sidebar_position: 16
title: 豆包翻译
description: 妙幕豆包翻译配置指南：火山方舟 API Key 获取步骤，doubao-seed-translation 专用翻译模型，大模型质量的按量计费翻译。
keywords: [豆包翻译, 火山方舟, doubao-seed-translation, 大模型翻译]
---

# 豆包翻译

<ProviderMeta
  website="https://console.volcengine.com/ark"
  websiteLabel="火山方舟控制台"
  credentials="API Key（火山方舟）"
  freeTier="新用户常有免费 token 额度"
  pricing="按 token 计费"
  bestFor="想要大模型级译文质量、又偏好火山生态的用户"
/>

基于火山方舟的**专用翻译模型** `doubao-seed-translation`：大模型语感 + 翻译特化训练，质量高于传统机翻。

## 申请步骤

1. 注册 [火山引擎](https://www.volcengine.com/) 并实名认证
2. 进入[火山方舟控制台](https://console.volcengine.com/ark)，开通模型服务
3. 在「[API Key 管理](https://console.volcengine.com/ark/region:ark+cn-beijing/apiKey)」创建 API Key

:::info 与「豆包听写」的 Key 不通用
豆包翻译用**火山方舟**的 API Key；[豆包听写](/guides/cloud-asr/volcengine)用**豆包语音控制台**的 API Key，两者不能混用。
:::

## 在妙幕中配置

「翻译」页面选「豆包翻译」：

<div className="img-container">
  <img src="/img/v3/translation/doubao.webp" alt="豆包翻译配置：方舟 API Key 与模型名称" />
</div>

| 字段         | 填写                                                |
| ------------ | --------------------------------------------------- |
| API Key      | 方舟控制台创建的 Key                                |
| 模型名称     | 默认 `doubao-seed-translation-250915`，一般无需修改 |
| 批量翻译数量 | 由于 API 限制，**建议 1**                           |

点「**测试翻译**」验证后即可使用。

## 常见问题

- **模型未开通**：方舟控制台需先开通对应模型的推理接入
- **批量报错**：把批量翻译数量设为 1（该接口按单文本设计）

---

> 信息更新于 2026-07，模型与价格以火山方舟控制台为准。
