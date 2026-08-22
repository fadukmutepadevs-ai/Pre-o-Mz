export type CategoryId = 
  | 'todos'
  | 'smartphones'
  | 'computadores'
  | 'internet'
  | 'eletrodomesticos'
  | 'alimentacao'
  | 'carros'
  | 'servicos';

export interface CategoryOption {
  id: CategoryId;
  label: string;
  emoji: string;
  description: string;
}

export interface PriceItem {
  id: string;
  title: string;
  category: CategoryId;
  categoryLabel: string;
  emoji: string;
  priceDisplay: string;
  minPrice: number;
  maxPrice: number;
  unit?: string;
  description: string;
  updatedDate: string;
  location: string;
  isFeatured?: boolean;
  tips?: string;
  imageUrl?: string;
  tags: string[];
}
