/** @format */

import { faker } from "@faker-js/faker";
import { IUser } from "../interfaces";

let mockListUser: IUser[] = [];

export const createListUserFacker = () => {
  return {
    id: faker.random.alphaNumeric(10),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    address: faker.address.streetAddress(),
    phoneNumber: faker.phone.number,
  };
};
console.log(createListUserFacker);
