// src/utils/metadataLoader.ts
import { NFTMetadata } from '../types/nft';
import { getImagePath } from './imagePath';

export async function loadNFTMetadataChunk(page: number, itemsPerPage: number): Promise<NFTMetadata[]> {
  try {
    const startId = (page - 1) * itemsPerPage + 1;
    const endId = startId + itemsPerPage;
    const chunk: NFTMetadata[] = [];

    for (let id = startId; id < endId; id++) {
      if (id <= 3200) {
        // Add default values for missing properties
        chunk.push({
          id: id.toString(),
          name: `Koby #${id}`,
          symbol: "KOBY", // Default symbol
          description: `32x32 Pixel Unique NFT Collection - Koby #${id}`,
          image: getImagePath(`/images/nfts/${id}.png`),
          external_url: "https://github.com/koby32px", // Default external_url
          attributes: [
            // Your existing attributes here
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

export async function fetchSingleNFT(id: string): Promise<NFTMetadata | null> {
  try {
    const numericId = parseInt(id);
    const baseData = await import('../config/nftsMetadata.ts');
    const nftData = baseData.default.find(nft => nft.id === id);

    if (!nftData) {
      throw new Error('NFT not found');
    }

    // Add default values if they're missing
    return {
      ...nftData,
      symbol: nftData.symbol || "KOBY",
      external_url: nftData.external_url || "https://github.com/koby32px",
      image: getImagePath(`/images/nfts/${id}.png`)
    };
  } catch (error) {
    console.error('Error loading NFT metadata:', error);
    return null;
  }
}