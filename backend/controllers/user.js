import { config } from "dotenv";
config({ path: "D:/DataVisualization/backend/.env" });

import { VisualizationUser } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await VisualizationUser.findOne({ email });

    if (user)
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await VisualizationUser.create({ email, password: hashedPassword });

    sendCookie(user, res, "Registered Successfully", 201);
  } catch (error) {
    res.status(500).json(`failed to register ${error}`);
  }
};
