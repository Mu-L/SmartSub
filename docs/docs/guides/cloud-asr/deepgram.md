---
sidebar_position: 6
title: Deepgram
description: 妙幕 Deepgram 云端听写配置指南：nova-2 / nova-3 模型速度快、精度高，新用户注册赠送试用额度，无需绑卡。
keywords: [Deepgram, nova-2, nova-3, 语音识别 API, 英文转写]
---

# Deepgram

<ProviderMeta
  website="https://deepgram.com/"
  websiteLabel="deepgram.com"
  credentials="API Key"
  freeTier="新用户赠送试用额度（注册免绑卡）"
  pricing="按音频时长计费"
  bestFor="英文与多语种内容，速度与性价比俱佳"
/>

专业语音识别服务商，nova 系模型速度快、时间戳质量高。新用户注册即送试用额度，够转写相当长的内容。

## 申请步骤

1. 注册 [Deepgram Console](https://console.deepgram.com/)（免绑卡）
2. 在 **API Keys** 页面创建密钥

## 在妙幕中配置

「引擎」页面 → 云端听写分组选「Deepgram」：

<div className="img-container">
  <img src="/img/v3/cloud-asr/deepgram.webp" alt="Deepgram 云端听写配置表单：API Key 与 nova 模型档位" />
</div>

| 字段     | 填写                                                            |
| -------- | --------------------------------------------------------------- |
| API Key  | 上一步创建的密钥                                                |
| 模型     | `nova-2`（默认，语种覆盖更全）或 `nova-3`（精度更高、语种较少） |
| Base url | 默认 `https://api.deepgram.com/v1`，走代理中转时再改            |

点「**测试连接**」验证后即可使用。

## 常见问题

- **nova-2 还是 nova-3**：中英等主流语种可试 nova-3；小语种或拿不准就用 nova-2
- **额度用完**：控制台绑卡后按量计费，价格在专业 ASR 里属便宜档
- **国内访问**：多数网络可直连，不通时配置代理

---

> 信息更新于 2026-07，定价以 [Deepgram Pricing](https://deepgram.com/pricing) 为准。
