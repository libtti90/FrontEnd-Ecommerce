import React from 'react'
import ProductTableRow from '../ProductTableRow/ProductTableRow'

export default function ProductTable(products) {
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
                                Description
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
                        {products.map((product) => (
                           <ProductTableRow key={product._id} product={product}  />
                        ))}

                    </tbody>
                </table>
            </div>

        
    </>
  )
}
