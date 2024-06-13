import "./App.css";
import React from 'react'

const BookCard = ({Bid,name,price,qty}) => {
  return (
    <div className="main">
        <h2>Book ID:{Bid}</h2>
        <h2>Name:{name}</h2>
        <h2>Price:{price}</h2>
        <h2>Quantity:{qty}</h2>
    </div>
  )
}

export default BookCard