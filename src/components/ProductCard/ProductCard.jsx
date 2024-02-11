import './ProductCard.css'
import React from 'react'

export const ProductCard = (props) => {

  return (
    <>
<articule class="card-box" >

<div class="card">

<header class="card-header">
        <h2 className="card-info-title">{props.product.name}</h2>
</header>
      <div className="card-body">
        <p className="product-description">{props.product.characteristics} </p>
      </div>



      <div className="values">

        <div className="card-price">{props.product.price}</div>

      </div>


 <footer className="card-footer">

        <button className="card-btn" onclick="seeMore( '${product.id}')">See more</button>
        <button className="card-btn">Comprar</button>

</footer>


</div>
      
</articule>
        
    </>

  )
}

