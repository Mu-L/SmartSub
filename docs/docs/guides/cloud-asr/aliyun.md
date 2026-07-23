---
sidebar_position: 9
title: 阿里云（商用版）
description: 妙幕阿里云云端听写配置指南：录音文件识别极速版（仅商用版，无免费试用），AccessKey 与智能语音交互项目 Appkey 的获取步骤，识别语种在控制台项目中配置。
keywords: [阿里云语音识别, 录音文件识别极速版, 智能语音交互, Appkey, AccessKey]
---

# 阿里云（商用版）

<ProviderMeta
  website="https://nls-portal.console.aliyun.com/"
  websiteLabel="阿里云·智能语音交互控制台"
  credentials="AccessKey ID + AccessKey Secret + 项目 Appkey"
  freeTier="无（仅商用版，无免费试用）"
  pricing="开通后按转写时长计费"
  bestFor="已在阿里云体系、需要发票与企业合规的用户"
/>

阿里云「录音文件识别极速版」。注意：该服务**仅提供商用版**，开通即按量计费，没有免费试用——个人尝鲜建议先用[腾讯云](./tencent)（月赠 5 小时）。

## 申请步骤

1. 注册 [阿里云](https://www.aliyun.com/) 并完成实名认证
2. 在 [RAM 访问控制](https://ram.console.aliyun.com/manage/ak) 创建 **AccessKey ID / AccessKey Secret**
3. 进入[智能语音交互控制台](https://nls-portal.console.aliyun.com/)，开通**录音文件识别极速版**（商用版）
4. 在「全部项目」中**创建项目**，拿到项目的 **Appkey**
5. 在项目的「功能配置」中设定**识别语种**（重要，见下）

## 在妙幕中配置

「引擎」页面 → 云端听写分组选「阿里云」：

<div className="img-container">
  <img src="/img/v3/cloud-asr/aliyun.webp" alt="阿里云录音识别极速版配置表单：AccessKey 与 Appkey" />
</div>

| 字段                  | 填写                             |
| --------------------- | -------------------------------- |
| AccessKey ID / Secret | RAM 创建的密钥对                 |
| Appkey                | 智能语音交互项目的 Appkey        |
| 模型                  | 固定 `flash`（极速版），不可修改 |

点「**测试连接**」验证后即可使用。

## 识别语种在控制台配置

:::caution 任务里的「原语言」对阿里云不生效
阿里云的识别语种绑定在 **Appkey 对应项目的功能配置**里，不走请求参数。默认的普通话模型可识别中英混合，覆盖主流场景；要转写其它语种，请到控制台修改该项目的语种配置（或为不同语种建多个项目、在妙幕里切换 Appkey）。
:::

## 常见问题

- **测试失败**：确认极速版已开通（商用版）、Appkey 属于当前账号、AccessKey 未禁用
- **转写结果语言不对**：见上——去项目功能配置里改语种
- **同账号还能做什么**：[阿里云翻译](/guides/translation/aliyun)、[通义千问 AI 翻译](/guides/translation/qwen)

---

> 信息更新于 2026-07，开通与计费以阿里云控制台为准。
