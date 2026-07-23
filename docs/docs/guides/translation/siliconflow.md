---
sidebar_position: 9
title: 硅基流动（AI 翻译）
description: 妙幕硅基流动翻译配置指南：SiliconFlow 聚合 qwen、deepseek 等开源大模型，注册送额度、部分小模型免费，国内直连。
keywords: [硅基流动, SiliconFlow 翻译, 免费大模型, AI 字幕翻译, 开源模型 API]
---

# 硅基流动（AI 翻译）

<ProviderMeta
  website="https://cloud.siliconflow.cn/"
  websiteLabel="SiliconFlow 云平台"
  credentials="API Key"
  freeTier="注册送额度，部分小模型长期免费"
  pricing="按 token 计费，价格低"
  bestFor="想免费用开源大模型翻译；国内直连"
/>

国内的开源模型聚合平台：qwen、deepseek、glm 等模型一站接入，**注册送额度且部分小模型长期免费**，是零成本 AI 翻译的好起点。

## 申请步骤

1. 注册 [SiliconFlow](https://cloud.siliconflow.cn/)（手机号即可）
2. 在 [API 密钥管理](https://cloud.siliconflow.cn/account/ak) 创建密钥（`sk-` 开头）

## 在妙幕中配置

「翻译」页面选「硅基流动」：

<div className="img-container">
  <img src="/img/v3/translation/siliconflow.webp" alt="硅基流动翻译配置：Base url、API Key、模型名称与批量参数" />
</div>

| 字段     | 填写                                                                        |
| -------- | --------------------------------------------------------------------------- |
| Base url | 默认 `https://api.siliconflow.cn/v1`，无需修改                              |
| API Key  | 上一步创建的密钥                                                            |
| 模型名称 | 从平台「模型广场」复制准确 ID，如 `Qwen/Qwen3.5-9B`（免费档）或 deepseek 系 |

点「**测试翻译**」验证后即可使用。

## 参数建议

- 免费小模型限速较严：并发 1、间隔 ≥0.5 秒起步
- 小模型偶发 JSON 格式不稳，妙幕会自动修复；频繁失败换大一号模型或开启回显对齐校验

## 常见问题

- **同账号还能做什么**：[云端听写（SenseVoice）](/guides/cloud-asr/siliconflow)与 [TTS 配音](/guides/tts/openai-compatible)，一号三用
- **模型 ID 报错**：必须用模型广场显示的完整 ID（含组织前缀，如 `Qwen/`）

---

> 信息更新于 2026-07，模型与价格以平台页面为准。
