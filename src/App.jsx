import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogDetail from './components/blog/BlogDetail';

function App() {
  return (
    <main className="font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
    </main>
  );
}

export default App;
