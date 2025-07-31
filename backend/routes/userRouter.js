 import express from "express";
import { login, register, logout, getUser } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// 🔐 Auth routes
router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/getuser", isAuthenticated, getUser);

// ✅ Health check route
router.get("/ping", (req, res) => {
  res.send("User route connected ✅");
});

export default router;
