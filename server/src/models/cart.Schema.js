import { model, Schema } from "mongoose";

const cartSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: {
      type: [
        {
          productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
          },
          quantity: {
            type: Number,
            required: true,
            min: [1, "Quantity cannot be less than 1"],
          },
        },
      ],
      default: [],
    },
  },
  {
    Timestamp: true,
  }
);

const Cart = new model("Cart", cartSchema);

export default Cart;
