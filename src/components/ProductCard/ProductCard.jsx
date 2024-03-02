import './ProductCard.css'
import React from 'react'

export const ProductCard = (props) => {

  return (
    <>
<articule className="card-box" >

<div className="card">

<header className="card-header">
<div className="img-box">
                <img src={props.product.image} class="card-image" loading="lazy"/>
                
                    
            </div>
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

