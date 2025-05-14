// app/sidebar/Sidebar.js
import Link from 'next/link';
import React from 'react';
import Profile from './components/Profile';
import { Ui } from '@dd-apps/ui';

const Sidebar = () => {
  const routers = [
    {
      name: 'My Borrow',
      href: '/my-borrow',
    },
    {
      name: 'My Lend',
      href: '/my-lend',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <div className="sidebar w-[200px] h-full bg-[var(--dd-page-bg-2)]">
      <Profile />
      <Ui />
      <ul className="px-[16px]">
        {routers.map((router) => (
          <li
            key={router.name}
            className="text-[var(--dd-text-color-2)] h-[40px] flex items-center
            hover:bg-[var(--dd-line-bg-1)] rounded-[4px]
            hover:text-[var(--dd-color-primary)]
            px-[6px]
            "
          >
            <Link href={router.href}>{router.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
