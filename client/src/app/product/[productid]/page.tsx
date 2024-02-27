/** @format */
"use client";

import ProductDetailComponent from "@/products/productdetail/components/productdetail.component";

const ProductDetailPage = ({ params }: { params: { productid: number } }) => {
  return <ProductDetailComponent idProduct={params.productid} />;
};

export default ProductDetailPage;
