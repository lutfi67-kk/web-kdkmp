/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TastingNotes {
  acidity: number; // 1-10
  sweetness: number; // 1-10
  body: number; // 1-10
  aroma: string[];
  flavors: string[];
}

export interface CoffeeProduct {
  id: string;
  name: string;
  tagline: string;
  origin: string;
  elevation: string;
  process: string;
  variety: string[];
  description: string;
  roastLevel: 'Light' | 'Medium' | 'Medium-Dark' | 'Dark';
  grindSizes: string[];
  weights: number[]; // in grams
  pricePer100g: number; // in IDR
  tastingNotes: TastingNotes;
  usp: string[];
  imageSrc: string;
}

export interface StorySection {
  id: string;
  chapter: string;
  title: string;
  content: string[];
  quote?: string;
  quoteAuthor?: string;
}

export interface LogoElement {
  icon: string;
  title: string;
  philosophy: string;
  colorHex: string;
  colorName: string;
  colorMeaning: string;
}

export interface AssistantMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
