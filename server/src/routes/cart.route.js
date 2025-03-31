import express from "express";
import {
  addItemToCart,
  deleteCartItem,
  getCartItems,
  updateCart,
} from "../controllers/cart.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

//route level middleware for verify
router.use(authMiddleware);

// POST	/cart	Add a product to the cart
// GET	/cart	Fetch the current cart items
// PUT	/cart/:id	Update product quantity in the cart
// DELETE	/cart/:id	Remove a product from the cart

router
  .route("/")
  .get(getCartItems)
  .post(addItemToCart)
  .put(updateCart)
  .delete(deleteCartItem);

export default router;
