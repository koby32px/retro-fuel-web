// src/utils/api.ts
import { NFTMetadata } from '../types/nft';
import { getImagePath } from './imagePath';
import nftMetadata from '/public/metadata/nft.json';  // Import the JSON file

export async function fetchSingleNFT(id: string): Promise<NFTMetadata | null> {
  try {
    // Find the NFT data from the JSON file
    const nftData = nftMetadata.find(nft => nft.id === id);
    
    if (!nftData) {
      throw new Error('NFT not found');
    }

    return {
      id: nftData.id,
      name: nftData.name,
      description: nftData.description,
      image: getImagePath(`/images/nfts/${id}.png`), // Use local image path
      attributes: nftData.attributes,
      symbol: nftData.symbol,
      external_url: nftData.external_url
    };
  } catch (error) {
    console.error('Error loading NFT metadata:', error);
    return null;
  }
}