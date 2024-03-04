/** @format */

export interface IUserProfileState {
  isUpdateUser: boolean;
  isChangePassword: boolean;
}

export interface INewDataUser {
  email: string;
  password: string;
  newPassword: string;
}
