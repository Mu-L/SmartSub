---
sidebar_position: 3
title: Ollama（本地大模型）
description: 妙幕 Ollama 翻译配置指南：本地跑 qwen、llama 等开源大模型翻译字幕，完全离线免费、数据不出本机；chat 接口地址与模型名配置说明。
keywords: [Ollama 翻译, 本地大模型翻译, 离线 AI 翻译, qwen 翻译, llama 翻译]
---

# Ollama（本地大模型）

<ProviderMeta
  website="https://ollama.com/"
  websiteLabel="ollama.com"
  credentials="无需密钥（本地服务）"
  freeTier="完全免费"
  pricing="本地运行，无费用"
  bestFor="隐私敏感内容、离线环境、零成本 AI 翻译"
  offline
/>

用 [Ollama](https://ollama.com/) 在本机跑开源大模型（qwen、llama、gemma 等）做翻译：**免费、离线、数据不出本机**，质量取决于所选模型与电脑性能。

## 准备 Ollama

1. 从 [Ollama 官网](https://ollama.com/download) 下载安装
2. 拉取一个适合翻译的模型（中文翻译推荐 qwen 系）：

```bash
ollama pull qwen3:8b     # 16GB 内存推荐
# 或轻量：ollama pull qwen3:4b
```

3. 确认服务运行中（安装后默认自启，端口 11434）

## 在妙幕中配置

「翻译」页面选「Ollama」：

<div className="img-container">
  <img src="/img/v3/translation/ollama.webp" alt="Ollama 翻译配置：API 地址与模型名称" />
</div>

| 字段     | 填写                                                           |
| -------- | -------------------------------------------------------------- |
| API 地址 | 默认 `http://localhost:11434/api/chat`（**注意是 chat 接口**） |
| 模型名称 | 已拉取的模型名，如 `qwen3:8b`                                  |

点「**测试翻译**」验证后即可使用。

## 使用建议

- **模型选择**：8B 级别模型翻译质量已可用；14B+ 更好但要求更高内存 / 显存
- **速度**：本地推理比云端慢，批量大任务合理设置「批次并发数」（通常 1–2）
- 支持[术语表](/advanced/glossary)注入与[自定义提示词](/advanced/custom-prompts)，与云端 AI 服务一致

## 常见问题

- **连接失败**：确认 Ollama 在运行（`ollama list` 能输出）、地址以 `/api/chat` 结尾
- **翻译很慢 / 电脑卡**：换小模型或降低并发；GPU 机器让 Ollama 用上显卡
- **返回格式错误**：小模型偶发不守 JSON 格式，妙幕会自动修复解析；频繁失败换大一号模型

---

> 信息更新于 2026-07。
