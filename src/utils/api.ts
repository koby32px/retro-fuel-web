// src/utils/api.ts
import { NFTMetadata } from '../types/nft';
import { nftsMetadata } from '../config/nftsMetadata';

export async function fetchNFTMetadata(): Promise<NFTMetadata[]> {
  try {
    return nftsMetadata;
  } catch (error) {
    console.error('Error loading NFT metadata:', error);
    return [];
  }
}

export async function fetchSingleNFT(id: string): Promise<NFTMetadata | null> {
  try {
    return nftsMetadata.find(nft => nft.id === id) || null;
  } catch (error) {
    console.error('Error fetching single NFT:', error);
    return null;
  }
}