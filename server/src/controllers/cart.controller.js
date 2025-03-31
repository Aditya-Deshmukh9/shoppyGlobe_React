import Product from "../models/product.Schema.js";
import Cart from "../models/cart.Schema.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getCartItems = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const cartItems = await Cart.findOne({ owner: userId }).populate(
    "items.productId"
  );

  if (!cartItems) {
    res.status(404).json({
      success: false,
      message: "Cart is Empty",
    });
  }

  res.status(200).json({
    success: true,
    message: "Successfully Cart Item fetch",
    data: cartItems,
  });
});

export const addItemToCart = asyncHandler(async (req, res, next) => {
  const { productId, quantity = 1 } = req.body;

  // Find the product by its ID
  const product = await Product.findById(productId);

  // If the product does not exist
  if (!product) {
    return res.status(404).json({
      message: "Product not found",
      success: false,
    });
  }

  // Check if the requested quantity exceeds the available stock
  if (quantity > product.stock) {
    return res.status(400).json({
      message: `Only ${product.stock} items in stock`,
      success: false,
    });
  }

  // Find the cart associated with the logged-in user
  let cart = await Cart.findOne({ owner: req.user._id });

  // If the cart does not exist, create a new one
  if (!cart) {
    cart = new Cart({ owner: req.user._id, items: [] });
  }

  // Check if the product already exists in the cart
  const existedItem = cart.items.find(
    (item) => item.productId.toString() === productId
  );

  if (existedItem) {
    // If the product exists, update its quantity
    existedItem.quantity = quantity;
  } else {
    // If the product does not exist, add it to the cart
    cart.items.push({ productId, quantity });
  }

  // Save the updated cart to the database
  await cart.save();

  res.status(200).json({
    success: true,
    message: "Successfully added to Cart",
  });
});

export const updateCart = asyncHandler(async (req, res, next) => {
  const { productId, quantity } = req.body;

  // Find the cart associated with the logged-in user
  let cart = await Cart.findOne({ owner: req.user._id });

  if (!cart) {
    return res.status(404).json({
      success: false,
      message: "Cart not found",
    });
  }

  // Check if the product exists in the cart
  const existedItem = cart.items.find(
    (item) => item.productId.toString() === productId
  );

  if (!existedItem) {
    return res.status(404).json({
      success: false,
      message: "Product not found in cart",
    });
  }

  // Update the quantity of the product
  existedItem.quantity = quantity;

  // Save the updated cart to the database
  await cart.save();

  res.status(200).json({
    success: true,
    message: "Cart updated successfully",
  });
});

export const deleteCartItem = asyncHandler(async (req, res, nexr) => {
  const { ItemId } = req.body;
  const userId = req.user._id;

  // Find the cart associated with the logged-in user
  let cart = await Cart.findOne({ owner: userId });

  if (!cart) {
    return res.status(404).json({
      success: false,
      message: "Cart not found",
    });
  }

  cart.items = cart.items.filter((item) => item._id.toString() !== ItemId);

  await cart.save();

  res.status(200).json({
    success: true,
    message: "Product removed from cart successfully",
  });
});
