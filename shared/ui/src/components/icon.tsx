import { Icon as Iconify } from '@iconify/react';
import dynamic from 'next/dynamic';
import React, { MouseEventHandler, Suspense } from 'react';

interface IconProps {
  icon: string; // 文件名，不带后缀，如 "home"
  width?: number | string;
  height?: number | string;
  color?: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  className?: string;
}

const DynamicIcon: React.FC<IconProps> = ({
  icon,
  width = 24,
  height = 24,
  color,
}) => {
  const SvgIcon = dynamic<React.SVGProps<SVGSVGElement>>(
    () => import(`../assets/svgs/${icon}.svg`),
    {
      loading: () => (
        <span
          className="inline-block"
          style={{ width: width, height: height }}
        />
      ),
    }
  );

  return (
    <Suspense
      fallback={
        <span
          className="inline-block"
          style={{ width: `${width}px`, height: `${height}px` }}
        />
      }
    >
      <SvgIcon width={width} height={height} fill={color} />
    </Suspense>
  );
};

export function Icon({
  icon,
  color = 'white',
  width = 24,
  height = 24,
  onClick,
  className,
}: IconProps): React.ReactNode {
  const isLocal = icon.startsWith('local-svg:');

  return (
    <div
      className={`w-[${width}px] h-[${height}px] inline-flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      {isLocal ? (
        <DynamicIcon
          icon={icon.replace('local-svg:', '')}
          width={width}
          height={height}
          color={color}
        />
      ) : (
        <Iconify icon={icon} color={color} width={width} height={height} />
      )}
    </div>
  );
}

export default Icon;
