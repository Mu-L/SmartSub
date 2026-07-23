---
sidebar_position: 6
title: Azure Speech（微软配音）
description: 妙幕 Azure Speech 配音配置指南：Speech 资源创建、Region 与 Subscription Key 获取、700+ Neural 音色候选配置，F0 免费层每月 50 万字符。
keywords:
  [Azure Speech TTS, 微软配音, Neural 音色, zh-CN-XiaoxiaoNeural, 免费 TTS 额度]
---

# Azure Speech（微软配音）

<ProviderMeta
  website="https://portal.azure.com/"
  websiteLabel="Azure 门户"
  credentials="Region + Subscription Key"
  freeTier="F0 免费层每月 50 万字符"
  pricing="超出后按字符计费（含 SSML 标记字符）"
  bestFor="正式发布品质的中文 / 多语配音；Edge TTS 的官方替代"
/>

微软官方语音服务：**700+ Neural 音色**（与 Edge TTS 同一音色体系但走正式 API），支持 SSML 语速控制，F0 免费层每月 50 万字符。

## 申请步骤

1. 注册 [Azure](https://azure.microsoft.com/)（需绑卡，F0 层不扣费）
2. 在门户创建 **Speech 服务**资源，定价层选 **F0（免费）**
3. 在资源「**密钥和终结点**」页面获取 **密钥（Key）** 与 **区域（Region）**（如 `eastus` / `eastasia`）

## 在妙幕中配置

「音色」页面 → 在线服务选「Azure」：

<div className="img-container">
  <img src="/img/v3/tts/azure.webp" alt="Azure Speech 配置：Region、Subscription Key 与音色候选" />
</div>

| 字段             | 填写                                                                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Region           | 资源区域，需与 Key 匹配（Azure 门户资源概览可见）                                                                                                                                                      |
| Subscription Key | 密钥和终结点页面的 Key                                                                                                                                                                                 |
| Endpoint         | 一般**留空**（由 Region 自动拼接）；世纪互联等主权云区域才需填 `https://{region}.tts.speech.azure.cn` 形式覆盖。注意门户「终结点」显示的 `*.api.cognitive.*` 地址**不是** TTS 端点，粘贴后会被自动改写 |
| 音色候选         | 输入 Neural 音色名回车添加（如 `zh-CN-XiaoxiaoNeural`、`en-US-AriaNeural`），可点「拉取音色」浏览完整列表                                                                                              |

点「**测试连接**」验证后即可使用。

## 常见问题

- **401**：Key 与 Region 不匹配是第一嫌疑
- **计费口径**：按字符计费且**包含 SSML 标记字符**，实际消耗略高于正文字数
- **音色挑选**：`zh-CN` 前缀有几十个中文音色（含多情感风格），先「拉取音色」试听再定

---

> 信息更新于 2026-07，免费层与音色清单以 Azure 语音服务文档为准。
