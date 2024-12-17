// src/utils/metadataLoader.ts
import { NFTMetadata } from '../types/nft';
import { getImagePath } from './imagePath';
import nftsMetadata from '../config/nftsMetadata';

export async function loadNFTMetadataChunk(page: number, itemsPerPage: number): Promise<NFTMetadata[]> {
  try {
    const startId = (page - 1) * itemsPerPage + 1;
    const endId = startId + itemsPerPage;
    const chunk: NFTMetadata[] = [];

    for (let id = startId; id < endId; id++) {
      if (id <= 3200) {
        const metadata = nftsMetadata[id - 1]; // Arrays are 0-based
        if (metadata) {
          chunk.push({
            ...metadata,
            image: getImagePath(`/images/nfts/${id}.png`),
            symbol: metadata.symbol || "KOBY",
            external_url: metadata.external_url || "https://github.com/koby32px"
          });
        }
      }
    }

    return chunk;
  } catch (error) {
    console.error('Error loading NFT metadata chunk:', error);
    throw new Error('Failed to load NFT metadata');
  }
}