import React, { useEffect } from "react";
import { useState } from "react";
import ProductList from "./components/ProductList";

const connect = () => console.log("connecting...");
const disconnect = () => console.log("disconnecting...");

const App = () => {
  const [category, setCategory] = useState("");

  useEffect(() => {
    connect();

    return disconnect;
  });

  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      >
        <option value=""></option>
        <option value="clothing">clothing</option>
        <option value="household">household</option>
      </select>
      <ProductList category={category}></ProductList>
    </div>
  );
};

export default App;
