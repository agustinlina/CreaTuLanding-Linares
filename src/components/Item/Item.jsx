import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'
import './Item.css'

const Item = ({ products }) => {
  return (
    <Card data-bs-theme='dark' style={{width:"18rem", margin:"12px"}}>
      <Card.Img variant="top" src={products.img} style={{height:"10rem",objectFit:"cover",backgroundPosition:"center"}}/>
      <Card.Body>
        <Card.Title>{products.title}</Card.Title>
        <Card.Text>{products.description}</Card.Text>
        <p>{products.price}</p>
        <Link className='product__card--button' to={`detail/${products.id}`}>Ver detalles</Link>
      </Card.Body>
    </Card>
  )
}

export default Item
