---
sidebar_position: 19
title: 讯飞翻译
description: 妙幕讯飞机器翻译配置指南：讯飞开放平台 APPID / APIKey / APISecret 三件套获取步骤与参数建议。
keywords: [讯飞翻译, 讯飞机器翻译 API, 讯飞开放平台, 字幕翻译]
---

# 讯飞翻译

<ProviderMeta
  website="https://console.xfyun.cn/services/its"
  websiteLabel="讯飞开放平台"
  credentials="APPID + APIKey + APISecret"
  freeTier="新用户有免费调用量（以平台为准）"
  pricing="按字符 / 调用量计费"
  bestFor="已在讯飞生态（听写 / 语音）的用户顺手复用"
/>

科大讯飞的机器翻译服务，与讯飞听写共用开放平台账号体系。

## 申请步骤

1. 注册 [讯飞开放平台](https://www.xfyun.cn/) 并实名认证
2. 创建应用并开通[机器翻译服务](https://console.xfyun.cn/services/its)
3. 在应用的「服务接口认证信息」获取 **APPID / APIKey / APISecret**

## 在妙幕中配置

「翻译」页面选「讯飞翻译」：

<div className="img-container">
  <img src="/img/v3/translation/xunfei.webp" alt="讯飞翻译配置：APPID、APIKey、APISecret" />
</div>

| 字段               | 填写                                 |
| ------------------ | ------------------------------------ |
| APPID              | 应用的数字 ID                        |
| APIKey / APISecret | 服务接口认证信息中的密钥对           |
| 批量翻译数量       | 按段翻译，为保证时间轴对应**建议 1** |

点「**测试翻译**」验证后即可使用。

## 常见问题

- **11200 授权错误**：确认机器翻译服务已在该应用下开通
- **限流**：加大请求间隔；免费量用尽需购买
- **同账号还能做什么**：[讯飞听写（云端转写）](/guides/cloud-asr/xfyun)

---

> 信息更新于 2026-07，额度与价格以讯飞开放平台为准。
