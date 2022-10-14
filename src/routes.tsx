import { InternalLayout, Loading, MainLayout } from '@components';
import { loadable } from 'react-lazily/loadable';
import { RouteObject } from 'react-router-dom';
import { PATHS, AuthGuard } from '@shared';
import { Suspense } from 'react';

const loadingFallback = { fallback: <Loading /> };

const { WorkRequest, Candidates, Users, CreateUser, Login } = loadable(
  async () => await import('@pages'),
  loadingFallback
);

const routes: RouteObject[] = [
  {
    path: PATHS.login,
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    )
  },
  {
    path: PATHS.home,
    element: (
      <Suspense fallback={<Loading />}>
        <AuthGuard>
          <InternalLayout />
        </AuthGuard>
      </Suspense>
    ),
    children: [
      {
        path: PATHS.home,
        element: (
          <Suspense fallback={<Loading />}>
            <Candidates />
          </Suspense>
        )
      },
      {
        path: PATHS.candidates,
        element: (
          <Suspense fallback={<Loading />}>
            <Candidates />
          </Suspense>
        )
      },
      {
        path: PATHS.users(),
        children: [
          {
            path: PATHS.users(),
            element: (
              <Suspense fallback={<Loading />}>
                <Users />
              </Suspense>
            )
          },
          {
            path: PATHS.usersCreate(),
            element: (
              <Suspense fallback={<Loading />}>
                <CreateUser />
              </Suspense>
            )
          }
        ]
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
