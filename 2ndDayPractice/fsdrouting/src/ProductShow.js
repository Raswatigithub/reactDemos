import React from 'react'
import { useParams } from 'react-router-dom'

const ProductShow = () => {
    let {id,title,price}=useParams();
  return (
    <div>
        <h1>
            {id}
            {title}
            {price}
        </h1>
    </div>
  )
}

export default ProductShow