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

export const login = async (req, res) => {
  const { email, password } = req.body;

  let user = await VisualizationUser.findOne({ email }).select("+password");

  if (!user)
    return res
      .status(400)
      .json({ success: false, message: "Invalid Email or Password" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return res
      .status(400)
      .json({ success: false, message: "Invalid Email or Password" });

  sendCookie(user, res, "Login Successfully", 201);
};

export const getUser = async (req, res) => {
  res.status(200).json({ success: true, user: req.user });
};
