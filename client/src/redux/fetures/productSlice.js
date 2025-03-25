import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filterProducts: [],
  },
  reducers: {
    getFilterProducts: (state, action) => {
      state.filterProducts = action.payload.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
  },
});

export const { getFilterProducts } = productSlice.actions;
export default productSlice.reducer;
