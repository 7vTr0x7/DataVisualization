import express from "express";
import { registerUser } from "../controllers/user";

const router = express.Router();

router.post("/login");
router.post("/register", registerUser);
router.post("/logout");

export default router;
