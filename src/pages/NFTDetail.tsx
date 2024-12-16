// src/pages/NFTDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { NFTMetadata } from '../types/nft';
import { fetchSingleNFT } from '../utils/api';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import { getImagePath } from '../utils/imagePath';

const NFTDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [nft, setNft] = useState<NFTMetadata | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNFT = async () => {
      if (id) {
        setLoading(true);
        const data = await fetchSingleNFT(id);
        setNft({
          ...data,
          // Update the image path here
          image: getImagePath(`/images/nfts/${id}.png`)
        });
        setLoading(false);
      }
    };
    loadNFT();
  }, [id]);

  if (loading) {
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

  if (!nft) {
    return (
      <div className="min-h-screen bg-green-500 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-red-500">NFT not found</p>
          <Link 
            to="/collection"
            className="mt-4 bg-lime-300 px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-transform inline-block"
          >
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-green-500">
      <div className="max-w-6xl mx-auto p-8">
        <Link 
          to="/collection"
          className="inline-block bg-lime-300 px-6 py-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-transform mb-8"
        >
          ← Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* NFT Image */}
          <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="aspect-square">
              <ImageWithSkeleton
                src={nft?.image || ''}
                alt={nft?.name || ''}
                className="w-full rounded-lg"
              />
            </div>
          </div>
  
            {/* NFT Details */}
            <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h1 className="text-3xl font-bold mb-4">{nft.name}</h1>
              <p className="text-gray-600 mb-6">{nft.description}</p>
  
              <div className="space-y-6">
                {/* Basic Details */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Details</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-500">Token ID</span>
                      <span className="font-medium">#{nft.id}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-500">Collection</span>
                      <span className="font-medium">Koby Collection</span>
                    </div>
                  </div>
                </div>
  
                {/* Attributes/Traits */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Attributes</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {nft.attributes?.map((attr, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg ${
                          attr.trait_type === 'Base' ? 'bg-purple-100' :
                          attr.trait_type === 'Suit' ? 'bg-blue-100' :
                          attr.trait_type === 'Mouth' ? 'bg-green-100' :
                          attr.trait_type === 'Eyes' ? 'bg-yellow-100' :
                          attr.trait_type === 'Head' ? 'bg-red-100' :
                          'bg-gray-100'
                        } border-2 border-black`}
                      >
                        <div className="text-sm text-gray-500 mb-1">{attr.trait_type}</div>
                        <div className="font-medium">{attr.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NFTDetail;