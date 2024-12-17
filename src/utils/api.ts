// src/utils/api.ts
import { NFTMetadata } from '../types/nft';
import { getImagePath } from './imagePath';
import nftsMetadata from '../config/nftsMetadata';

export async function fetchSingleNFT(id: string): Promise<NFTMetadata | null> {
  try {
    const numericId = parseInt(id);
    const nftData = nftsMetadata[numericId - 1]; // Arrays are 0-based

    if (!nftData) {
      return null;
    }

    return {
      ...nftData,
      image: getImagePath(`/images/nfts/${id}.png`),
      symbol: nftData.symbol || "KOBY",
      external_url: nftData.external_url || "https://github.com/koby32px"
    };
  } catch (error) {
    console.error('Error loading NFT metadata:', error);
    return null;
  }
}