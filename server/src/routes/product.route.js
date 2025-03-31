import express from "express";
import {
  addNewProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/product.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// GET	/products	Fetch all products
// GET	/products/:id	Fetch a single product by ID
// POST	/products	Add a new product
// PUT	/products/:id	Update product details
// DELETE	/products/:id	Remove a product

router.route("/").get(getAllProducts).post(authMiddleware, addNewProduct);
router
  .route("/:id")
  .get(getProductById)
  .put(authMiddleware, updateProduct)
  .delete(authMiddleware, deleteProduct);

export default router;
