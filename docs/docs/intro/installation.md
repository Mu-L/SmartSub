---
sidebar_position: 2
title: 下载与安装
description: 妙幕（SmartSub）下载安装指南：Windows、macOS（含 Homebrew）、Linux 安装包选择，macOS 提示已损坏的解决办法，GPU 加速包说明。
keywords: [SmartSub 下载, 妙幕 安装, 字幕软件下载, Homebrew, macOS 已损坏]
---

# 下载与安装

## 系统要求

| 系统    | 要求                                        |
| ------- | ------------------------------------------- |
| Windows | Windows 10 / 11（64 位）                    |
| macOS   | macOS 11.0 或更高（Intel 与 Apple Silicon） |
| Linux   | 主流 x64 发行版（提供 deb 与 AppImage）     |

:::info v3 起不再按显卡选安装包
旧版本需要按 CUDA 版本选择安装包，**v3 起每个平台只有一个安装包**。GPU 加速包在安装后由应用内按需下载（NVIDIA 用 CUDA、AMD / Intel 用 Vulkan、Apple 芯片自动启用 Core ML / Metal），无需手动安装 CUDA Toolkit。
:::

## 选择安装包

| 系统    | 芯片  | 安装包      | 说明                                              |
| ------- | ----- | ----------- | ------------------------------------------------- |
| Windows | x64   | windows-x64 | NVIDIA 用 CUDA，AMD / Intel 用 Vulkan，应用内下载 |
| macOS   | Apple | mac-arm64   | 自动启用 Core ML / Metal 加速                     |
| macOS   | Intel | mac-x64     | 仅 CPU，不支持 GPU 加速                           |
| Linux   | x64   | linux-x64   | 提供 deb 与 AppImage 两种格式                     |

下载入口：[下载页面](/download) ｜ [GitHub Releases](https://github.com/buxuku/SmartSub/releases) ｜ [夸克网盘](https://pan.quark.cn/s/0b16479b40ca)

## macOS 安装

推荐使用 Homebrew，会自动匹配芯片类型，升级也只需一条命令：

```bash
brew tap buxuku/tap          # 只需执行一次
brew install --cask smartsub # 安装
brew upgrade --cask smartsub # 升级
```

手动安装 DMG 后，如果提示**「应用程序已损坏，无法打开」**，在终端执行以下命令后重新打开即可（这是 macOS 对未上架应用的隔离机制，并非应用真的损坏）：

```bash
sudo xattr -dr com.apple.quarantine /Applications/SmartSub.app
```

## Windows 安装

下载 `SmartSub_Windows_<版本>_x64.exe` 双击安装。如遇 SmartScreen 提示，点「更多信息 → 仍要运行」。

## Linux 安装

- **deb**（Debian / Ubuntu 系）：`sudo dpkg -i SmartSub_Linux_<版本>_amd64.deb`
- **AppImage**（任意发行版）：`chmod +x` 后直接运行

## 首次启动

第一次打开妙幕会进入新手引导：

1. **下载一个语音模型**——没有 GPU 或暂时不想下载模型，也可以先配置[云端听写](/guides/cloud-asr/overview)（联网转写，免模型免 GPU）
2. 需要 GPU 加速的用户，安装后到「引擎」页面确认加速状态，应用会自动检测显卡并推荐加速方案，详见 [GPU 加速](../advanced/hardware-acceleration)
3. 模型下载缓慢或失败时，可以手动下载后导入，见[模型选择与导入](/guides/engines/models)

安装完成后，继续阅读[快速上手](./quickstart)跑通第一个任务。
