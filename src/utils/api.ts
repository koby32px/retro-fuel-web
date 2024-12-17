// src/utils/api.ts
import { NFTMetadata } from '../types/nft';
import { getImagePath } from './imagePath';
import nftsMetadata from '../config/nftsMetadata';

// Add this function for fetching all NFT metadata
export async function fetchNFTMetadata(): Promise<NFTMetadata[]> {
  try {
    return nftsMetadata.map((nft, index) => ({
      ...nft,
      image: getImagePath(`/images/nfts/${index + 1}.png`),
      symbol: nft.symbol || "KOBY",
      external_url: nft.external_url || "https://github.com/koby32px"
    }));
  } catch (error) {
    console.error('Error loading NFT metadata:', error);
    return [];
  }
}

export async function fetchSingleNFT(id: string): Promise<NFTMetadata | null> {
  try {
    const nftData = nftsMetadata[parseInt(id) - 1]; // Arrays are 0-based

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