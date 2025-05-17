// components/RouteProgress.tsx
'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function RouteProgress() {
  const pathname = usePathname();
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 页面开始加载时启动进度条
    NProgress.start();

    // 页面加载完成时结束进度条
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      NProgress.done();
    }, 300); // 延迟结束，防止快速闪烁

    return () => {
      if (timer.current) clearTimeout(timer.current);
      NProgress.done();
    };
  }, [pathname]);

  return null;
}
