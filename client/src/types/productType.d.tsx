/** @format */

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

interface IProductState {
  numberItem: number;
  buyItem: any;
  listCartItem: any;
}
