---
sidebar_position: 8
title: 腾讯云（每月免费 5 小时）
description: 妙幕腾讯云云端听写配置指南：录音文件识别极速版，每月赠送 5 小时免费额度；AppID、SecretId、SecretKey 获取步骤与 standard / large 档位选择。
keywords:
  [
    腾讯云语音识别,
    录音文件识别极速版,
    免费转写额度,
    腾讯云 ASR,
    SecretId SecretKey,
  ]
---

# 腾讯云（每月免费 5 小时）

<ProviderMeta
  website="https://console.cloud.tencent.com/asr"
  websiteLabel="腾讯云·语音识别控制台"
  credentials="AppID + SecretId + SecretKey"
  freeTier="每月赠送 5 小时"
  pricing="超出后按转写时长计费"
  bestFor="中文内容 + 想要稳定免费额度的用户，云端听写首选之一"
/>

腾讯云「录音文件识别极速版」：**每月 5 小时免费额度**按月刷新，中文识别质量好，是云端听写里最实惠的正规大厂选项。

## 申请步骤

1. 注册 [腾讯云](https://cloud.tencent.com/) 并完成实名认证
2. 进入[语音识别控制台](https://console.cloud.tencent.com/asr)开通服务（开通「录音文件识别极速版」）
3. 在语音识别控制台的「**API 密钥管理**」查看 **AppID**（纯数字），并跳转创建 **SecretId / SecretKey**

## 在妙幕中配置

「引擎」页面 → 云端听写分组选「腾讯云」：

<div className="img-container">
  <img src="/img/v3/cloud-asr/tencent.webp" alt="腾讯云录音识别极速版配置表单：AppID、SecretID、SecretKey 与模型档位" />
</div>

| 字段                 | 填写                                             |
| -------------------- | ------------------------------------------------ |
| AppID                | 控制台显示的纯数字 ID                            |
| SecretID / SecretKey | API 密钥管理中创建的密钥对                       |
| 模型                 | `standard`（普通版）或 `large`（大模型版），见下 |

点「**测试连接**」验证后即可使用。

## standard 与 large 怎么选

识别语言自动跟随任务的「原语言」设置，这里只选**计费档位**：

| 档位               | 特点                                                                                          |
| ------------------ | --------------------------------------------------------------------------------------------- |
| `standard`（默认） | 按原语言使用单语种引擎，免费并发 20，性价比高                                                 |
| `large`            | 大模型版：识别更强、单价更高；中英粤走 `16k_zh_en`，其它语种走 `16k_multi_lang`，免费并发仅 5 |

原语言选「自动识别」时按中英粤混合识别引擎处理，其它语种请在任务里明确指定原语言。

## 常见问题

- **鉴权失败（code 4002）**：检查密钥是否正确、本机系统时间是否准确（与服务器偏差超过 3 分钟会导致签名失败）
- **免费额度在哪看**：语音识别控制台的资源包 / 用量页面
- **并发限流**：large 档免费并发只有 5，批量任务把「并发数」调到 ≤5 或改用 standard

---

> 信息更新于 2026-07，免费额度与价格以腾讯云控制台为准。
