import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/* ---------- Hero ---------- */

function Hero({ version }: { version: string }) {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <div>
            <span className={styles.heroBadge}>
              开源免费 · MIT 许可 · v{version}
            </span>
            <Heading as="h1" className={styles.heroTitle}>
              视频转字幕、翻译、配音
              <br />
              <span className={styles.heroTitleAccent}>一站式桌面工具</span>
            </Heading>
            <p className={styles.heroSubtitle}>
              妙幕（SmartSub）把「语音转文字 → 字幕翻译 → 校对润色 → AI 配音 →
              烧录合成」整条流水线装进一个应用。本地模型处理、文件不出本机，
              支持批量任务与 GPU 加速，Windows / macOS / Linux 全平台可用。
            </p>
            <div className={styles.heroActions}>
              <Link
                className={clsx('button button--lg', styles.heroPrimaryBtn)}
                to="/download"
              >
                免费下载 v{version}
              </Link>
              <Link
                className={clsx('button button--lg', styles.heroGhostBtn)}
                to="/intro/quickstart"
              >
                5 分钟上手 →
              </Link>
            </div>
            <p className={styles.heroMeta}>
              让每一帧画面都能美妙地表达 ·{' '}
              <a
                href="https://github.com/buxuku/SmartSub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub 开源仓库
              </a>
            </p>
          </div>
          <div className={styles.heroShot}>
            <img
              src="/img/v3/launchpad/home.webp"
              alt="妙幕启动台界面：任务卡片、环境就绪度与最近任务"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------- 流水线 ---------- */

const PIPELINE_STEPS = [
  { title: '转写', desc: '7 类引擎把人声变成带时间轴的字幕' },
  { title: '翻译', desc: '免费源与 AI 大模型，支持术语表' },
  { title: '校对', desc: '逐句对照视频修改，AI 一键润色' },
  { title: '配音', desc: 'TTS 合成外语音轨，可克隆你的声音' },
  { title: '合成', desc: '字幕烧录 / 软封装，样式所见即所得' },
];

function Pipeline() {
  return (
    <section className={styles.pipeline}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <Heading as="h2">五段流水线，每一步都可独立使用</Heading>
          <p>串起来是全自动出片，拆开用是五个顺手的专业工具。</p>
        </div>
        <div className={styles.pipelineTrack}>
          {PIPELINE_STEPS.map((step, i) => (
            <>
              <div
                key={step.title}
                className={clsx('ss-card', styles.pipelineStep)}
              >
                <span className={styles.pipelineIndex}>{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {i < PIPELINE_STEPS.length - 1 && (
                <span
                  key={`arrow-${i}`}
                  className={styles.pipelineArrow}
                  aria-hidden
                >
                  →
                </span>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 数字条 ---------- */

const STATS = [
  { value: '7 类', label: '转写引擎' },
  { value: '20 个', label: '翻译服务' },
  { value: '8 家', label: '云端听写' },
  { value: '3 端', label: 'Win · Mac · Linux' },
  { value: '100%', label: '开源 · 全流程可免费' },
];

function Stats() {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.statsGrid}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 功能区块 ---------- */

type FeatureBlock = {
  title: string;
  desc: string;
  bullets: string[];
  link: string;
  linkText: string;
  image: string;
  alt: string;
};

const FEATURES: FeatureBlock[] = [
  {
    title: '字幕生成：多引擎本地转写',
    desc: '内置 whisper.cpp 开箱即用，faster-whisper、FunASR、Qwen3-ASR、FireRedASR 按需切换；没有显卡就用云端听写。',
    bullets: [
      '批量处理，NVIDIA / AMD / Intel / Apple 芯片 GPU 加速',
      '中文场景 FunASR / FireRedASR 表现优秀',
      'VAD 细粒度时间轴，断句自然',
    ],
    link: '/features/subtitle-generation',
    linkText: '了解字幕生成',
    image: '/img/v3/engines/overview.webp',
    alt: '引擎与模型管理页面',
  },
  {
    title: '字幕翻译：免费起步，AI 增强',
    desc: '内置免费翻译零配置可用；接入 DeepSeek、Gemini、Ollama 等大模型后，术语表与对齐防护让批量译文既准确又工整。',
    bullets: [
      '20 个翻译服务按配置状态分组，随用随切',
      '双语字幕输出，批量并发可调',
      '全局术语表自动注入，人名品牌不跑偏',
    ],
    link: '/features/subtitle-translation',
    linkText: '了解字幕翻译',
    image: '/img/v3/translation/overview.webp',
    alt: '翻译服务总览页面',
  },
  {
    title: '字幕校对：逐句核对不出戏',
    desc: '点字幕行视频即跳转，改完自动保存；撤销重做、搜索替换、合并拆分一应俱全，AI 帮你批量润色。',
    bullets: [
      '视频对照 + 快捷键流畅校对',
      '单条删除可恢复，覆盖前自动备份',
      '全文 AI 校对纠错别字与语病',
    ],
    link: '/features/proofreading',
    linkText: '了解字幕校对',
    image: '/img/v3/proofread/editor.webp',
    alt: '字幕校对台界面',
  },
  {
    title: 'AI 配音：用任何声音说任何语言',
    desc: '字幕逐条合成语音并自动对齐时间轴。本地引擎免费离线，云端服务音质拉满；录一段话就能克隆出你自己的音色。',
    bullets: [
      '本地 Kokoro / VITS 离线免费，Edge TTS 零配置',
      'ZipVoice / 火山复刻 / ElevenLabs 三种声音克隆',
      '语速预控 + 间隙借用，配音贴轴不赶稿',
    ],
    link: '/features/tts-dubbing',
    linkText: '了解配音与克隆',
    image: '/img/v3/dubbing/workbench.webp',
    alt: '配音工作台界面',
  },
  {
    title: '视频合成：剪辑软件级的烧录体验',
    desc: '样式预设 + 九宫格位置 + 实时预览，硬字幕烧录或软字幕封装一键切换，支持硬件加速编码。',
    bullets: [
      '所见即所得字幕样式，个人预设可保存',
      '硬件编码提速数倍，失败自动回退 CPU',
      '配音音轨可一并混入，直接出成品',
    ],
    link: '/features/video-merge',
    linkText: '了解视频合成',
    image: '/img/v3/merge/editor.webp',
    alt: '视频合成编辑器界面',
  },
  {
    title: '在线视频下载：链接直达字幕任务',
    desc: '粘贴 B 站、YouTube 等平台链接即可下载，yt-dlp 与 lux 双引擎覆盖 1800+ 站点；官方字幕自动配对，能不转写就不转写。',
    bullets: [
      '批量粘贴、混杂文本自动识别链接',
      '站点 Cookie 解锁高清与会员内容',
      '下载完成一键进入转写 / 翻译',
    ],
    link: '/features/video-download',
    linkText: '了解视频下载',
    image: '/img/v3/download/video-download.webp',
    alt: '在线视频下载页面',
  },
];

function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <Heading as="h2">六个模块，覆盖字幕工作的每个环节</Heading>
        </div>
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className={clsx(
              styles.featureRow,
              i % 2 === 1 && styles.featureRowReverse,
            )}
          >
            <div className={styles.featureText}>
              <Heading as="h3">{f.title}</Heading>
              <p>{f.desc}</p>
              <ul className={styles.featureBullets}>
                {f.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Link className={styles.featureLink} to={f.link}>
                {f.linkText} →
              </Link>
            </div>
            <Link className={styles.featureShot} to={f.link} aria-label={f.alt}>
              <img src={f.image} alt={f.alt} loading="lazy" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- 免费方案 ---------- */

const FREE_CELLS = [
  {
    step: '转写',
    plan: 'whisper.cpp / FunASR 等本地模型，下载一次离线可用',
  },
  {
    step: '翻译',
    plan: '内置免费翻译多源自动回退；Ollama 本地大模型可选',
  },
  {
    step: '配音',
    plan: '本地 Kokoro / VITS 离线合成，ZipVoice 免费克隆音色',
  },
  {
    step: '合成',
    plan: '内置 ffmpeg 本地烧录，无水印无时长限制',
  },
];

function FreePath() {
  return (
    <section className={styles.freePath}>
      <div className="container">
        <div className={styles.freeCard}>
          <div className={styles.freeCardHead}>
            <Heading as="h2">整条流水线，可以一分钱不花</Heading>
            <p>
              不需要 API
              Key，不需要注册任何服务，本地环节没有用量限制——云端服务全部是可选增强。
            </p>
          </div>
          <div className={styles.freeGrid}>
            {FREE_CELLS.map((c) => (
              <div key={c.step} className={styles.freeCell}>
                <h4>
                  <span className="ss-pill ss-pill--green">免费</span>
                  {c.step}
                </h4>
                <p>{c.plan}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */

function CTA({ version }: { version: string }) {
  return (
    <section className={styles.cta}>
      <div className="container">
        <Heading as="h2">现在就开始你的第一条字幕任务</Heading>
        <p>
          三步上手：安装 → 拖入文件 → 开始处理。遇到问题有文档、FAQ 和社区。
        </p>
        <div className={styles.ctaActions}>
          <Link
            className={clsx('button button--lg', styles.heroPrimaryBtn)}
            to="/download"
          >
            下载妙幕 v{version}
          </Link>
          <Link
            className={clsx('button button--lg', styles.heroGhostBtn)}
            to="/intro/introduction"
          >
            阅读文档
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- 页面 ---------- */

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const version = (siteConfig.customFields?.appVersion as string) ?? '';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '妙幕 SmartSub',
    alternateName: 'SmartSub',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Windows, macOS, Linux',
    softwareVersion: version,
    description:
      '开源免费的视频字幕工具：语音转文字、字幕翻译、校对润色、AI 配音与声音克隆、字幕烧录一站式完成，本地处理保护隐私。',
    url: 'https://smartsub.linxiaodong.com',
    downloadUrl: 'https://github.com/buxuku/SmartSub/releases/latest',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
    },
  };

  return (
    <Layout
      title="视频转字幕、字幕翻译、AI 配音一站式工具"
      description="妙幕（SmartSub）是开源免费的视频字幕软件：本地生成字幕、翻译成多语言、AI 配音与声音克隆、字幕烧录合成，支持批量处理与 GPU 加速，Windows / macOS / Linux 可用。"
    >
      <Head>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <Hero version={version} />
      <main>
        <Pipeline />
        <Stats />
        <Features />
        <FreePath />
        <CTA version={version} />
      </main>
    </Layout>
  );
}
