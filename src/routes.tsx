import { Loading } from '@components';
import { loadable } from 'react-lazily/loadable';
import { RouteObject } from 'react-router-dom';
import { PATHS } from '@shared';

const loadingFallback = { fallback: <Loading /> };

const { WorkRequest } = loadable(() => import('@pages'), loadingFallback);

const routes: RouteObject[] = [
  {
    path: PATHS.workRequest,
    element: <WorkRequest />
  },
  {
    path: `/*`,
    element: <WorkRequest />,
    children: [
      {
        path: `/*/`,
        element: <WorkRequest />
      },
      {
        path: `404`,
        element: <WorkRequest />
      },
      {
        path: `*`,
        element: <WorkRequest />
      }
    ]
  }
];

export default routes;
