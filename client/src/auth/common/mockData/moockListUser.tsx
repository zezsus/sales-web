/** @format */

import { faker } from "@faker-js/faker";
import { IUser } from "../interfaces";

const mockListUser: IUser[] = [];

export const createListUserFaker = (): IUser => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    address: faker.address.streetAddress(),
    phoneNumber: faker.phone.number(),
  };
};

export const createNewUser = () => {
  const newUser: any = createListUserFaker();
  mockListUser.push(newUser);
  return [...mockListUser];
};

export const getListUser = () => {
  return mockListUser;
};
