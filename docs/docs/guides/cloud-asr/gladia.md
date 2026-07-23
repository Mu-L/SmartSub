---
sidebar_position: 11
title: Gladia（每月免费 10 小时）
description: 妙幕 Gladia 云端听写配置指南：solaria 模型覆盖 100+ 语种，每月赠送 10 小时免费额度，小语种转写的高性价比选择。
keywords: [Gladia, solaria, 免费语音转文字, 小语种转写, 100 种语言识别]
---

# Gladia（每月免费 10 小时）

<ProviderMeta
  website="https://www.gladia.io/"
  websiteLabel="gladia.io"
  credentials="API Key"
  freeTier="每月赠送 10 小时"
  pricing="超出后按转写时长计费"
  bestFor="小语种与多语言内容；免费额度需求大的用户"
/>

法国的语音 AI 服务商，solaria 模型支持 **100+ 语种**（其中约 42 种为独有覆盖）+ 自动语种检测与混说（code-switching）。**每月 10 小时免费额度**是各家里最慷慨的。

:::caution 免费档的数据条款
Gladia 免费档的音频**会被用于其模型训练**；对内容有保密要求时请使用付费计划或改用其它服务商。
:::

## 申请步骤

1. 注册 [Gladia](https://app.gladia.io/)（免绑卡）
2. 在控制台「**API Keys**」页面创建密钥

## 在妙幕中配置

「引擎」页面 → 云端听写分组选「Gladia」：

<div className="img-container">
  <img src="/img/v3/cloud-asr/gladia.webp" alt="Gladia 云端听写配置表单：API Key 与 solaria 模型档位" />
</div>

| 字段     | 填写                                                            |
| -------- | --------------------------------------------------------------- |
| API Key  | 上一步创建的密钥                                                |
| 模型     | `solaria-1`（默认，全语种）或 `solaria-3`（英法德西意实录特化） |
| Base url | 默认 `https://api.gladia.io`，一般无需修改                      |

点「**测试连接**」验证后即可使用。

## solaria-1 与 solaria-3

- **solaria-1（默认）**：全语种档，语种覆盖最广、干净朗读与小语种表现好——**拿不准就用它**
- **solaria-3**：欧语实录特化（英 / 法 / 德 / 西 / 意），嘈杂环境与多说话人更强；但干净朗读与小语种反而不如 solaria-1，不要设为默认

## 常见问题

- **异步任务**：Gladia 走「上传 → 建任务 → 轮询」流程，长音频耐心等待即可；应用自动切片（约 28MB / 段）
- **识别语言**：免切自动检测；任务「原语言」仅做支持性检查
- **国内访问**：多数网络可直连，不通时配置代理

---

> 信息更新于 2026-07，免费额度与数据条款以 Gladia 官网为准。
