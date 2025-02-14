import express from "express";
import jwt from "jsonwebtoken";
import { Users } from "../../../db/models/Users.js";

export const userRoutes = express.Router();

userRoutes.post("/register", async (req, res) => {
  try {
    const {password, email} = req.body;

    const user = await Users.register({email, password});

    res.send(token);

  } catch (e) {
    res.send(e.message);
  }
});

userRoutes.post("/login", async (req, res) => {
  const { password, email } = req.body;
  try {
    const token = await Users.login ({email, password});
    res.send (token);

    catch (e) {}
  }

  const user = await Users.findOne({ email });

  user.password = password;

  console.log(user);

  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);

  res.send(token);
});

userRoutes.get("/profile", async (req, res) => {});
