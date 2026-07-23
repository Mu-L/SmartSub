---
sidebar_position: 7
title: 火山引擎豆包听写
description: 妙幕火山引擎豆包听写配置指南：录音文件识别·极速版（bigmodel），使用新版豆包语音控制台的 API Key，中文识别强，按转写时长计费。
keywords:
  [火山引擎语音识别, 豆包听写, 录音文件识别, 字节跳动 ASR, 中文语音转文字]
---

# 火山引擎豆包听写

<ProviderMeta
  website="https://console.volcengine.com/speech/app"
  websiteLabel="火山引擎·语音技术控制台"
  credentials="API Key（新版豆包语音控制台签发）"
  freeTier="无（开通后按量计费）"
  pricing="按转写时长计费"
  bestFor="中文内容的高质量在线转写；已用火山系（豆包翻译 / 豆包语音）的用户"
/>

字节跳动火山引擎的「录音文件识别·极速版」（大模型档 `bigmodel`），中文识别质量属第一梯队。

## 申请步骤

1. 注册 [火山引擎](https://www.volcengine.com/) 并完成实名认证
2. 进入**新版「豆包语音」控制台**，在「开通管理」中开通**录音文件识别大模型-极速版**
3. 在「**API Key 管理**」页面签发 API Key

:::caution 火山方舟的 Key 不通用
豆包听写必须使用「豆包语音」控制台签发的 API Key；火山方舟（Ark，大模型平台）的 API Key **不能**用于此服务。
:::

## 在妙幕中配置

「引擎」页面 → 云端听写分组选「豆包听写」：

<div className="img-container">
  <img src="/img/v3/cloud-asr/doubao.webp" alt="火山引擎豆包听写配置表单" />
</div>

| 字段     | 填写                                              |
| -------- | ------------------------------------------------- |
| API Key  | 豆包语音控制台签发的 Key                          |
| 模型     | 固定 `bigmodel`，不可修改                         |
| Base url | 默认 `https://openspeech.bytedance.com`，无需修改 |

点「**测试连接**」验证后即可使用。

## 常见问题

- **测试连接失败**：先确认已在「开通管理」开通对应模型——未开通时 Key 有效也会被拒
- **计费**：按实际转写的音频时长计费，价格见控制台计费说明
- **同账号还能做什么**：[火山翻译](/guides/translation/volcengine)、[豆包语音配音与声音复刻](/guides/tts/volcengine)

---

> 信息更新于 2026-07，开通流程与价格以火山引擎控制台为准。
