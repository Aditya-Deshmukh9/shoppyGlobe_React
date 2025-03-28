import express from "express";
import {
  addProductToCart,
  deleteProductFromCart,
  updateCart,
} from "../controllers/cart.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.route("/addtocart").post(addProductToCart);
router.route("/updatecart").put(updateCart);
router.route("/deleteproduct").delete(deleteProductFromCart);

export default router;
