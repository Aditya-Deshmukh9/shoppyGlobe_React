import Product from "../models/product.Schema.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getAllProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({});

  res.status(200).json({
    success: true,
    message: "Successfully Get Products",
    data: products,
  });
});

export const getProductById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const productDetails = await Product.findById(id);

  if (!productDetails) {
    return res.status(404).json({
      message: "Product not found",
      success: false,
    });
  }

  res.status(200).json({
    success: true,
    message: "Successfully Get Product",
    data: productDetails,
  });
});

export const addNewProduct = asyncHandler(async (req, res, next) => {
  const { name, price, description, stock, thumbnail } = req.body;

  // Validate required fields
  if (!name || !price || !description || !stock || !thumbnail) {
    return res.status(400).json({
      success: false,
      message: "All fields are required to add a new product",
    });
  }

  // Create a new product
  const newProduct = new Product({
    name,
    price,
    description,
    stock,
    thumbnail,
  });
  await newProduct.save();

  res.status(201).json({
    success: true,
    message: "Product added successfully",
    data: newProduct,
  });
});

export const updateProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const updates = req.body;

  // Find and update the product
  const updatedProduct = await Product.findByIdAndUpdate(id, updates, {
    new: true, // Return the updated document
    runValidators: true, // Ensure validation rules are applied
  });

  if (!updatedProduct) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Product updated successfully",
    data: updatedProduct,
  });
});

export const deleteProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  // Find and delete the product
  const deletedProduct = await Product.findByIdAndDelete(id);

  if (!deletedProduct) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});
