/** @format */

import { faker } from "@faker-js/faker";
import { IProduct } from "../interface";

const mockListProduct: IProduct[] = [];
export const createProductFaker = (): IProduct => {
  return {
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    price: faker.number.float(),
    rating: faker.number.float({ min: 1, max: 5 }),
    brand: faker.company.name(),
    category: faker.commerce.department(),
    thumbnail: faker.image.imageUrl(),
    userId: faker.string.uuid(),
  };
};

const listData = faker.helpers.multiple(createProductFaker, {
  count: 10,
});

export const createNewProduct = () => {
  const newProduct: IProduct = createProductFaker();
  mockListProduct.push(newProduct);
  return [...mockListProduct, listData];
};

export const getListProduct = () => {
  return [mockListProduct, ...listData];
};
