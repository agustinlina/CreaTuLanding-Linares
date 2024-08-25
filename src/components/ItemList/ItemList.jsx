import React from 'react'
import Item from '../Item/Item.jsx'
import './ItemList.css'

const ItemList = ({ products }) => {

    return (
        <div className='ItemList'>
            {products.map((elemento) => {
                return(
                   <Item key={elemento.id} products={elemento}/> 
                )
            })}
        </div>
    )
}

export default ItemList