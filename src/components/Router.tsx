import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('@/components/pages/HomePage'));
const GamesPage = lazy(() => import('@/components/pages/GamesPage'));
const HowToPlayPage = lazy(() => import('@/components/pages/HowToPlayPage'));
const BonusesPage = lazy(() => import('@/components/pages/BonusesPage'));
const ContactPage = lazy(() => import('@/components/pages/ContactPage'));
const BlogPage = lazy(() => import('@/components/pages/BlogPage'));
const WithdrawalArticlePage = lazy(() => import('@/components/pages/WithdrawalArticlePage'));

const LoadingFallback = () => (
  <div className="min-h-screen bg-[#0a0a0c] text-white flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-zinc-400">Loading...</p>
    </div>
  </div>
);

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
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <HomePage />
          </Suspense>
        ),
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "games",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <GamesPage />
          </Suspense>
        ),
        routeMetadata: {
          pageIdentifier: 'games',
        },
      },
      {
        path: "how-to-play",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <HowToPlayPage />
          </Suspense>
        ),
        routeMetadata: {
          pageIdentifier: 'how-to-play',
        },
      },
      {
        path: "bonuses",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <BonusesPage />
          </Suspense>
        ),
        routeMetadata: {
          pageIdentifier: 'bonuses',
        },
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ContactPage />
          </Suspense>
        ),
        routeMetadata: {
          pageIdentifier: 'contact',
        },
      },
      {
        path: "blog",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <BlogPage />
          </Suspense>
        ),
        routeMetadata: {
          pageIdentifier: 'blog',
        },
      },
      {
        path: "blog/withdrawal-article",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <WithdrawalArticlePage />
          </Suspense>
        ),
        routeMetadata: {
          pageIdentifier: 'withdrawal-article',
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
