'use client';

import React from 'react';
import Profile from './components/Profile';
import Logo from './components/Logo';

import { Icon } from '@dd-apps/ui';

const Sidebar = ({ open }: { open: boolean }) => {
  const routers = [
    {
      name: 'Guild Hall',
      href: '/guild-hall',
      icon: 'map:city-hall',
    },
    {
      name: 'My Tasks',
      href: '/my-tasks',
      icon: 'fluent:task-list-square-sparkle-16-regular',
    },
    {
      name: 'Publish Task',
      href: '/publish-task',
      icon: 'material-symbols:post-add',
    },
  ];

  const logo = React.useMemo(() => {
    return <Logo />;
  }, []);

  return (
    <div
      className="sidebar h-full bg-[var(--dd-page-bg-2)] box-border overflow-hidden pt-[10px] flex flex-col"
      style={{
        width: open ? '250px' : '64px',
        transition: 'width 0.2s ease-in-out',
      }}
    >
      <div className="px-[14px] py-[14px]">{logo}</div>

      <div className="h-[1px] w-full bg-[var(--dd-line-bg-2)]"></div>

      <div className="!w-100% flex-1 box-border">
        {routers.map((router) => (
          <div
            key={router.name}
            className="w-100%  cursor-pointer h-[40px] pl-[20px] flex items-center box-border hover:!bg-[var(--dd-line-bg-1)] rounded-[4px] hover:!text-[var(--dd-color-primary)] text-[var(--dd-text-color-2)] mt-[10px]"
          >
            <div className="w-[24px] h-[24px] flex items-center justify-center">
              <Icon icon={router.icon} width="24" height="24" color="inherit" />
            </div>
            <div
              className="flex-1 text-[var(--dd-text-color-2)] pl-[10px]"
              style={{
                opacity: open ? 1 : 0,
                overflow: 'hidden',
                transition: 'opacity 0.2s ease-in-out',
                boxSizing: 'border-box',
                color: 'inherit',
              }}
            >
              {router.name}
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
