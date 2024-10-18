import express from "express";
import { getUser, login, registerUser } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", registerUser);
router.post("/logout");

router.get("/data", isAuthenticated);
router.get("/", isAuthenticated, getUser);

export default router;
