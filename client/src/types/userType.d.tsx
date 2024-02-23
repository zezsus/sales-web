/** @format */

interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  address: string;
  phoneNumber: string;
}

interface IUserState {
  isLogin: boolean;
}
