## ADDED Requirements

### Requirement: 文档内容与 v3.5.0 代码事实一致

文档站全部正文内容 SHALL 与 v3.5.0 的实际功能一致，不得残留 2.x 时代的过时描述（如「仅 whisper 转写」「7 个翻译服务」「仅 CUDA/CoreML 加速」）。功能清单、引擎数量、服务商数量、GPU 加速矩阵等事实性表述 MUST 以根 README.md 与 `types/provider.ts`、`renderer/pages/[locale]/` 的代码事实为准。

#### Scenario: 介绍页反映当前产品形态

- **WHEN** 用户访问「软件介绍」页
- **THEN** 页面呈现「转写 → 翻译 → 校对 → 配音 → 合成」流水线叙事，且提及多引擎 ASR（7 类）、云端听写、20 个翻译服务、TTS 配音与声音克隆、字幕烧录、在线视频下载、全流程免费方案

#### Scenario: 无过时事实残留

- **WHEN** 在 `docs/docs/` 全文检索 2.x 时代口径（如仅列 7 个翻译服务、「使用 OpenAI 的 Whisper 模型」单引擎表述）
- **THEN** 不存在与 v3.5.0 事实冲突的描述

### Requirement: 核心功能篇覆盖全部流水线环节

文档 SHALL 为每个流水线环节提供独立功能篇：字幕生成（转写）、字幕翻译、字幕校对、TTS 配音与声音克隆、视频合成（烧录）、在线视频下载。每篇 MUST 包含功能说明、操作步骤与至少一张 v3.5 新 UI 截图。

#### Scenario: 新增功能有对应文档

- **WHEN** 用户在侧边栏「核心功能」分类下浏览
- **THEN** 可见字幕校对、TTS 配音与声音克隆、视频合成、在线视频下载四篇 2.x 时代不存在的功能文档

#### Scenario: 功能篇包含操作指引

- **WHEN** 用户打开任一功能篇
- **THEN** 页面包含该功能的入口位置、操作步骤和新 UI 截图

### Requirement: 更新日志补齐至 v3.5.0

更新日志页 SHALL 以倒序覆盖 v3.0.0 至 v3.5.0 的全部 minor 版本，每版包含版本号、发布日期、中文亮点摘要（3–6 条）与对应 GitHub Release 链接；2.x 历史 SHALL 折叠为概述段落。

#### Scenario: 查看最新版本日志

- **WHEN** 用户访问更新日志页
- **THEN** 首个条目为 v3.5.0，包含视频下载、术语表等亮点及 Release 链接

#### Scenario: 历史版本可追溯

- **WHEN** 用户向下滚动更新日志
- **THEN** 依次可见 v3.4 / v3.3 / v3.2 / v3.1 / v3.0 条目，2.x 以概述形式收尾

### Requirement: 信息架构按新分类重构

侧边栏 SHALL 重构为：入门指南、核心功能、配置指南、场景教程、进阶使用、FAQ。进阶使用 MUST 覆盖 GPU 加速、术语表、提示词、配方、存储目录、日志中心。配置指南子项 SHALL 由目录 `_category_.json` 自动生成。

#### Scenario: 侧边栏分类完整

- **WHEN** 用户展开文档侧边栏
- **THEN** 六个分类齐备，且进阶使用包含术语表、配方、存储目录等 v3.x 新增主题

### Requirement: 清理脚手架残留与孤儿页面

仓库 SHALL 移除 Docusaurus 脚手架残留（`tutorial-basics/`、`tutorial-extras/`、默认 `blog/`、`undraw_*.svg`、`docusaurus.png`）与孤儿页面（`docs/docs/tasks/`，内容并入对应功能篇）。

#### Scenario: 脚手架页面不可访问

- **WHEN** 构建站点并访问 `/tutorial-basics/create-a-document` 等脚手架路由
- **THEN** 路由不存在，构建产物中无脚手架页面

### Requirement: 全站截图更新为 v3.5 新 UI

文档与落地页使用的应用截图 SHALL 全部来自 v3.5.0 新 UI（统一窗口尺寸、中文界面、浅色主题），存放于 `docs/static/img/v3/` 下；旧截图目录 MUST 删除。涉及配置表单的截图 MUST NOT 包含真实凭据。

#### Scenario: 无旧 UI 截图残留

- **WHEN** 检查 `docs/static/img/` 与全站页面引用
- **THEN** 不存在 2.x 旧 UI 截图及其引用，新截图均位于 `img/v3/` 目录

#### Scenario: 截图无敏感信息

- **WHEN** 审查含配置表单的截图
- **THEN** API Key 等凭据均为占位符或打码
