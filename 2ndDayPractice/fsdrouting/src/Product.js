import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProduct(res));
  });

  const renderedProduct = product.map((prod) => {
    return (
      <Link to={`/product/${prod.id}/${prod.title}/${prod.price}`}>
        <Card prod={prod} />
      </Link>
    );
  });
  return <div>{renderedProduct}</div>;
};

export default Product;
