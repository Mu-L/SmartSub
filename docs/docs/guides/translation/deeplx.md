---
sidebar_position: 4
title: DeepLX
description: 妙幕 DeepLX 翻译配置指南：本机部署 DeepLX 服务后免费调用 DeepL 翻译质量，API 地址配置与稳定性注意事项。
keywords: [DeepLX, DeepL 免费, 字幕翻译 DeepL, 自部署翻译服务]
---

# DeepLX

<ProviderMeta
  website="https://github.com/OwO-Network/DeepLX"
  websiteLabel="DeepLX（GitHub）"
  credentials="无需密钥（本机自部署服务）"
  freeTier="免费"
  pricing="免费（依赖逆向接口）"
  bestFor="想要 DeepL 风格译文又不想付费的动手型用户"
/>

[DeepLX](https://github.com/OwO-Network/DeepLX) 是 DeepL 翻译的免费开源实现，需要**在本机单独部署服务**后由妙幕调用。译文风格接近 DeepL，但稳定性受上游限制。

:::caution 稳定性提示
DeepLX 走逆向接口，高频调用容易被限流（429）。批量任务请把并发降到 1–2、请求间隔拉大；追求稳定请考虑[内置免费翻译](./free)或 [AI 翻译](./overview#按需求推荐)。
:::

## 部署 DeepLX

按 [DeepLX 项目文档](https://github.com/OwO-Network/DeepLX) 安装并启动（提供各平台二进制与 Docker 方式），启动后默认监听：

```text
http://localhost:1188/translate
```

## 在妙幕中配置

「翻译」页面选「DeepLX」：

<div className="img-container">
  <img src="/img/v3/translation/deeplx.webp" alt="DeepLX 翻译配置：API 地址" />
</div>

| 字段     | 填写                                                                    |
| -------- | ----------------------------------------------------------------------- |
| API 地址 | 默认 `http://localhost:1188/translate`；部署在其它机器 / 端口时对应修改 |

点「**测试翻译**」验证后即可使用。

## 常见问题

- **频繁失败 / 429**：降低并发、增大请求间隔（≥0.5 秒），分批处理
- **连接拒绝**：确认 DeepLX 服务在运行且端口一致

---

> 信息更新于 2026-07。
