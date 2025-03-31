import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true },
    description: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = new model("Product", productSchema);

export default Product;
