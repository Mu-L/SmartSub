---
sidebar_position: 18
title: 腾讯翻译
description: 妙幕腾讯云机器翻译配置指南：SecretId / SecretKey 获取步骤，每月 500 万字符免费额度，文本翻译接口参数建议。
keywords: [腾讯翻译, 腾讯云机器翻译, TMT, SecretId, 免费翻译额度]
---

# 腾讯翻译

<ProviderMeta
  website="https://console.cloud.tencent.com/tmt"
  websiteLabel="腾讯云·机器翻译控制台"
  credentials="SecretId + SecretKey"
  freeTier="文本翻译每月 500 万字符"
  pricing="超出后按字符计费"
  bestFor="免费额度最大（500 万字符/月），大批量字幕的主力免费机翻"
/>

腾讯云机器翻译（TMT）：**每月 500 万字符免费**——传统机翻里免费额度最大的一家，批量字幕翻译的主力选择。

## 申请步骤

1. 注册 [腾讯云](https://cloud.tencent.com/) 并实名认证
2. 在[机器翻译控制台](https://console.cloud.tencent.com/tmt)开通服务
3. 在 [API 密钥管理](https://console.cloud.tencent.com/cam/capi) 创建 **SecretId / SecretKey**

## 在妙幕中配置

「翻译」页面选「腾讯翻译」：

<div className="img-container">
  <img src="/img/v3/translation/tencent.webp" alt="腾讯翻译配置：SecretId、SecretKey 与地域" />
</div>

| 字段                 | 填写                                                                     |
| -------------------- | ------------------------------------------------------------------------ |
| SecretId / SecretKey | API 密钥管理中的密钥对                                                   |
| 地域                 | 默认 `ap-guangzhou`，一般无需修改                                        |
| 批量翻译数量         | 文本接口按段翻译，为保证时间轴对应**建议 1**；用「请求间隔」应对每秒限频 |

点「**测试翻译**」验证后即可使用。

## 常见问题

- **限频报错**：文本翻译默认 5 QPS——请求间隔设 0.25 秒以上（应用默认已按此优化）
- **鉴权失败**：检查密钥与系统时间（偏差过大会签名失败）
- **同账号还能做什么**：[腾讯云云端听写（月赠 5 小时）](/guides/cloud-asr/tencent)

---

> 信息更新于 2026-07，免费额度以腾讯云控制台为准。
