import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './ProductDetail.css';

const URL = import.meta.env.VITE_SERVER_URL;

export const ProductDetail = () => {
    const { id } = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        getProductDetail(id)
    }, [id])

    async function getProductDetail(id) {
        try {

            const response = await axios.get(`${URL}/products/${id}`)

            console.log(response.data.product)

            const product = response.data.product;

            setProduct(product)


        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <articule className="card-box-detail" >
                <div className='box-information'>
                <header className="card-header">
                         <img src={`${URL}/images/products/${product.image}`} alt="Product Image" />
                </header>

                <div className="card-body-detail">
                <h1>{product.name}</h1>
                <div className="card-price">{product.color}</div>
                <div className="card-price">${product.price}</div>
                <p className="product-description">{product.characteristics} </p>
                </div>
                </div>
                    
                   

                   <footer className="card-footer">




                <button className="card-btn">Comprar</button>


                </footer>


               

            
                

            </articule>
        </>
    )
}
/*<articule className="card-box" >

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


<NavLink className="btn transparent" to={`/product-detail/${props.product._id}`}>
                    Ver mas
                </NavLink>

        <button className="card-btn">Comprar</button>
       
        
</footer>


</div>
      
</articule>*/