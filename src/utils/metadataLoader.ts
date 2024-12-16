// src/utils/metadataLoader.ts
import { NFTMetadata } from '../types/nft';

export async function loadNFTMetadataChunk(page: number, itemsPerPage: number): Promise<NFTMetadata[]> {
  try {
    const startId = (page - 1) * itemsPerPage + 1;
    const endId = startId + itemsPerPage;
    const chunk: NFTMetadata[] = [];

    for (let id = startId; id < endId; id++) {
      if (id <= 3200) {
        chunk.push({
          id: id.toString(),
          name: `Koby #${id}`,
          image: '', // We'll use the inline SVG from ImageWithSkeleton
          description: `32x32 Pixel Unique NFT Collection - Koby #${id}`,
          attributes: [
            { trait_type: 'Base', value: 'Purple' },
            { trait_type: 'Suit', value: 'Scarf Stripped Yellow' },
            { trait_type: 'Mouth', value: 'Flat' },
            { trait_type: 'Eyes', value: 'Round Glass green' },
            { trait_type: 'Head', value: 'Beret Blue' }
          ]
        });
      }
    }

    return chunk;
  } catch (error) {
    console.error('Error loading NFT metadata chunk:', error);
    throw new Error('Failed to load NFT metadata');
  }
}