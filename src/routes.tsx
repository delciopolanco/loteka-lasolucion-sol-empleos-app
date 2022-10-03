import { InternalLayout, Loading, MainLayout } from '@components';
import { loadable } from 'react-lazily/loadable';
import { RouteObject } from 'react-router-dom';
import { PATHS } from '@shared';
import { Suspense } from 'react';

const loadingFallback = { fallback: <Loading /> };

const { WorkRequest, Candidates, Vacancies } = loadable(
  async () => await import('@pages'),
  loadingFallback
);

const routes: RouteObject[] = [
  {
    path: PATHS.home,
    element: (
      <Suspense fallback={<Loading />}>
        <InternalLayout />
      </Suspense>
    ),
    children: [
      {
        path: PATHS.candidates,
        element: (
          <Suspense fallback={<Loading />}>
            <Candidates />
          </Suspense>
        )
      },
      {
        path: PATHS.vacancies,
        element: (
          <Suspense fallback={<Loading />}>
            <Vacancies />
          </Suspense>
        )
      }
    ]
  },
  {
    path: PATHS.workRequest,
    element: <WorkRequest />
  },
  {
    path: `/*`,
    element: (
      <Suspense fallback={<Loading />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        path: `/*/`,
        element: (
          <Suspense fallback={<Loading />}>
            <WorkRequest />
          </Suspense>
        )
      },
      {
        path: `404`,
        element: (
          <Suspense fallback={<Loading />}>
            <WorkRequest />
          </Suspense>
        )
      },
      {
        path: `*`,
        element: (
          <Suspense fallback={<Loading />}>
            <WorkRequest />
          </Suspense>
        )
      }
    ]
  }
];

export default routes;
