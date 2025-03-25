import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItem.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItem.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
      state.totalItemInCart = state.cartItem.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
    updateQuantity: (state, action) => {
      //action: quantity, productId
      const item = state.cartItem.find(
        (item) => item.id === action.payload.productId
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeItemCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
