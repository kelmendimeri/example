import React from "react";
import { useGetProductsQuery } from "../../../services/api";

function ProductList() {
  const { data, error, isSuccess, isFetching, isLoading } =
    useGetProductsQuery();
  return (
    <div>
      {isFetching && <h1>Is fetching</h1>}
      {isLoading && <h1>Isloading</h1>}
      {error && <h1>Something went wrong</h1>}
      {isSuccess && (
        <div>
          {data.map((product) => {
            return <p>{product.SKU}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default ProductList;
