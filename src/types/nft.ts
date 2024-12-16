// src/types/nft.ts
export interface TraitOption {
 name: string;
 rarity: number;
}

export interface Trait {
 rarity: number;
 options: TraitOption[];
}

export interface Config {
 trait_order: string[];
 traits: {
   [key: string]: Trait;
 };
}

export interface NFTAttribute {
  trait_type: string;
  value: string;
}

export interface NFTMetadata {
  id: string;
  name: string;
  description: string;
  image: string;
  attributes?: NFTAttribute[];
}