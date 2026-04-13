import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import GamesPage from '@/components/pages/GamesPage';
import HowToPlayPage from '@/components/pages/HowToPlayPage';
import BonusesPage from '@/components/pages/BonusesPage';
import ContactPage from '@/components/pages/ContactPage';

// Placeholder pages for navigation links
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-[#0a0a0c] text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-zinc-400">This page is coming soon</p>
    </div>
  </div>
);

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
        path: "register",
        element: <PlaceholderPage title="Register" />,
      },
      {
        path: "download",
        element: <PlaceholderPage title="Download" />,
      },
      {
        path: "login",
        element: <PlaceholderPage title="Login" />,
      },
      {
        path: "promotions",
        element: <PlaceholderPage title="Promotions" />,
      },
      {
        path: "category/:slug",
        element: <PlaceholderPage title="Category" />,
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
