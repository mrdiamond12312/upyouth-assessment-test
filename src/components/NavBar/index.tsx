import { Button, Menu, MenuProps } from 'antd/lib';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { path } from '@/constants/path';

type MenuItem = Required<MenuProps>['items'][number];

const NavBar: React.FC = () => {
  const items: MenuItem[] = [
    {
      label: <Link to={path.HOMEPAGE}>Homepage</Link>,
      key: '/',
    },
    {
      label: <Link to={path.ABOUT}>Our team</Link>,
      key: '/our-team',
    },
  ];
  const { pathname } = useLocation();
  return (
    <div className="bg-neutral-1/50 backdrop-blur-md top-0 sticky flex flex-row justify-between items-center px-4 py-6 md:px-8 shadow-md z-30">
      <div className="flex flex-row gap-2 items-end">
        <img src="/brand-icon.png" className="w-5 md:w-[30px]" alt="brand-icon" />
        <img src="/brand-name.png" className="w-[69px] md:w-[100px]" alt="brand-icon" />
      </div>

      <nav className="flex flex-row items-center gap-4">
        <Menu
          items={items}
          mode="horizontal"
          disabledOverflow
          className="border-0 custom-menu bg-transparent"
          selectedKeys={[pathname]}
        />
        <Link to={'https://tally.so/r/mZzXpo'}>
          <Button
            type="primary"
            className="font-sans custom-button-primary text-body-2-semibold rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:scale-125 hover:!bg-gradient-to-r hover:from-blue-700 hover:to-blue-900 py-2 px-4"
            aria-label="Join UpYouth"
          >
            Join us now!
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
