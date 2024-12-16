import React from 'react';
import { Link } from 'react-router-dom';
import { NFTMetadata } from '../types/nft';

interface NFTCardProps {
  nft: NFTMetadata;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  // Convert IPFS URL to HTTP URL
  const imageUrl = nft.image.replace('ipfs://', 'https://w3s.link/ipfs/');

  return (
    <Link 
      to={`/nft/${nft.id}`}
      className="bg-white rounded-lg overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-transform"
    >
      <div className="aspect-square bg-gray-100">
        <img
          src={imageUrl}
          alt={nft.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{nft.name}</h3>
        <div className="flex flex-wrap gap-2">
          {nft.attributes.map((attr, index) => {
            let bgColor = 'bg-gray-100';
            let textColor = 'text-gray-800';

            // Color coding for different trait types
            switch(attr.trait_type) {
              case 'Base':
                bgColor = 'bg-purple-100';
                textColor = 'text-purple-800';
                break;
              case 'Suit':
                bgColor = 'bg-blue-100';
                textColor = 'text-blue-800';
                break;
              case 'Mouth':
                bgColor = 'bg-green-100';
                textColor = 'text-green-800';
                break;
              case 'Eyes':
                bgColor = 'bg-yellow-100';
                textColor = 'text-yellow-800';
                break;
              case 'Head':
                bgColor = 'bg-red-100';
                textColor = 'text-red-800';
                break;
            }

            return (
              <span 
                key={index} 
                className={`px-2 py-1 rounded-full text-sm ${bgColor} ${textColor}`}
              >
                {attr.value}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;