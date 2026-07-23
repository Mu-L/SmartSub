import React from 'react';
import styles from './styles.module.css';

export interface ProviderMetaProps {
  /** 官网地址 */
  website?: string;
  /** 官网显示文字（缺省显示域名） */
  websiteLabel?: string;
  /** 凭据类型，如 "API Key" / "AppID + SecretKey" / "无需凭据" */
  credentials?: string;
  /** 免费额度，如 "每月 5 小时" / "无" / "完全免费" */
  freeTier?: string;
  /** 计费方式，如 "按转写时长" / "按 token" */
  pricing?: string;
  /** 推荐场景 */
  bestFor?: string;
  /** 是否本地离线运行 */
  offline?: boolean;
}

function hostnameOf(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

/**
 * 服务商配置指南页顶部的元信息卡。
 * 已在 src/theme/MDXComponents.tsx 全局注册，文档中可直接使用：
 * <ProviderMeta website="..." credentials="..." freeTier="..." pricing="..." bestFor="..." />
 */
export default function ProviderMeta({
  website,
  websiteLabel,
  credentials,
  freeTier,
  pricing,
  bestFor,
  offline,
}: ProviderMetaProps): React.ReactElement {
  const rows: Array<{ label: string; content: React.ReactNode }> = [];

  if (website) {
    rows.push({
      label: '官网',
      content: (
        <a href={website} target="_blank" rel="noopener noreferrer">
          {websiteLabel ?? hostnameOf(website)}
        </a>
      ),
    });
  }
  if (credentials) {
    rows.push({ label: '凭据', content: credentials });
  }
  if (freeTier) {
    rows.push({
      label: '免费额度',
      content: <span className={styles.freeTier}>{freeTier}</span>,
    });
  }
  if (pricing) {
    rows.push({ label: '计费方式', content: pricing });
  }
  if (bestFor) {
    rows.push({ label: '推荐场景', content: bestFor });
  }

  return (
    <div className={styles.card}>
      {offline !== undefined && (
        <span
          className={`ss-pill ${offline ? 'ss-pill--green' : 'ss-pill--amber'} ${styles.badge}`}
        >
          {offline ? '本地离线 · 数据不出本机' : '在线服务 · 数据经第三方'}
        </span>
      )}
      <dl className={styles.grid}>
        {rows.map((row) => (
          <div key={row.label} className={styles.item}>
            <dt className={styles.label}>{row.label}</dt>
            <dd className={styles.value}>{row.content}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
