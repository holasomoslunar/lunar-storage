export interface Product {
  id: string;
  available: boolean;
  name: string;
  description: string | null;
  price: number;
  category: string;
  imageUrl: string;
}