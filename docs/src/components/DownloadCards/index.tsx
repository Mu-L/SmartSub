import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

const GITHUB_RELEASE_BASE =
  'https://github.com/buxuku/SmartSub/releases/download';

interface DownloadCardProps {
  title: string;
  description: string;
  downloadUrl: string;
  buttonText: string;
}

function DownloadCard({
  title,
  description,
  downloadUrl,
  buttonText,
}: DownloadCardProps) {
  return (
    <div className="col col--6" style={{ marginBottom: '1rem' }}>
      <div className="card">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <a
            href={downloadUrl}
            className="button button--primary button--block"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * v3.x 起安装包不再按 CUDA 版本区分：GPU 加速包安装后在应用内按需下载。
 * 命名规则与 GitHub Release 产物一致：
 *   SmartSub_Windows_<v>_x64.exe / SmartSub_Mac_<v>_<arch>.dmg /
 *   SmartSub_Linux_<v>_amd64.deb / SmartSub_Linux_<v>_x86_64.AppImage
 */
export default function DownloadCards(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const version = siteConfig.customFields?.appVersion as string;

  return (
    <div
      className="download-section"
      style={{ marginTop: '24px', marginBottom: '24px' }}
    >
      <Tabs groupId="os-choice" queryString="os">
        <TabItem value="windows" label="Windows" default>
          <div className="row">
            <DownloadCard
              title="Windows (x64)"
              description="适用于 Windows 10/11 64 位系统。NVIDIA 显卡用 CUDA、AMD/Intel 显卡用 Vulkan 加速，加速包安装后在应用内按需下载，无需预装 CUDA Toolkit。"
              downloadUrl={`${GITHUB_RELEASE_BASE}/v${version}/SmartSub_Windows_${version}_x64.exe`}
              buttonText={`下载 v${version} (EXE)`}
            />
          </div>
        </TabItem>

        <TabItem value="macos" label="macOS">
          <div className="row">
            <DownloadCard
              title="Mac (Apple Silicon)"
              description="适用于 M 系列芯片的 Mac，自动启用 Core ML / Metal 硬件加速。"
              downloadUrl={`${GITHUB_RELEASE_BASE}/v${version}/SmartSub_Mac_${version}_arm64.dmg`}
              buttonText={`下载 v${version} (DMG)`}
            />
            <DownloadCard
              title="Mac (Intel)"
              description="适用于 Intel 处理器的 Mac，仅 CPU 运行，不支持 GPU 加速。"
              downloadUrl={`${GITHUB_RELEASE_BASE}/v${version}/SmartSub_Mac_${version}_x64.dmg`}
              buttonText={`下载 v${version} (DMG)`}
            />
          </div>
          <p>
            macOS 用户推荐使用 Homebrew 安装，会自动匹配芯片类型，升级也更方便：
          </p>
          <CodeBlock language="bash">
            {`brew tap buxuku/tap          # 只需执行一次
brew install --cask smartsub # 安装
brew upgrade --cask smartsub # 升级`}
          </CodeBlock>
        </TabItem>

        <TabItem value="linux" label="Linux">
          <div className="row">
            <DownloadCard
              title="Linux (deb)"
              description="适用于 Debian / Ubuntu 系发行版（x64）。GPU 加速包在应用内按需下载。"
              downloadUrl={`${GITHUB_RELEASE_BASE}/v${version}/SmartSub_Linux_${version}_amd64.deb`}
              buttonText={`下载 v${version} (DEB)`}
            />
            <DownloadCard
              title="Linux (AppImage)"
              description="适用于任意主流发行版（x64），免安装直接运行。"
              downloadUrl={`${GITHUB_RELEASE_BASE}/v${version}/SmartSub_Linux_${version}_x86_64.AppImage`}
              buttonText={`下载 v${version} (AppImage)`}
            />
          </div>
        </TabItem>
      </Tabs>
    </div>
  );
}
