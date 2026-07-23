---
sidebar_position: 4
title: 更新日志
description: 妙幕（SmartSub）版本更新历史：v3.5 在线视频下载与术语表、v3.4 TTS 配音与声音克隆、v3.3 云端听写、v3.2 时间轴升级、v3.0 多引擎与全新界面。
keywords: [SmartSub 更新日志, 妙幕版本历史, changelog]
---

# 更新日志

以下为 3.x 各版本亮点摘要。完整说明（含全部修复项与英文版）见各版本的 GitHub Release 页面：[全部版本](https://github.com/buxuku/SmartSub/releases)。

[![Release](https://img.shields.io/github/v/release/buxuku/SmartSub?style=flat-square&logo=github&color=blue&label=最新版本)](https://github.com/buxuku/SmartSub/releases/latest)

## v3.5.0 — 在线视频下载登场，AI 翻译更可靠（2026-07-23）

- 全新「视频下载」：粘贴链接下载 B 站、YouTube 等平台视频，yt-dlp 与 lux 双引擎，下载完成一键进入字幕任务；自动抓取官方字幕并在向导中配对
- 支持导入站点 Cookie（浏览器一键提取 / cookies.txt / 手动粘贴），解锁登录后的高清与会员内容
- 新增全局 AI 翻译**术语表**：多词库、优先级、CSV/TXT 导入导出，命中词条自动注入提示词
- AI 批量翻译新增**多层对齐防护**，自动修复模型合并/拆分字幕造成的译文错位
- AI 服务商新增「思考模式」开关；新增**统一存储目录**设置
- 修复超长音频（4h+）转写崩溃：自动在静音处分段、时间轴无缝合并

[Release 详情 →](https://github.com/buxuku/SmartSub/releases/tag/v3.5.0)

## v3.4.0 — 配音与声音克隆登场（2026-07-16）

- 全新「TTS 配音」：字幕一键生成配音，行级试听、调整与重新生成
- 配音服务商全家桶：Edge TTS、OpenAI 兼容、Azure、ElevenLabs、火山豆包 + 免联网本地引擎（Kokoro / VITS）
- **声音克隆**：本地 ZipVoice 零样本 / 火山复刻 2.0 / ElevenLabs 即时克隆；内置降噪与质量检测
- 全新界面：启动台仪表盘、垂直导航、剪辑软件风格合并编辑器；任务向导支持保存「配方」
- 字幕合并支持**硬件加速编码**与个人样式预设；macOS 新增 CoreML / Metal 加速方式选择
- 日志中心升级：按日期与条件筛选，自动清理过期日志

[Release 详情 →](https://github.com/buxuku/SmartSub/releases/tag/v3.4.0)

## v3.3.0 — 云端听写上线 & 成句增强（2026-07-07）

- 「云端听写」接入六家在线 ASR 服务商，免 GPU 即可转写
- 成句与断句增强：硬切词边界回退、三态断句设置
- 任务并发调度改为阶段流水线：本地引擎仅转写互斥，云端按服务商全局限流
- 校对行内单条删除支持撤销恢复；faster-whisper 变体切换免重复下载

[Release 详情 →](https://github.com/buxuku/SmartSub/releases/tag/v3.3.0)

## v3.2.0 — 内置引擎时间轴升级 & 翻译增强（2026-06-30）

- 云端听写扩展至 8 家（OpenAI 兼容 / ElevenLabs / Deepgram / 火山豆包 / 腾讯云 / 阿里云 / 讯飞 / Gladia），多服务商多实例逐任务选择
- 内置 whisper.cpp 全新细粒度时间轴：Silero VAD 智能分段 + 最小显示时长
- **字幕效果档位**：按使用意图自动派生识别参数，几乎无需调参
- 新增**内置免费翻译源**：多源自动回退与限速；翻译批量并发可配置
- 任务运行期间阻止系统休眠；「每条字幕最大字数」支持词级时间重新成句

[Release 详情 →](https://github.com/buxuku/SmartSub/releases/tag/v3.2.0)

## v3.0.0 / v3.1.0 — 焕新出发，多引擎支持（2026-06-23）

自 2.x 以来最大的一次升级：

- **多引擎体系**：新增 faster-whisper、FunASR（SenseVoice / Paraformer）、Qwen3-ASR、FireRedASR-AED，FunASR 系走内置 sherpa-onnx 原生库；模型按需下载、支持文件夹导入（v3.1 起 faster-whisper 支持 NVIDIA 显卡）
- **GPU 加速全面升级**：CUDA（NVIDIA）、Vulkan（AMD / Intel）、CoreML（Mac）跨厂商覆盖，自动检测
- **界面完全重做**：全新视觉、可折叠侧边栏、命令面板、深色模式、首次启动引导与内置示例任务
- **任务管理重做**：任务即可命名工程，跨重启恢复、中断续跑、完成桌面通知
- **校对编辑器增强**：虚拟化长列表、快捷键、撤销重做、搜索替换、.bak 自动备份
- **合成升级**：所见即所得实时字幕预览、硬字幕烧录 / 软字幕封装（MKV）、导出画质选项
- 模型 / 运行库多镜像下载（GitHub / gh-proxy / GitCode / ModelScope）、断点续传与校验、全局网络代理

[v3.0.0 →](https://github.com/buxuku/SmartSub/releases/tag/v3.0.0) ｜ [v3.1.0 →](https://github.com/buxuku/SmartSub/releases/tag/v3.1.0)

## 更早版本（2.x 及以前）

2.x 时代奠定了核心能力：whisper.cpp 本地转写、多翻译服务接入、批量处理、字幕校对、CUDA / Core ML 加速等。2.x 与更早版本的完整记录见 [GitHub Releases](https://github.com/buxuku/SmartSub/releases?page=2)。

:::tip 从 2.x 升级
3.x 安装包不再按 CUDA 版本区分，直接安装最新版即可；GPU 加速包在应用内按需下载，配置与模型可继续使用。
:::
