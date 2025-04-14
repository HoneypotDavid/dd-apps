// app/sidebar/Sidebar.js
import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar w-[200px] h-full bg-gray-100">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
