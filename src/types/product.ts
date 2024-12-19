export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount?: string;
  image: string;
  store: string;
  freeShipping?: boolean;
  description?: string;
  features?: string[];
  specifications?: Record<string, string>;
}