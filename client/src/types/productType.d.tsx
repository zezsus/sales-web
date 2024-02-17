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
  buyItem: Array<IProduct>;
  listCartItem: Array<IProduct>;
  isDeleteCartItem: boolean;
  deleteItemId: number;
  searchValue: any;
  resultSearch: any;
}

interface ISearchProductState {
  searchName: string;
  selectedType: string;
  selectedPrice: string;
}
