---
sidebar_position: 14
title: 阿里云翻译
description: 妙幕阿里云机器翻译配置指南：RAM AccessKey 创建、机器翻译服务开通步骤，每月 100 万字符免费额度说明。
keywords: [阿里云翻译, 阿里机器翻译 API, AccessKey, 字幕翻译, 免费翻译额度]
---

# 阿里云翻译

<ProviderMeta
  website="https://mt.console.aliyun.com/"
  websiteLabel="阿里云·机器翻译控制台"
  credentials="AccessKey ID + AccessKey Secret"
  freeTier="通用版每月 100 万字符"
  pricing="超出后按字符计费"
  bestFor="已在阿里云体系的用户；免费额度稳定"
/>

阿里云机器翻译（通用版）：每月 100 万字符免费额度，企业级稳定性。

## 申请步骤

1. 注册 [阿里云](https://www.aliyun.com/) 并实名认证
2. 在[机器翻译控制台](https://mt.console.aliyun.com/)开通**机器翻译通用版**
3. 在 [RAM 访问控制](https://ram.console.aliyun.com/manage/ak) 创建 **AccessKey ID / AccessKey Secret**

## 在妙幕中配置

「翻译」页面选「阿里云翻译」：

<div className="img-container">
  <img src="/img/v3/translation/aliyun.webp" alt="阿里云翻译配置：AccessKey 与端点" />
</div>

| 字段                  | 填写                                 |
| --------------------- | ------------------------------------ |
| AccessKey ID / Secret | RAM 创建的密钥对                     |
| 端点                  | 默认 `mt.aliyuncs.com`，一般无需修改 |
| 批量翻译数量          | 建议 **15**                          |

点「**测试翻译**」验证后即可使用。

## 常见问题

- **InvalidAccessKeyId**：密钥被禁用或复制不完整
- **额度用尽**：控制台查看用量，超出部分按量计费
- **同账号还能做什么**：[通义千问 AI 翻译](./qwen)、[阿里云云端听写](/guides/cloud-asr/aliyun)

---

> 信息更新于 2026-07，额度与价格以阿里云控制台为准。
