import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';

const Home = lazy(() => import('./pages/Home'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const BlogDetail = lazy(() => import('./components/blog/BlogDetail'));
const Resume = lazy(() => import('./pages/Resume'));

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-950">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
  </div>
);

function App() {
  return (
    <main className="font-sans">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Suspense>
      <SpeedInsights />
    </main>
  );
}

export default App;
