---
sidebar_position: 4
title: 硅基流动（SiliconFlow 转写）
description: 妙幕硅基流动云端听写配置指南：国内直连的 SenseVoice 系转写模型，注册送额度、部分模型免费，中文识别表现好。
keywords: [硅基流动, SiliconFlow, SenseVoice, 国内语音识别 API, 中文转写]
---

# 硅基流动（SiliconFlow 转写）

<ProviderMeta
  website="https://cloud.siliconflow.cn/"
  websiteLabel="SiliconFlow 云平台"
  credentials="API Key"
  freeTier="注册送额度，部分模型免费"
  pricing="按用量计费，价格低"
  bestFor="国内直连、中文内容、零门槛起步"
/>

国内的模型聚合云平台，提供 SenseVoice 系语音识别模型：**国内直连无需代理**，注册送额度，中文识别表现好。

## 申请步骤

1. 注册 [SiliconFlow 云平台](https://cloud.siliconflow.cn/)（手机号即可）
2. 在 [API 密钥管理](https://cloud.siliconflow.cn/account/ak) 创建密钥（`sk-` 开头）

## 在妙幕中配置

「引擎」页面 → 云端听写分组选「SiliconFlow 硅基流动」（OpenAI 兼容预设，Base url 已预填）：

<div className="img-container">
  <img src="/img/v3/cloud-asr/siliconflow.webp" alt="硅基流动云端听写配置表单" />
</div>

| 字段     | 填写                                                                   |
| -------- | ---------------------------------------------------------------------- |
| Base url | 预填 `https://api.siliconflow.cn/v1`，无需修改                         |
| API Key  | 上一步创建的密钥                                                       |
| 模型     | 如 `FunAudioLLM/SenseVoiceSmall`（以平台模型广场的音频转文字分类为准） |

点「**测试连接**」验证后即可使用。

## 常见问题

- **该平台还能干嘛**：同一个 Key 也能用于[翻译（硅基流动大模型）](/guides/translation/siliconflow)与 [TTS 配音](/guides/tts/openai-compatible)，一号三用
- **模型名哪里查**：平台「模型广场」筛选语音识别类目，复制准确的模型 ID
- **429 限流**：降低并发、加大请求间隔

---

> 信息更新于 2026-07，模型清单与价格以平台页面为准。
