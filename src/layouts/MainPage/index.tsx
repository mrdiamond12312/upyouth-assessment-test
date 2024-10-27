import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Loading from '@/loading';

const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      <Footer />
    </div>
  );
};

export default MainPage;
