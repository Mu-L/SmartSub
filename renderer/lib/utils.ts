import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const models = [
  {
    name: 'Tiny',
    desc: {
      key: 'modelDesc.tiny',
      size: '77.7 MB'
    },
  },
  {
    name: 'Base',
    desc: {
      key: 'modelDesc.base',
      size: '148 MB'
    },
  },
  {
    name: 'Small',
    desc: {
      key: 'modelDesc.small',
      size: '488 MB'
    },
  },
  {
    name: 'Medium',
    desc: {
      key: 'modelDesc.medium',
      size: '1.53 GB'
    },
  },
  {
    name: 'Large-v1',
    desc: {
      key: 'modelDesc.large',
      size: '3.09 GB'
    },
  },
  {
    name: 'Large-v2',
    desc: {
      key: 'modelDesc.large',
      size: '3.09 GB'
    },
  },
  {
    name: 'Large-v3',
    desc: {
      key: 'modelDesc.large',
      size: '3.09 GB'
    },
  },
  {
    name: 'Large-v3-turbo',
    desc: {
      key: 'modelDesc.largeTurbo',
      size: '1.62 GB'
    }
  },
  {
    name: 'Tiny.en',
    desc: {
      key: 'modelDesc.tinyEn',
      size: '77.7 MB'
    },
  },
  {
    name: 'Base.en',
    desc: {
      key: 'modelDesc.baseEn',
      size: '148 MB'
    },
  },
  {
    name: 'Small.en',
    desc: {
      key: 'modelDesc.smallEn',
      size: '488 MB'
    },
  },
  {
    name: 'Medium.en',
    desc: {
      key: 'modelDesc.mediumEn',
      size: '1.53 GB'
    },
  },
];

export const supportedLanguage = [
  // 最常用语言
  { name: '中文', value: 'zh', baidu: 'zh', volc: 'zh' },
  { name: '英语', value: 'en', baidu: 'en', volc: 'en' },
  { name: '日语', value: 'ja', baidu: 'jp', volc: 'ja' },
  { name: '韩语', value: 'ko', baidu: 'kor', volc: 'ko' },
  { name: '法语', value: 'fr', baidu: 'fra', volc: 'fr' },
  { name: '德语', value: 'de', baidu: 'de', volc: 'de' },
  { name: '西班牙语', value: 'es', baidu: 'spa', volc: 'es' },
  { name: '俄语', value: 'ru', baidu: 'ru', volc: 'ru' },
  { name: '葡萄牙语', value: 'pt', baidu: 'pt', volc: 'pt' },
  { name: '意大利语', value: 'it', baidu: 'it', volc: 'it' },
  
  // 其他欧洲语言
  { name: '荷兰语', value: 'nl', baidu: 'nl', volc: 'nl' },
  { name: '波兰语', value: 'pl', baidu: 'pl', volc: 'pl' },
  { name: '土耳其语', value: 'tr', baidu: null, volc: 'tr' },
  { name: '瑞典语', value: 'sv', baidu: 'swe', volc: 'sv' },
  { name: '捷克语', value: 'cs', baidu: 'cs', volc: 'cs' },
  { name: '丹麦语', value: 'da', baidu: 'dan', volc: 'da' },
  { name: '芬兰语', value: 'fi', baidu: 'fin', volc: 'fi' },
  { name: '希腊语', value: 'el', baidu: 'el', volc: 'el' },
  { name: '匈牙利语', value: 'hu', baidu: 'hu', volc: 'hu' },
  { name: '挪威语', value: 'no', baidu: null, volc: 'no' },
  { name: '罗马尼亚语', value: 'ro', baidu: 'rom', volc: 'ro' },
  { name: '斯洛伐克语', value: 'sk', baidu: null, volc: 'sk' },
  { name: '克罗地亚语', value: 'hr', baidu: null, volc: 'hr' },
  { name: '塞尔维亚语', value: 'sr', baidu: null, volc: 'sr' },
  { name: '斯洛文尼亚语', value: 'sl', baidu: 'slo', volc: 'sl' },
  { name: '保加利亚语', value: 'bg', baidu: 'bul', volc: 'bg' },
  { name: '乌克兰语', value: 'uk', baidu: null, volc: 'uk' },
  { name: '爱沙尼亚语', value: 'et', baidu: 'est', volc: 'et' },
  { name: '拉脱维亚语', value: 'lv', baidu: null, volc: 'lv' },
  { name: '立陶宛语', value: 'lt', baidu: null, volc: 'lt' },
  
  // 亚洲语言
  { name: '印地语', value: 'hi', baidu: null, volc: 'hi' },
  { name: '泰语', value: 'th', baidu: 'th', volc: 'th' },
  { name: '越南语', value: 'vi', baidu: 'vie', volc: 'vi' },
  { name: '印度尼西亚语', value: 'id', baidu: null, volc: 'id' },
  { name: '马来语', value: 'ms', baidu: null, volc: 'ms' },
  { name: '泰米尔语', value: 'ta', baidu: null, volc: 'ta' },
  { name: '乌尔都语', value: 'ur', baidu: null, volc: 'ur' },
  { name: '马拉地语', value: 'mr', baidu: null, volc: 'mr' },
  
  // 中东语言
  { name: '阿拉伯语', value: 'ar', baidu: 'ara', volc: 'ar' },
  { name: '希伯来语', value: 'he', baidu: null, volc: 'he' },
  { name: '波斯语', value: 'fa', baidu: null, volc: 'fa' },
  
  // 其他语言
  { name: '阿非利堪斯语', value: 'af', baidu: null, volc: 'af' },
  { name: '加泰罗尼亚语', value: 'ca', baidu: null, volc: 'ca' },
  { name: '加利西亚语', value: 'gl', baidu: null, volc: 'gl' },
  { name: '塔加洛语', value: 'tl', baidu: null, volc: 'tl' },
  { name: '斯瓦希里语', value: 'sw', baidu: null, volc: 'sw' },
  { name: '威尔士语', value: 'cy', baidu: null, volc: 'cy' },
  { name: '蒙古语', value: 'Mongolian', baidu: null, volc: null },
];

