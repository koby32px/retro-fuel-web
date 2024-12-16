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
      {/* Hero Section */}
      <section className="bg-green-600 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-lime-300 px-6 py-3 rounded-lg border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-y-1 transition-transform">
              <h1 className="text-2xl font-pixel font-mono text-black tracking-wider">RetroFuel</h1>
            </div>
          </div>
          <div className="max-w-2xl">
            <h2 className="text-5xl font-pixel mb-6 text-white leading-tight">Welcome to RetroFuel</h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              We bring retro aesthetics to life through unique digital collectibles. Our 
              pixel art collections are crafted with passion and nostalgia.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-green-500 flex-grow p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-pixel mb-6 text-black">About RetroFuel</h3>
              <p className="text-lg mb-8 text-gray-800 leading-relaxed">
                RetroFuel is more than just a creative studio. We're building a community 
                around the love for pixel art and retro aesthetics, starting with our 
                signature 32x32 pixel collections.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lime-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Each piece is crafted pixel by pixel with attention to detail</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lime-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Unique traits and variations make each character special</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-lime-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Join a growing community of pixel art enthusiasts</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={getImagePath('images/about-image.png')}
                  alt="RetroFuel"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Koby Preview Section - update preview images */}
            <section className="bg-green-600 py-16 px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-pixel mb-4 text-white">Introducing Koby</h3>
                  <p className="text-xl text-white/90">
                    Our first collection featuring 3,200 unique characters
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                    className="inline-flex items-center gap-2 bg-lime-300 px-8 py-3 rounded-lg border-2 border-black text-black font-pixel shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-transform"
                  >
                    Explore Koby Collection →
                  </Link>
                </div>
              </div>
            </section>
            {/* Footer */}
                <footer className="bg-green-700 py-8 px-6">
                  <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-center gap-6">
                      <div className="bg-lime-300 px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">
                        <h1 className="text-2xl font-pixel text-black tracking-wider">RetroFuel</h1>
                      </div>
                      
                      {/* Social Media Links */}
                      <div className="flex items-center gap-4">
                        <a 
                          href="https://twitter.com/retro_fuel"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white px-6 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-transform"
                        >
                          <span className="font-pixel">Follow us on X →</span>
                        </a>
                      </div>
          
                      <div className="text-white/90 text-center">
                        <p className="mb-2">Community of pixel art enthusiasts</p>
                        <p>© 2024 RetroFuel. All rights reserved.</p>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            );
          };
          
          export default Home;
