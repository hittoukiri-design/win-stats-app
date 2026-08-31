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
const BlogArticlePage = lazy(() => import('@/components/pages/BlogArticlePage'));
const FAQPage = lazy(() => import('@/components/pages/FAQPage'));
const RedemptionArticlePage = lazy(() => import('@/components/pages/RedemptionArticlePage'));
const ImportantRedemptionInfoPage = lazy(() => import('@/components/pages/ImportantRedemptionInfoPage'));
const TroubleshootingCommonIssuesPage = lazy(() => import('@/components/pages/TroubleshootingCommonIssuesPage'));
const LoginPage = lazy(() => import('@/components/pages/LoginPage'));
const RegisterPage = lazy(() => import('@/components/pages/RegisterPage'));
const DownloadPage = lazy(() => import('@/components/pages/DownloadPage'));
const LegalInfoPage = lazy(() => import('@/components/pages/LegalInfoPage'));
const gamehubappPage = lazy(() => import('@/components/pages/gamehubappPage'));

const LoadingFallback = () => (
  <div className="min-h-screen bg-[#0a0a0c] text-white flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-zinc-400">Loading...</p>
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

const routes: any = [
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
        path: "blog/:slug",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <BlogArticlePage />
          </Suspense>
        ),
        routeMetadata: {
          pageIdentifier: 'blog-article',
        },
      },
      {
        path: "gamehubapp",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <gamehubappPage />
          </Suspense>
        ),
        routeMetadata: {
          pageIdentifier: 'gamehubapp',
        },
      },
      {
        path: "faqs",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <FAQPage />
          </Suspense>
        ),
        routeMetadata: {
          pageIdentifier: 'faqs',
        },
      },
      {
        path: "blog/redemption-article",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <RedemptionArticlePage />
          </Suspense>
        ),
        routeMetadata: {
          pageIdentifier: 'redemption-article',
        },
      },
      {
        path: "blog/important-redemption-info",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ImportantRedemptionInfoPage />
          </Suspense>
        ),
        routeMetadata: {
          pageIdentifier: 'important-redemption-info',
        },
      },
      {
        path: "blog/troubleshooting-common-issues",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <TroubleshootingCommonIssuesPage />
          </Suspense>
        ),
        routeMetadata: {
          pageIdentifier: 'troubleshooting-common-issues',
        },
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <RegisterPage />
          </Suspense>
        ),
        routeMetadata: {
          pageIdentifier: 'register',
        },
      },
      {
        path: "download",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <DownloadPage />
          </Suspense>
        ),
        routeMetadata: {
          pageIdentifier: 'download',
        },
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <LoginPage />
          </Suspense>
        ),
        routeMetadata: {
          pageIdentifier: 'login',
        },
      },
      {
        path: "promotions",
        element: <Navigate to="/bonuses" replace />,
      },
      {
        path: "category/:slug",
        element: <Navigate to="/games" replace />,
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <LegalInfoPage />
          </Suspense>
        ),
      },
      {
        path: "privacy-policy",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <LegalInfoPage />
          </Suspense>
        ),
      },
      {
        path: "terms-and-conditions",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <LegalInfoPage />
          </Suspense>
        ),
      },
      {
        path: "responsible-gaming",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <LegalInfoPage />
          </Suspense>
        ),
      },
      {
        path: "disclaimer",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <LegalInfoPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
