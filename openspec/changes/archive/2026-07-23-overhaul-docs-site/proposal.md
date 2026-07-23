# Proposal: 文档站全面翻新（对齐 v3.5 + 服务商配置指南 + 设计与 SEO 升级）

## Why

官网文档站（`docs/`，Docusaurus，smartsub.buxuku.com）内容停留在 v2.3 时代：更新日志止于 2.3.7（2025-05），介绍页只描述「whisper 转写 + 7 个翻译服务」，而软件已发布 v3.5.0——新增了多引擎 ASR（7 类）、云端听写（8 家）、20 个翻译服务、TTS 配音与声音克隆、字幕烧录合成、在线视频下载、术语表等核心能力，文档站完全没有体现。同时站内存在遗留脚手架、失效的 OG 分享图、过时截图，落地页无法传达产品当前的专业度；SEO 层面缺少关键词与场景覆盖，用户搜索相关需求时难以命中。

## What Changes

- **内容全量对齐 v3.5.0 代码事实**：重写入门/功能/配置/进阶各篇，新增字幕校对、TTS 配音与声音克隆、视频合成烧录、在线视频下载、术语表、配方等功能文档；更新日志补齐 3.0 → 3.5；清理 Docusaurus 脚手架残留（tutorial-basics/tutorial-extras/默认 blog）与孤儿页面（docs/docs/tasks/）。
- **新增服务商配置指南体系**：转写引擎（7 类）、云端听写（8 家）、翻译服务（20 个）、配音服务（5 类云端 + 3 个本地引擎）**每个服务商独立成页**，统一模板（申请步骤 → 费用/免费额度说明 → 配置截图 → 常见报错），面向小白用户，参考 pyvideotrans / VideoCaptioner 的渠道文档形态。
- **新增场景教程**：「YouTube/B站视频转中文字幕」「播客/会议录音转文字」「视频出海配外语音轨」「无显卡用云端听写」等以搜索需求为导向的教程页。
- **落地页与全站视觉系统重设计（中度）**：保持 Docusaurus 框架，重做首页（Hero 产品截图 + 流水线叙事 + 数字条 + 分功能区块 + 免费方案高亮），升级 custom.css 视觉系统（字体/配色/卡片/深浅色模式），提升专业感与阅读体验。
- **截图体系更新**：运行 v3.5.0 应用逐页截取新 UI（统一窗口尺寸、中文界面、必要处预置演示数据），替换全部旧截图，补齐失效的 OG 社交分享图。
- **SEO 基础建设**：页面级 title/description、关键词与场景词覆盖、sitemap 确认、结构化数据、社交卡片；架构上保留 i18n 目录约定（本期仅中文，英文后续再做）。

## Capabilities

### New Capabilities

- `docs-content-refresh`: 文档内容与 v3.5.0 事实对齐——信息架构（侧边栏）重构、各功能篇重写与新增、更新日志补齐、脚手架与孤儿页清理、全站截图更新。
- `docs-provider-guides`: 服务商配置指南——转写引擎/云端听写/翻译/配音四大类，每服务商独立页面 + 各类选型总览页，统一内容模板与截图规范。
- `docs-scenario-tutorials`: 场景教程——以用户搜索意图为导向的端到端教程页，覆盖高频使用场景。
- `docs-site-design`: 站点设计升级——落地页重设计与全站视觉系统（Docusaurus 框架内，custom.css + 首页组件），深浅色模式兼容。
- `docs-seo`: SEO 与可发现性——页面元数据、关键词/场景词策略、社交分享卡、sitemap 与结构化数据。

### Modified Capabilities

（无——现有 specs 均为应用能力，文档站为新领域）

## Impact

- **docs/ 站点**：`docs/docs/**`（内容重写与新增）、`docs/sidebars.ts`（信息架构）、`docs/docusaurus.config.ts`（元数据/OG/导航）、`docs/src/pages/index.tsx` 与 `docs/src/css/custom.css`（落地页与视觉系统）、`docs/static/img/**`（截图资产全量更新）。
- **应用本体**：零代码改动；仅需本地 `yarn dev` 运行应用截图。
- **素材依赖**：根 README.md（当前口径）、`Changelog/v3.2–v3.5`、GitHub Releases（v3.0/v3.1 说明）、`resources/preview/*.png`。
- **部署**：Vercel（docs/vercel.json 已有），构建需通过 `onBrokenLinks: 'throw'` 校验。
