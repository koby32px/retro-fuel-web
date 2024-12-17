// src/utils/api.ts
import { NFTMetadata } from '../types/nft';
import { getImagePath } from './imagePath';

export async function fetchSingleNFT(id: string): Promise<NFTMetadata | null> {
  try {
    // Use the same image path pattern that works in the collection view
    const imageUrl = getImagePath(`/images/nfts/${id}.png`);
    
    return {
      id,
      name: `Koby #${id}`,
      image: imageUrl,
      description: `32x32 Pixel Unique NFT Collection - Koby #${id}`,
      attributes: [
        { trait_type: 'Base', value: 'Purple' },
        { trait_type: 'Suit', value: 'Scarf Stripped Yellow' },
        { trait_type: 'Mouth', value: 'Flat' },
        { trait_type: 'Eyes', value: 'Round Glass green' },
        { trait_type: 'Head', value: 'Beret Blue' }
      ]
    };
  } catch (error) {
    console.error('Error loading NFT metadata:', error);
    return null;
  }
}