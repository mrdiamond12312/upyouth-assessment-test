import React from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="border-2 rounded-xl min-h-[calc(100vh-160px)] h-fit max-w-7xl w-11/12 mx-auto my-4">
        <Outlet />
        <div>Children route</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
