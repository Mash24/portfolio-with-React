import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogDetail from './components/blog/BlogDetail';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <main className="font-sans">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
        <SpeedInsights />
      </>
    </main>
  );
}

export default App;
