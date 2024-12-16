// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import NFTDetail from './pages/NFTDetail';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/nft/:id" element={<NFTDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;