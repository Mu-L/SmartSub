## ADDED Requirements

### Requirement: 页面级元数据完整

每篇文档页 SHALL 在 frontmatter 提供 `title`、`description`、`keywords`；description MUST 为面向搜索结果的完整中文句子（非截断正文）。站点级 `themeConfig.metadata` SHALL 补充核心关键词。

#### Scenario: 文档页元数据齐备

- **WHEN** 抽查任一新建或重写的文档页源文件
- **THEN** frontmatter 包含 title、description、keywords 三项且内容有效

### Requirement: 关键词分层覆盖

SEO 关键词 SHALL 分三层落位：核心词（视频字幕生成、字幕翻译、AI 配音、声音克隆、视频转文字、批量字幕、开源免费）落在首页与介绍页；服务商长尾词（服务商名 + 配置/免费额度/字幕）落在配置指南页；场景词（如「YouTube 视频加中文字幕」「录音转文字」）落在场景教程页。MUST NOT 使用竞品名称做关键词。

#### Scenario: 核心词命中首页

- **WHEN** 检查首页 HTML 的 title 与 meta
- **THEN** 包含「视频字幕」「字幕翻译」「AI 配音」等核心词

#### Scenario: 无竞品词

- **WHEN** 全站检索竞品产品名（作为 keywords/标题用途）
- **THEN** 不存在以竞品名引流的元数据或标题

### Requirement: 社交分享卡有效

站点 SHALL 提供有效的 OG 社交分享图（1200×630，路径与 `themeConfig.image` 一致），修复现有失效引用；分享到社交平台时 MUST 正确展示标题、描述与卡片图。

#### Scenario: OG 图可访问

- **WHEN** 构建站点并请求 `themeConfig.image` 指向的图片路径
- **THEN** 返回有效图片文件（当前 `img/smartsub-social-card.jpg` 引用 404 的问题被修复）

### Requirement: 结构化数据与站点地图

首页 SHALL 注入 JSON-LD `SoftwareApplication` 结构化数据（含应用类别、操作系统、免费 offers）；production 构建 MUST 生成 sitemap.xml 且包含全部文档路由。

#### Scenario: 结构化数据有效

- **WHEN** 用结构化数据校验工具检查首页
- **THEN** 识别出合法的 SoftwareApplication 实体

#### Scenario: sitemap 覆盖新页面

- **WHEN** production 构建后检查 sitemap.xml
- **THEN** 包含服务商配置页与场景教程页的 URL
