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
    <div className="w-full min-h-screen flex flex-col bg-green-500">
      {/* Hero Section */}
      <section className="bg-green-400 p-4 sm:p-8 relative overflow-hidden">
        {/* Pixel Animation Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${getImagePath('images/pixel-grid.png')})`,
            backgroundSize: '32px 32px',
            animation: 'pixelMove 1s linear infinite',
            opacity: 0.2
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-pixel text-black mb-2 sm:mb-4">
              RetroFuel
            </h1>
            <h2 className="text-base sm:text-xl md:text-2xl text-black/90 max-w-2xl mx-auto leading-relaxed">
              Bringing retro aesthetics to life through unique digital collectibles
            </h2>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex-grow p-4 sm:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-pixel text-white mb-2 sm:mb-4">About RetroFuel</h3>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                We're building a community around the love for pixel art and retro aesthetics,
                starting with our signature 32x32 pixel collections.
              </p>
              <div className="space-y-2 sm:space-y-4">
                {[
                  'Each piece crafted pixel by pixel',
                  'Unique traits and variations',
                  'Join our pixel art community'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <p className="text-sm sm:text-base text-white/90">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-1 rounded-lg shadow-lg mt-8 md:mt-0">
              <img
                src={getImagePath('images/about-image.png')}
                alt="RetroFuel"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collection Preview */}
      <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 bg-green-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-pixel text-white mb-2 sm:mb-4">
              Introducing Koby
            </h3>
            <p className="text-base sm:text-xl text-white/90">
              Our first collection featuring 3,200 unique characters
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {previewImages.map((image, i) => (
              <div 
                key={i} 
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={image}
                  alt={`Koby Preview ${i + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/collection"
              className="inline-block bg-lime-300 px-6 sm:px-8 py-2 sm:py-3 rounded-lg border-2 border-black text-black font-pixel hover:bg-lime-400 transition-colors text-base sm:text-lg"
            >
              View Full Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 mt-auto bg-green-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-4 sm:gap-6 text-center">
            <h4 className="text-lg sm:text-xl font-pixel text-white">RetroFuel</h4>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://twitter.com/retro_fuel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black/20 px-3 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-black/30 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 1200 1227"
                  fill="none"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path
                    d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-sm sm:text-base text-white">Follow</span>
              </a>
            </div>
            <p className="text-xs sm:text-sm text-white/80">
              © {new Date().getFullYear()} RetroFuel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;