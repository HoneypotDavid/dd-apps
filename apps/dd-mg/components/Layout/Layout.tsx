'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/Layout/Sidebar/index';
import { Icon } from '@dd-shared/components';
import { PermissionProvider } from '@/provider/permission';
export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="main-layout flex w-full h-[100vh]">
      <Sidebar open={isOpen} />
      <div className="main-layout-content flex-1 h-full bg-[var(--dd-page-bg-1)] flex flex-col">
        <div className="h-[40px] bg-[var(--dd-page-bg-2)] flex items-center justify-start">
          <Icon
            icon={
              isOpen
                ? 'ant-design:menu-fold-outlined'
                : 'ant-design:menu-unfold-outlined'
            }
            color="var(--dd-text-color-1)"
            width={22}
            height={22}
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer"
          />
        </div>
        <div className="main-content flex-1 overflow-y-auto scrollbar">
          <PermissionProvider>{children}</PermissionProvider>
        </div>
      </div>
    </div>
  );
}
