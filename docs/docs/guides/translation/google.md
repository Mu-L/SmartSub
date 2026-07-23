---
sidebar_position: 5
title: 谷歌翻译（Cloud Translation）
description: 妙幕谷歌翻译配置指南：Google Cloud Translation API 密钥创建步骤与免费额度说明（每月 50 万字符免费）。
keywords: [谷歌翻译 API, Google Cloud Translation, 字幕翻译, 谷歌翻译密钥]
---

# 谷歌翻译（Cloud Translation）

<ProviderMeta
  website="https://console.cloud.google.com/apis/credentials"
  websiteLabel="Google Cloud Console"
  credentials="API Key"
  freeTier="每月 50 万字符免费"
  pricing="超出后按字符计费"
  bestFor="多语种覆盖广、质量稳定的正规渠道"
/>

Google 官方的 Cloud Translation API（区别于[谷歌免费翻译](./free)的公共接口）：语种覆盖广、稳定可靠，每月有免费字符额度。

## 申请步骤

1. 登录 [Google Cloud Console](https://console.cloud.google.com/)，创建（或选择）一个项目
2. 在「API 和服务 → 库」中启用 **Cloud Translation API**（需要绑定结算账号）
3. 在「[凭据](https://console.cloud.google.com/apis/credentials)」页面创建 **API 密钥**
4. 建议为密钥设置 API 限制（仅允许 Cloud Translation API），防止盗用

## 在妙幕中配置

「翻译」页面选「谷歌翻译」：

| 字段    | 填写             |
| ------- | ---------------- |
| API Key | 上一步创建的密钥 |

点「**测试翻译**」验证后即可使用。

## 常见问题

- **403 报错**：确认项目已启用 Cloud Translation API、结算账号有效、密钥未被限制到其它 API
- **国内访问**：需要代理，可在「设置 → 网络代理」统一配置
- **免费额度**：Cloud Translation 每月前 50 万字符免费，超出按量计费，详见 [官方定价](https://cloud.google.com/translate/pricing)

---

> 信息更新于 2026-07，额度与价格以 Google Cloud 官网为准。
