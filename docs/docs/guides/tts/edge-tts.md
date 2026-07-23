---
sidebar_position: 4
title: Edge TTS（免费试用档）
description: 妙幕 Edge TTS 配音配置指南：免费免注册的微软 Neural 音色通道，音色候选配置方法；属逆向接口试用档，不承诺可用性。
keywords: [Edge TTS, 免费配音, 微软语音, zh-CN-XiaoxiaoNeural, 免费 TTS]
---

# Edge TTS（免费试用档）

<ProviderMeta
  credentials="无需注册与 API Key"
  freeTier="免费（逆向接口试用档）"
  pricing="免费，但不承诺可用性"
  bestFor="零配置在线试用微软 Neural 音色；轻量临时任务"
/>

借助 Edge 浏览器朗读通道的免费 TTS：微软 Neural 音色、无需任何注册。**但它是逆向接口**——2025-12 曾大规模断供，随时可能不可用，**不建议作为主力通道**。

:::caution 可用性风险
Edge 免费通道不承诺可用性。断供时请切换到[本地 Kokoro / VITS](./local-engines)（免费离线）或 [Azure Speech](./azure)（同为微软 Neural 音色体系的正式服务）。
:::

## 在妙幕中配置

「音色」页面 → 在线服务选「Edge TTS」：

<div className="img-container">
  <img src="/img/v3/tts/edge-tts.webp" alt="Edge TTS 配置：音色候选与请求参数" />
</div>

| 字段              | 填写                                                                                                                                                |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 音色候选          | 输入微软 Neural 音色名回车添加，如 `zh-CN-XiaoxiaoNeural`、`zh-CN-YunxiNeural`、`en-US-AriaNeural`（与 Azure 同一命名体系，完整清单见微软语音文档） |
| 请求超时 / 并发数 | 默认即可；失败率高时降低并发                                                                                                                        |

点「**测试连接**」（会真实合成一句 "Hello"）验证后即可使用。

## 常用中文音色

| 音色                   | 感觉           |
| ---------------------- | -------------- |
| `zh-CN-XiaoxiaoNeural` | 女声，自然通用 |
| `zh-CN-YunxiNeural`    | 男声，年轻阳光 |
| `zh-CN-YunyangNeural`  | 男声，新闻播报 |
| `zh-CN-XiaoyiNeural`   | 女声，活泼     |

## 常见问题

- **合成失败 / 超时**：通道被上游限制的典型表现——换本地引擎或 Azure
- **音色不生效**：确认音色名拼写完整准确（区分大小写）

---

> 信息更新于 2026-07。
