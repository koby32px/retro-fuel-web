import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { NFTMetadata } from '../types/nft';
import { fetchNFTMetadata } from '../utils/api';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

// NFTCard Component
const NFTCard: React.FC<{ nft: NFTMetadata }> = ({ nft }) => (
  <Link 
    to={`/nft/${nft.id}`}
    className="bg-white rounded-lg overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform transition-all hover:scale-105 hover:shadow-2xl"
  >
    <div className="aspect-square bg-gray-100">
      <ImageWithSkeleton
        src={nft.image}
        alt={nft.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-2 sm:p-4">
      <h3 className="font-bold text-sm sm:text-lg">{nft.name}</h3>
      {nft.rarityRank !== undefined && (
        <p className="text-sm text-gray-500 mt-1">Rarity Rank: {nft.rarityRank}</p>
      )}
    </div>
  </Link>
);

// Main Collection Component
const Collection: React.FC = () => {
  const [nfts, setNfts] = useState<NFTMetadata[]>([]);
  const [displayedNfts, setDisplayedNfts] = useState<NFTMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 24;

  // Load all NFTs initially
  useEffect(() => {
    const loadAllNFTs = async () => {
      try {
        setLoading(true);
        const allData = await fetchNFTMetadata();
        setNfts(allData);
        setDisplayedNfts(allData.slice(0, itemsPerPage));
      } catch (err) {
        setError('Failed to load NFTs');
      } finally {
        setLoading(false);
        setInitialLoad(false);
      }
    };

    loadAllNFTs();
  }, []);

  // Filter NFTs
  const filteredNFTs = useMemo(() => {
    if (!searchTerm) return displayedNfts;
    
    return nfts.filter(nft => {
      const searchNumber = parseInt(searchTerm);
      if (!isNaN(searchNumber)) {
        return nft.id === searchNumber.toString();
      }
      return nft.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [nfts, searchTerm, displayedNfts]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleLoadMore = async () => {
    if (loadingMore) return;
    
    try {
      setLoadingMore(true);
      const nextPage = page + 1;
      const endIndex = nextPage * itemsPerPage;
      setDisplayedNfts(nfts.slice(0, endIndex));
      setPage(nextPage);
    } catch (err) {
      setError('Failed to load more NFTs');
    } finally {
      setLoadingMore(false);
    }
  };

  // Show loading state
  if (initialLoad && loading) {
    return (
      <div className="min-h-screen bg-green-500 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-pulse">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-green-500 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-red-500">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-lime-300 px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-transform"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const hasMore = !searchTerm && displayedNfts.length < nfts.length;
  return (
    <div className="w-full min-h-screen flex flex-col bg-green-500">
      {/* Header Section */}
      <section className="bg-green-600 p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          <div>
            <Link 
              to="/" 
              className="text-white/80 hover:text-white text-sm sm:text-base mb-2 inline-block hover:underline"
            >
              ← Home
            </Link>
            <h2 className="text-3xl sm:text-5xl font-pixel mb-2 sm:mb-4 text-white">Koby Collection</h2>
            <p className="text-lg sm:text-xl text-white/90 mb-4">3,200 Unique Pixel Art Characters</p>
            <a
              href="https://thundernft.market/collection/koby"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-lime-300 px-6 py-2 sm:px-8 sm:py-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-transform text-sm sm:text-base font-bold"
            >
              BUY ON THUNDER MARKETPLACE
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-grow p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Search */}
          <div className="bg-white p-3 sm:p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 sm:mb-8">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="Search by name or ID..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full p-2 sm:p-3 bg-gray-900 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300 text-sm sm:text-base"
                />
              </div>
            </div>
          </div>

          {/* NFT Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {filteredNFTs.map((nft) => (
              <NFTCard key={nft.id} nft={nft} />
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-8 sm:mt-12 mb-4 sm:mb-8">
              <button 
                onClick={handleLoadMore}
                disabled={loadingMore}
                className={`bg-lime-300 px-6 sm:px-8 py-2 sm:py-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-transform text-sm sm:text-base font-bold ${
                  loadingMore ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loadingMore ? (
                  <span className="flex items-center gap-2 justify-center">
                    <span>Loading</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce delay-200"></div>
                    </div>
                  </span>
                ) : (
                  `Load More (${displayedNfts.length} of ${nfts.length})`
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Collection;