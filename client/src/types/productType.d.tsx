/** @format */

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number | null;
  rating: number | null;
  brand: string;
  category: string;
  thumbnail: string;
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

interface IMyProductState {
  myShopProduct: Array<IProduct>;
  editMyProduct: Array<IProduct>;
  deleteMyProductId: number;
  isShowAddMyProduct: boolean;
  isShowEditMyProduct: boolean;
  isShowDeleteMyProduct: boolean;
}
