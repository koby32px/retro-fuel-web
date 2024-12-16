// src/utils/api.ts
import { NFTMetadata } from '../types/nft';
import { getNFTImagePath } from './imagePath';

export async function fetchSingleNFT(id: string): Promise<NFTMetadata> {
  try {
    return {
      id,
      name: `Koby #${id}`,
      image: getNFTImagePath(id),
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
    console.error('Error fetching single NFT:', error);
    throw new Error('Failed to fetch NFT');
  }
}