'use client';

import './style.scss';
import React from 'react';
import Profile from './components/Profile';
import Logo from './components/Logo';
import { Icon } from '@dd-apps/ui';
import useAppRoutes, { RouterItem } from '@/config/router';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const Sidebar = ({ open }: { open: boolean }) => {
  const { routers } = useAppRoutes();

  const pathName = usePathname();

  const router = useRouter();

  const logo = React.useMemo(() => {
    return <Logo />;
  }, []);

  const handleRouteItemClick = (item: RouterItem) => {
    if (item.href === pathName) {
      return;
    }
    router.push(item.href);
  };

  return (
    <div
      className="sidebar h-full bg-[var(--dd-page-bg-2)] box-border overflow-hidden pt-[10px] flex flex-col"
      style={{
        width: open ? '250px' : '64px',
        transition: 'width 0.2s ease-in-out',
      }}
    >
      <div className="px-[12px] py-[14px]">{logo}</div>

      <div className="h-[1px] w-full bg-[var(--dd-line-bg-2)]"></div>

      <div className="!w-100% flex-1 box-border">
        {routers.map((item) => (
          <div
            key={item.name}
            className={`router-item ${pathName === item.href ? 'active' : ''}`}
            onClick={() => handleRouteItemClick(item)}
          >
            <div className="w-[24px] h-[24px] flex items-center justify-center">
              <Icon
                icon={item.icon}
                width={item.size}
                height={item.size}
                color="inherit"
              />
            </div>
            <div
              className="flex-1 pl-[10px] min-w-[200px]"
              style={{
                opacity: open ? 1 : 0,
                overflow: 'hidden',
                transition: 'opacity 0.2s ease-in-out',
                boxSizing: 'border-box',
                color: 'inherit',
              }}
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>

      <div className="!px-[0px]">
        <Profile open={open} />
      </div>
    </div>
  );
};

export default Sidebar;
