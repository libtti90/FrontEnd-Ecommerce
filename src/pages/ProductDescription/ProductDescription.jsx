import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const URL = import.meta.env.VITE_SERVER_URL;

export default function ProductDescription() {

  const { id } = useParams()
    const [ product, setProducts ] = useState({})
    useEffect(() => {
      getProductDetail(id)
  }, [id])
  async function getProductDetail(id) {
    try {
        
        const response = await axios.get(`${URL}/products/${id}`)

        console.log(response.data.product)

        const product = response.data.product;

        setProducts(product)


    } catch (error) {
        console.log(error)
    }
}
  return (
    <div>
    <h2>Product Details</h2>
    
</div>
  )
}

/*import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const URL = import.meta.env.VITE_SERVER_URL;

export const ProductDetail = () => {
    const { id } = useParams()
    const [ user, setUser ] = useState({})

    useEffect(() => {
        getProductDetail(id)
    }, [id])

    async function getProductDetail(id) {
        try {
            
            const response = await axios.get(`${URL}/users/${id}`)

            console.log(response.data.user)

            const user = response.data.user;

            setUser(user)


        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.age}</p>
            <p>{user.location}</p>
        </div>
    )
}*/