// 语言代码转换函数
export const convertLanguageCode = (code: string, target: 'baidu' | 'volc') => {
  const lang = supportedLanguage.find(lang => lang.value === code);
  if (!lang) return code;
  return lang[target] || code;
};

export const openUrl = (url) => {
  window?.ipc?.send('openUrl', url);
};

export const gitCloneSteps = {
  'Compressing objects': '打包文件',
  'Receiving objects': '下载文件',
  'Resolving deltas': '解压文件',
  'Updating workdir': '更新文件',
};

export const isSubtitleFile = (filePath) => {
  return (
    filePath?.endsWith('.srt') ||
    filePath?.endsWith('.ass') ||
    filePath?.endsWith('.ssa') ||
    filePath?.endsWith('.vtt')
  );
};

export const getModelDownloadUrl = (modelName: string, source: 'hf-mirror' | 'huggingface') => {
  const domain = source === 'hf-mirror' ? 'hf-mirror.com' : 'huggingface.co';
  return `https://${domain}/ggerganov/whisper.cpp/resolve/main/ggml-${modelName.toLowerCase()}.bin?download=true`;
};

// 添加支持的文件扩展名常量
export const SUPPORTED_FILE_EXTENSIONS = [
  // 视频格式
  'mp4', 'avi', 'mov', 'mkv', 'flv', 'wmv', 'webm',
  // 音频格式
  'mp3', 'wav', 'ogg', 'aac', 'wma', 'flac', 'm4a',
  'aiff', 'ape', 'opus', 'ac3', 'amr', 'au', 'mid',
  // 其他常见格式
  '3gp', 'asf', 'rm', 'rmvb', 'vob', 'ts', 'mts', 'm2ts',
  // 字幕格式
  'srt', 'vtt', 'ass', 'ssa'
] as const;

// 添加文件过滤方法
export const filterSupportedFiles = (files: File[]) => {
  return Array.from(files).filter(file => {
    const ext = file.name.toLowerCase().split('.').pop();
    return SUPPORTED_FILE_EXTENSIONS.includes(ext as typeof SUPPORTED_FILE_EXTENSIONS[number]);
  });
};
