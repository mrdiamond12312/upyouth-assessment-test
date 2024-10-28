import { Button, Menu, MenuProps } from 'antd/lib';
import React from 'react';

type MenuItem = Required<MenuProps>['items'][number];

const NavBar: React.FC = () => {
  const items: MenuItem[] = [
    {
      label: 'Homepage',
      key: 'homepage',
    },
    {
      label: 'Our Team',
      key: 'our-team',
    },
  ];
  return (
    <div className="bg-neutral-1/50 backdrop-blur-md top-0 sticky flex flex-row justify-between items-center px-4 py-6 md:px-8 shadow-md z-30">
      <div className="flex flex-row gap-2 items-end">
        <img src="/brand-icon.png" className="w-5 md:w-[30px]" />
        <img src="/brand-name.png" className="w-[69px] md:w-[100px]" />
      </div>

      <nav className="flex flex-row items-center gap-4">
        <Menu
          items={items}
          mode="horizontal"
          disabledOverflow
          className="border-0 custom-menu bg-transparent"
          selectedKeys={['homepage']}
        />
        <Button
          type="primary"
          className="font-sans custom-button-primary text-body-2-semibold rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:scale-125 hover:!bg-gradient-to-r hover:from-blue-700 hover:to-blue-900 py-2 px-4"
        >
          Join us now!
        </Button>
      </nav>
    </div>
  );
};

export default NavBar;
