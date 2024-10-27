import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { path } from '@/constants/path';
import NavBar from '@/layouts/Navbar/index';

const NotFound = lazy(() => import('@/pages/not-found'));

export const router = createBrowserRouter([
  {
    path: path.HOMEPAGE,
    element: <NavBar />,
    children: [
      // {
      //   path: path.HOMEPAGE,
      //   element: <Navigate replace to={(path)} />,
      // },
      // {
      //   path: (path),
      //   lazy: () => lazyRouteImport("pages/TermsOfUse"),
      // },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);
