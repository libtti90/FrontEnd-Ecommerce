import axios from 'axios';
import { ProductCard } from '../ProductCard/ProductCard';


import React, { useEffect, useState } from 'react'



export default function ProductCardContainer() {

  const [products, setProducts] = useState([]);

  useEffect(function () {
    console.log('se monto el componenete')
    getProducts()
  }, [])

  async function getProducts() {
    try {
      //pedido al back end de los productos para pintar 
      const response = await axios.get('http://localhost:3000/products');

      setProducts(response.data.products);


      console.log(response)

    } catch (error) {
      console.log(error)

    }

  }


  return (
    <>
      <section className="card-container">
      {
        products.map(product => {
          return (
            <ProductCard product={product} key={product._id}/>
          )
        })
      }
      </section>
    </>
  )
}

