
import React from "react";

const Card = ({data }) => {
  return (
    <div className="main">
      <ul>
        <li>
          <h2>Id: {data.id}</h2>
        </li>
        <li>
          <h2>title: {data.title}</h2>
        </li>
        <li>
          <h2>price: {data.price}</h2>
        </li>
        <li>
          <h2>description: {data.description}</h2>
        </li>
      </ul>
    </div>
  );
};

export default Card;
