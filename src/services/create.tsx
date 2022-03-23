import { createSlice } from "@reduxjs/toolkit";

const CreateProduct = createSlice({
  name: "sliceCreate",
  initialState: { SKU: "" },

  reducers: {
    addProduct(state, action) {
      return (state = action.payload);
    },
  },
});

const { actions, reducer } = CreateProduct;

export const { addProduct } = actions;

export default reducer;
