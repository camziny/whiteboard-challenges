import express from "express";
import { createUser } from "../controllers/user.controller";
import { loginUser } from "../controllers/user.controller";

const userRoutes = express.Router();

userRoutes.route("/create").post(createUser);
userRoutes.route("/login").post(loginUser);

export default userRoutes;
