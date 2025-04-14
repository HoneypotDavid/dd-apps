import React from 'react';
import Sidebar from '@/components/Sidebar/index';
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="main-layout flex w-full h-[100vh]">
      <Sidebar />
      <div className="main-layout-content flex-1 h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
