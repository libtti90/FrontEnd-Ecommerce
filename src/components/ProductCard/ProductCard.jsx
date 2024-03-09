
import './ProductCard.css'
import React from 'react'
import { NavLink } from 'react-router-dom';
import formatDate from '../../utils/formatDate';





const URL = import.meta.env.VITE_SERVER_URL;
export const ProductCard = (props) => {

  return (
    <>
<articule className="card-box" >

<div className="card">

<header className="card-header">
<div className="img-box">
  
  <img src={`${URL}/images/products/${props.product.image}`} alt="Product Image" />
  
  
  
  

                
                    
            </div>
        <h2 className="card-info-title">{props.product.name}</h2>
</header>
      <div className="card-body">
        <p className="product-description">{props.product.characteristics} </p>
      </div>



      <div className="values">

        <div className="card-price">${props.product.price}</div>
        <div className="card-price">{formatDate(props.product.createdAt)}</div>
        

      </div>


 <footer className="card-footer">


        <NavLink className="btn-transparent  card-btn" to={`/product-detail/${props.product._id}`}>
					Ver mas
				</NavLink>

        <NavLink className="btn-transparent card-btn">Comprar</NavLink>
       
        
</footer>


</div>
      
</articule>
        
    </>

  )
}

