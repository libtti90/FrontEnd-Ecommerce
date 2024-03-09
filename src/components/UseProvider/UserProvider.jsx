import React from 'react'
import { useState } from "react";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {UserContext} from "../../context/UserContext";

const URL = import.meta.env.VITE_SERVER_URL;


export const UserProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [admin,setAdmin]=useState(false);
  const navigate=useNavigate();

async function login(data){
  try {

    const response=await axios.post(`${URL}/login`,data);
    const {token,user}=response.data;

    localStorage.setItem('token', token);
      localStorage.setItem('currentUser', JSON.stringify(user));

const isAdmin=user.role==="ADMIN_USER";
setAdmin(isAdmin);
      setUser(user);

      Swal.fire({
        title:'Login correcto',
        text:'sera redireccionado',
        icon:'success',
        timer:1500
        
      }).then(()=>{
        navigate('/');
      })



  } catch (error) {
    console.log(error)
    Swal.fire({
      title:'error',
      text:"Information is incorrect",
      icon:'error'
    })
  }
}
async function logout(data){
  localStorage.removeItem('token');
  localStorage.removeItem('currentUser');
  setUser(null);

}



  return (
    <UserContext.Provider value={{user,admin, login,logout}}>
      {children}
    </UserContext.Provider>
  )
}

