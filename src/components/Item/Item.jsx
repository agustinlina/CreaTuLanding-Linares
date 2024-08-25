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
        <p className='fs-4'>${products.price}</p>
        <Button className='w-100 product__card--button'><Link className='' to={`detail/${products.id}`}>Ver detalles</Link></Button>
      </Card.Body>
    </Card>
  )
}

export default Item
