import MDXComponents from '@theme-original/MDXComponents';
import ProviderMeta from '@site/src/components/ProviderMeta';

// 全局注册自定义 MDX 组件：服务商配置指南页可直接使用 <ProviderMeta />，无需逐页 import
export default {
  ...MDXComponents,
  ProviderMeta,
};
