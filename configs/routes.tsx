import { lazy } from 'react';
import { Helmet } from 'react-helmet';
import { createBrowserRouter } from 'react-router-dom';

import { path } from '@/constants/path';
import MainPage from '@/layouts/MainPage/index';

const HomePage = lazy(() => import('@/pages/homepage'));
const NotFound = lazy(() => import('@/pages/not-found'));

export const router = createBrowserRouter([
  {
    path: path.HOMEPAGE,
    element: <MainPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: path.ABOUT,
        element: (
          <Helmet>
            <title>About Us | UpYouth Assessment Test</title>
          </Helmet>
        ),
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);
