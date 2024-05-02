import React, { useState, useEffect } from "react";

interface Props {
  category: string;
}

const ProductList = ({ category }: Props) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("use in ", category);
    setProducts(["clothing", "household"]);
  }, [category]);
  return <div>{products}</div>;
};

export default ProductList;
