import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/api";
import { addProduct } from "./services/create";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    product: addProduct,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
