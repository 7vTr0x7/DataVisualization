import { config } from "dotenv";
config({ path: "D:/DataVisualization/backend/.env" });

import { VisualizationUser } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await VisualizationUser.findOne({ email });

    if (user)
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });

    const hashedPassword = bcrypt.hash(password, 10);

    user = await VisualizationUser.create({ email, hashedPassword });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      })
      .json({ success: true, message: "Registered Successfully" });
  } catch (error) {
    res.status(500).json(`failed to register ${error}`);
  }
};
