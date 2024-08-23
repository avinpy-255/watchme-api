import jwt from "jsonwebtoken";
import verificationCodetype from "../constansts/verificationCodetype";
import SessionModel from "../models/seesion.model";
import userModel from "../models/user.model";
import VerificationCodeModel from "../models/verificationCode";
import { oneYearfromnow } from "../utils/oneYearfromnow";

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

  //verification of the user
  const verificationCode = await VerificationCodeModel.create({
    userId: createUser._id,
    type: verificationCodetype.EmailVerification,
    expiresAt: oneYearfromnow(),
  });

  //send verification email

  //create a seesion
  const session = await SessionModel.create({
    userId: createUser._id,
  });

  //signed token and the refresh token
  const refreshToken = jwt.sign();

  //return user & token
};
