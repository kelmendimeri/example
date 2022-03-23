import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store";

function AddProduct() {
  const dispatch = useDispatch();

  const [myProduct, setMyProduct] = React.useState<any>({});

  return (
    <form>
      <label>SKU</label>
      <input
        type={"text"}
        name="SKU"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          console.log(e.currentTarget.value);
          store.dispatch(AddProduct);
          console.log(store.getState);
        }}
      />
      <label>Name</label>
      <input type={"text"} name="Name" />
      <label>Price</label>
      <input type={"text"} name="Price" />
      <label>Size</label>
      <input type={"text"} name="Size" />

      <h1>product</h1>
    </form>
  );
}

export default AddProduct;
