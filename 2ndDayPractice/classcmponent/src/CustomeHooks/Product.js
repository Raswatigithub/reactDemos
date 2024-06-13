import React from "react";
import useFetch from "./useFetch";

const  Product = () => {
  let data = useFetch("https://fakestoreapi.com/products");
    console.log(data);

  return <div>{data ? data.map((product) => <p>{product.id}</p>) : null}</div>;
};

export default Product;