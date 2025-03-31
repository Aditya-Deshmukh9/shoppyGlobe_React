import express from "express";
import {
  loginUser,
  logoutUser,
  RegisterUser,
} from "../controllers/auth.contoller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// POST	/register	Register a new user
// POST	/login	Authenticate and get JWT
// POST	/logout logout use

router.route("/login").post(loginUser);
router.route("/register").post(RegisterUser);
router.route("/logout").post(authMiddleware, logoutUser);

export default router;
