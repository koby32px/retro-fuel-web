// src/utils/metadataLoader.ts
import { NFTMetadata } from '../types/nft';
import { getImagePath } from './imagePath';

export async function loadNFTMetadataChunk(page: number, itemsPerPage: number): Promise<NFTMetadata[]> {
  try {
    // Generate metadata for current chunk only
    const startId = (page - 1) * itemsPerPage + 1;
    const endId = startId + itemsPerPage;
    const chunk: NFTMetadata[] = [];

    for (let id = startId; id < endId; id++) {
      if (id <= 3200) { // Total collection size
        chunk.push({
          id: id.toString(),
          name: `Koby #${id}`,
          image: getImagePath(`images/nfts/koby-${id}.png`),
          description: `32x32 Pixel Unique NFT Collection - Koby #${id}`,
          attributes: [] // Add your attributes here if needed
        });
      }
    }

    return chunk;
  } catch (error) {
    console.error('Error loading NFT metadata chunk:', error);
    throw new Error('Failed to load NFT metadata');
  }
}