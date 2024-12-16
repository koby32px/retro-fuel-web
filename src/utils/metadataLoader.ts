// src/utils/metadataLoader.ts
import { NFTMetadata } from '../types/nft';

export async function loadNFTMetadataChunk(page: number, itemsPerPage: number): Promise<NFTMetadata[]> {
  try {
    // Dynamically import the metadata
    const { nftsMetadata } = await import('../config/nftsMetadata');
    const start = (page - 1) * itemsPerPage;
    return nftsMetadata.slice(start, start + itemsPerPage);
  } catch (error) {
    console.error('Error loading NFT metadata chunk:', error);
    throw new Error('Failed to load NFT metadata');
  }
}