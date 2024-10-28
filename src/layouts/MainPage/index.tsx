import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Loading from '@/loading';

const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="min-h-[calc(100vh-258px)]">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
