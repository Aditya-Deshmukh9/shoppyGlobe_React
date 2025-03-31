import Product from "../models/product.Schema.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});

    res.status(200).json({
      success: true,
      message: "Successfully Get Products",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

export const addNewProduct = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};
