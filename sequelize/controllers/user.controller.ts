// controllers/user.controller.ts
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import User from "../models/user.model";
import { IUser } from "../types";
import "dotenv/config";

const getUserToken = (_id: string) => {
  const authenticatedUserToken = jwt.sign(
    { _id },
    process.env.SECRET_KEY as Secret,
    {
      expiresIn: "7d",
    }
  );
  return authenticatedUserToken;
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, occupation, profile_image }: IUser =
      req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).send("User already exists");
    }

    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      occupation,
      profile_image,
    });

    return res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.error("Error in createUser:", error);
    return res.status(500).send("Internal Server Error");
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password }: IUser = req.body;
    const existingUser = await User.findOne({ where: { email } });

    if (!existingUser) {
      return res.status(409).send({ message: "User does not exist" });
    }

    const isPasswordIdentical = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (isPasswordIdentical) {
      const token = getUserToken(existingUser._id);
      return res.send({
        token,
        user: {
          email: existingUser.email,
          name: existingUser.name,
          occupation: existingUser.occupation,
          profile_image: existingUser.profile_image,
        },
      });
    } else {
      return res.status(400).send({ message: "Incorrect credentials" });
    }
  } catch (error) {
    console.error("Error in loginUser:", error);
    return res.status(500).send("Internal Server Error");
  }
};
