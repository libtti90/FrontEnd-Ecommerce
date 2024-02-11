import React from 'react'

import { UserTableRow } from '../UserTableRow/UserTableRow'
export default function UserTable({ users, deleteUser,setFormValue}) {

   
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
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Localidad
                            </th>
                            <th>
                                Role
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((usr) => (
                           <UserTableRow key={usr._id}usr={usr} deleteUser={deleteUser} setFormValue={setFormValue} />
                        ))}

                    </tbody>
                </table>
            </div>

        </>
    )
}
