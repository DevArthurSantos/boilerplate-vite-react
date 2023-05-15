import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const HomePage = lazy(() => import('@pages/home'));

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/home', element: <HomePage /> },
];

const router = createBrowserRouter(routes);

function Routers() {
  return (
      <RouterProvider router={router} />
  );
}

export default Routers;