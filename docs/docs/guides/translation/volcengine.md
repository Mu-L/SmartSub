---
sidebar_position: 15
title: 火山翻译
description: 妙幕火山引擎机器翻译配置指南：火山引擎 AccessKey 获取与翻译服务开通步骤，每月 200 万字符免费额度，中文质量好。
keywords: [火山翻译, 火山引擎机器翻译, 字节跳动翻译 API, 免费翻译额度]
---

# 火山翻译

<ProviderMeta
  website="https://console.volcengine.com/translate/home"
  websiteLabel="火山引擎·机器翻译控制台"
  credentials="AccessKey ID + Secret AccessKey"
  freeTier="每月 200 万字符"
  pricing="超出后按字符计费"
  bestFor="免费额度最大的传统机翻之一，中文质量好"
/>

字节跳动火山引擎的机器翻译：**每月 200 万字符免费**（传统机翻里最慷慨的档位之一），中文语感好。

## 申请步骤

1. 注册 [火山引擎](https://www.volcengine.com/) 并实名认证
2. 在[机器翻译控制台](https://console.volcengine.com/translate/home)开通服务
3. 在[密钥管理](https://console.volcengine.com/iam/keymanage/)获取 **AccessKey ID / Secret AccessKey**

## 在妙幕中配置

「翻译」页面选「火山翻译」：

<div className="img-container">
  <img src="/img/v3/translation/volcengine.webp" alt="火山翻译配置：AccessKey 与批量参数" />
</div>

| 字段                  | 填写                    |
| --------------------- | ----------------------- |
| AccessKey ID / Secret | 密钥管理中的密钥对      |
| 批量翻译数量          | **最大 16**，过大会失败 |

点「**测试翻译**」验证后即可使用。

## 常见问题

- **鉴权失败**：确认密钥完整、账号已实名、翻译服务已开通
- **限流**：按量购买或降低并发、加大请求间隔
- **同账号还能做什么**：[豆包翻译（大模型）](./doubao)、[豆包听写](/guides/cloud-asr/volcengine)、[豆包语音配音](/guides/tts/volcengine)

---

> 信息更新于 2026-07，免费额度以火山引擎控制台为准。
