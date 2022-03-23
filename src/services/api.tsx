import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Products } from "../models/products.model";

export const productsApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/scandiwebPHP/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Products[], void>({
      query: () => "/api.php",
    }),
    addProductDvd: builder.query<Products[], void>({
      query: () => "insert/Dvd.php",
    }),
    addProductBook: builder.query<Products[], any[]>({
      query: () => "insert/Book.php",
    }),
    addProductFurniture: builder.query<Products[], any[]>({
      query: () => "insert/Furniture.php",
    }),
    deleteProduct: builder.query<Products[], number[]>({
      query: () => "delete/MassDelete.php",
    }),
  }),
});

export const { useGetProductsQuery, useAddProductDvdQuery } = productsApi;
