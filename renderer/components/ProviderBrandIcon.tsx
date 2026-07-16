import React from 'react';
import { Plug } from 'lucide-react';
import { cn } from 'lib/utils';

/**
 * 服务商品牌图标（云端听写 / 配音服务列表共用）：logo 统一放白色圆角底上
 * （对齐翻译服务商列表的 ProviderIcon 约定），保证深色模式与选中态下清晰
 * 可见、且各平台渲染一致；无 logo 回落 emoji，自定义/孤儿条目（无 icon
 * 定义）回落通用插头图标。
 */
const ProviderBrandIcon: React.FC<{
  icon?: string;
  iconImg?: string;
  className?: string;
}> = ({ icon, iconImg, className }) => (
  <span
    className={cn(
      'flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-white ring-1 ring-black/[0.08] dark:ring-white/20',
      className,
    )}
  >
    {iconImg ? (
      <img src={iconImg} alt="" className="h-4 w-4 object-contain" />
    ) : icon ? (
      <span className="text-sm leading-none">{icon}</span>
    ) : (
      <Plug className="h-3.5 w-3.5 text-zinc-500" />
    )}
  </span>
);

export default ProviderBrandIcon;
