import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import GamesPage from '@/components/pages/GamesPage';
import HowToPlayPage from '@/components/pages/HowToPlayPage';
import BonusesPage from '@/components/pages/BonusesPage';
import ContactPage from '@/components/pages/ContactPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "games",
        element: <GamesPage />,
        routeMetadata: {
          pageIdentifier: 'games',
        },
      },
      {
        path: "how-to-play",
        element: <HowToPlayPage />,
        routeMetadata: {
          pageIdentifier: 'how-to-play',
        },
      },
      {
        path: "bonuses",
        element: <BonusesPage />,
        routeMetadata: {
          pageIdentifier: 'bonuses',
        },
      },
      {
        path: "contact",
        element: <ContactPage />,
        routeMetadata: {
          pageIdentifier: 'contact',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
