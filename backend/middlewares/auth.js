import jwt from "jsonwebtoken";
import { VisualizationUser } from "../models/user.model.js";

export const isAuthenticated = async (res, req, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(500).json({ success: false, message: "Login First" });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await VisualizationUser.findById(decoded._id);
  next();
};
