// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePath } from '../utils/imagePath';

const Home: React.FC = () => {
  const previewImages = [
    getImagePath('images/preview-1.png'),
    getImagePath('images/preview-2.png'),
    getImagePath('images/preview-3.png')
  ];
  
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section - Improved responsiveness */}
      <section className="bg-green-600 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="bg-lime-300 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-y-1 transition-transform">
              <h1 className="text-xl sm:text-2xl font-pixel font-mono text-black tracking-wider">RetroFuel</h1>
            </div>
          </div>
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-pixel mb-4 sm:mb-6 text-white leading-tight">Welcome to RetroFuel</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 leading-relaxed">
              We bring retro aesthetics to life through unique digital collectibles. Our 
              pixel art collections are crafted with passion and nostalgia.
            </p>
          </div>
        </div>
      </section>

      {/* About Section - Improved responsiveness */}
      <section className="bg-green-500 flex-grow px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-pixel mb-4 sm:mb-6 text-black">About RetroFuel</h3>
              <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-800 leading-relaxed">
                RetroFuel is more than just a creative studio. We're building a community 
                around the love for pixel art and retro aesthetics, starting with our 
                signature 32x32 pixel collections.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lime-400 mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-700">Each piece is crafted pixel by pixel with attention to detail</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lime-400 mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-700">Unique traits and variations make each character special</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lime-400 mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-700">Join a growing community of pixel art enthusiasts</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mt-8 md:mt-0">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={getImagePath('images/about-image.png')}
                  alt="RetroFuel"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Koby Preview Section - Improved responsiveness */}
      <section className="bg-green-600 px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-3xl sm:text-4xl font-pixel mb-3 sm:mb-4 text-white">Introducing Koby</h3>
            <p className="text-lg sm:text-xl text-white/90">
              Our first collection featuring 3,200 unique characters
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {previewImages.map((image, i) => (
              <div 
                key={i} 
                className="bg-white rounded-lg overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-transform"
              >
                <div className="aspect-square bg-gray-100">
                  <img
                    src={image}
                    alt={`Koby Preview ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/collection"
              className="inline-flex items-center gap-2 bg-lime-300 px-6 sm:px-8 py-2 sm:py-3 rounded-lg border-2 border-black text-black font-pixel shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-transform text-sm sm:text-base"
            >
              Explore Koby Collection →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Improved responsiveness */}
      <footer className="bg-green-700 px-4 sm:px-6 md:px-8 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <div className="bg-lime-300 px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">
              <h1 className="text-xl sm:text-2xl font-pixel text-black tracking-wider">RetroFuel</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://twitter.com/retro_fuel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white px-4 sm:px-6 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-transform"
              >
                <span className="font-pixel text-sm sm:text-base">Follow us on X →</span>
              </a>
            </div>

            <div className="text-white/90 text-center">
              <p className="text-sm sm:text-base mb-2">Community of pixel art enthusiasts</p>
              <p className="text-sm sm:text-base">© 2024 RetroFuel. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;