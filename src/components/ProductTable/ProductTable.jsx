import React from 'react'
import defaultPicture2 from '../../assets/images/bed2.png'
import formatDate from '../../utils/formatDate';
const URL = import.meta.env.VITE_SERVER_URL;



export default function ProductTable({ products, deleteProduct, setFormValue }) {
    return (
        <>

            <div className='table-container'>
                <table className='table-admin'>
                    <thead>
                        <tr>
                            <th>
                                imagen
                            </th>
                            <th>
                                Product
                            </th>
                            <th>
                                Date
                            </th>
                            <th>
                                characteristics
                            </th>
                            
                            <th>
                                Price
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((prod) => (
                                <tr key="">

                                    <td>
                                        <img className='table-img'

                                            src={
                                                prod.image? `${URL}/images/products/${prod.image}`
                                                    : defaultPicture2
                                            }
                                        />
                                    </td>
                                    
                                    

                                    <td>{prod.name}</td>
                                    <td>{formatDate(prod.createdAt)}</td>
                                    <td><div className='product-description-row'> {prod.characteristics}</div></td>
                                    
                                    <td>{prod.price}</td>
                                    <td className='actions'>
                                        <button className='btn-table' onClick={() => deleteProduct(prod._id)}>
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                        <button className='btn-table' onClick={() => setFormValue(prod)}>
                                            <i className="fa-solid fa-pencil"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }



                    </tbody>
                </table>
            </div>


        </>
    )
}
