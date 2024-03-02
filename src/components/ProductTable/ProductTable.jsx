import React from 'react'


export default function ProductTable({products,deleteProduct,setFormValue}) {
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
                        products.map((prod)=>(
                            <tr key="">
                                <td>{prod.imagen}</td>
                                <td>{prod.name}</td>
                                <td>{prod.createdAt}</td>
                                <td>{prod.materials},{prod.color}</td>
                                <td>{prod.price}</td>
                                <td className='actions'>
                        <button className='btn-table' onClick={() => deleteProduct(prod._id)}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                        <button className='btn-table' onClick={()=>setFormValue(prod)}>
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
