export interface Product {
  id: string;
  available: boolean;
  name: string;
  description: string | null;
  price: number;
  disabled: boolean;
  category: string;
  imageUrl: string;
}