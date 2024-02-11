import React from 'react'
import defaultPicture from '../../assets/images/default.png'
export const UserTableRow = ({ usr, deleteUser,setFormValue }) => {

    return (
        <>
            <tr className='table-body' key={usr.id}>



                <td className='"table-img'>
                    <img className="table-img " src={usr.image ? usr.image : defaultPicture} />
                    </td>

                    <td className="table-name">
                        {usr.name}
                    </td>



                    <td>{usr.email}</td>



                    <td>
                        {usr.location ? usr.location : (<span>NO DATA</span>)}
                    </td>



                    <td>{usr.role}</td>

                    <td className='actions'>
                        <button className='btn-table' onClick={() => deleteUser(usr._id)}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                        <button className='btn-table' onClick={()=>setFormValue(usr)}>
                            <i className="fa-solid fa-pencil"></i>
                        </button>
                    </td>



                   

                
            </tr>
        </>
    )
}
