import userModel from "../models/user.model";

export type createAccountParams = {
  email: string;
  password: string;
};

export const createAccount = async (data: createAccountParams) => {
  //verfiying the users
  const existingUser = await userModel.exists({
    email: data.email,
  });
  if (existingUser) {
    throw new Error("User already exists");
  }
  //creating a user
  const createUser = await userModel.create({
    email: data.email,
    password: data.password,
  });
};
