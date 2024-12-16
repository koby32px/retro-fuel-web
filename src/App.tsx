// src/App.tsx
import { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';  // Add Routes and Route here
import './styles/globals.css';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Collection = lazy(() => import('./pages/Collection'));
const NFTDetail = lazy(() => import('./pages/NFTDetail'));

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen">
        <Suspense fallback={
          <div className="min-h-screen bg-green-500 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/nft/:id" element={<NFTDetail />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;