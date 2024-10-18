import express from "express";
import { login, registerUser } from "../controllers/user.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", registerUser);
router.post("/logout");

export default router;
