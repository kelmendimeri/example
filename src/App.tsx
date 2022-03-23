import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductList from "./Components/Form/Body/ProductList";
import AddProduct from "./Components/Form/AddProduct";

function App() {
  return (
    <div className="App">
      Scandiweb
      {/* <ProductList></ProductList> */}
      <AddProduct />
    </div>
  );
}

export default App;
