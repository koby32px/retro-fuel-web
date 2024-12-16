export interface NFT {
  id: number;
  name: string;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  variant: string;
  image?: string;
}
