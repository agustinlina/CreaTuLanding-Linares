import React from 'react'

const ItemDetail = ({ product }) => {
  const {img, title, description, price} = product || {}

  return (
    <div>
      <h3>{title}</h3>
      <img style={{width:"50%"}}src={img} alt={`imagen del producto ${title}`} />
      <p>{description}</p>
      <p>{price}</p>
    </div>
  )
}

export default ItemDetail
