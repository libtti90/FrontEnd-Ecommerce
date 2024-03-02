import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from 'axios';
import UserTable from "../../components/UserTable/UserTable";
import { useNavigate } from "react-router-dom";


const URL = import.meta.env.VITE_SERVER_URL;

const token=localStorage.getItem('token');

export default function AdminUser() {

  

  const [dbUsers, setDbUsers] = useState([]);
  
  const [userId, setUserId]=useState();
  const navigate=useNavigate();

  //obtener usuarios
  async function getUsers(){
    try {
      const response= await axios.get(`${URL}/users`);

      const users = response.data.users;

      setDbUsers(users);
      

    } catch (error) {
      console.log(error)
      Swal.fire({
        icon:error,
        title:'Users no retrieved',
        
      });
    }
  }
//

function logout() {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
  navigate("/");
}

  async function deleteUser(id){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async function (result) {
      if (result.isConfirmed) {

        try {
  
          
         
          
          if(!token)return 
          console.log(`usuario a borrar ${id}`);
        
        
           await axios.delete(`${URL}/users/${id}`,{headers:{'authorization':token}});
        
            Swal.fire({
              title:'User deleted',
              text:`User ${id.name} was deleted`,
              icon:"success",
              timer:1500
            });

            getUsers();
           
        } 
        
        
        catch (error) {
          console.log(error);
          Swal.fire('Error deleting','User not deleted','error');

          if(error.response.status===403){
            return logout();
          }
        }
        
      }
    });
  
    

    
   
  }
  
  useEffect(()=>{
    getUsers();
  },[]);

//
  const {register,handleSubmit,setValue}=useForm();




  async function submitedData(data) {

console.log(data);

const formData=new FormData();


for(const key of Object.keys(data)){
  if(key=='image'){
    formData.append(key,data.image[0])
    continue;
  }
  formData.append(key,data[key])
}



    try {

      
      
      if(userId){
        if(!token)return;
        const response = await axios.put(`${URL}/users/${userId}`, formData, {
          headers: {
            authorization: token,
          },
        });
        Swal.fire({
          icon: 'success',
          title: `User ${response.data.user?.name} edited`,
          iconColor: '#36B37E',
        });

        
        getUsers();
        setUserId(null);
        setFormValue();
        return;
      }

      const response= await axios.post( `${URL}/users`, formData);
      Swal.fire({
        icon: 'success',
        title: `User ${response.data.user?.name} created`,
        iconColor: '#36B37E',
      });
      
      getUsers();
      setFormValue();
      
      

    } 
    catch (error) {
      
      Swal.fire({
        icon:"error",
        title:'User no created',
        text:'information is not correct'

      });
      if(error.response.status===401){
        return logout();
      }

    }
    
  }



  function setFormValue(user){
    setUserId(user?._id || null);

    setValue("name",user?.name || "");
    setValue("email",user?.email || "");
    setValue("age",user?.age || "");
    
    setValue("image",user?.image || "");
    
      }
      
  return (
    <>
    
    
      <div className="admin-dashboard">
        
        <div className="form-container">

          <div className="top-form">
            
           
            <h2 className="admin-form-title">Register User
          {
            userId && (
            <button className="btn btn-danger"
             onClick={()=>setFormValue()}>
              <i class="fa-solid fa-x"></i>
              </button>)
          }
          
          </h2>
            </div>
          
          


<form className="admin-form" onSubmit={handleSubmit(submitedData)}
 encType="multipart/form-data">
  <label className="form-label"htmlFor="name">Full Name</label>
  <input type="text" id="name" className="admin-input" {...register("name")} />

  <label className="form-label" htmlFor="email">Email</label>
  <input id="email" type="email" className="admin-input" {...register("email")} />

  <label className="form-label" htmlFor="password">Password</label>
  <input id="password" type="password" disabled={userId} className="admin-input" {...register("password")} />
  
  <label className="form-label" htmlFor="age">Edad</label>
  <input id="age" className="admin-input" {...register("age")} />

  <label className="form-label" htmlFor="image">Image</label>
  <input type="file"accept="image/*" className="admin-input" {...register("image")} />

  Active<input type="checkbox" className="admin-input" {...register("active")} />

  
  <button type="submit" className={userId ? "btn-success":""}>
    {userId ? "Edit User": "Add User"
    }
  </button>

</form>

          </div>
          

     

        <div className="table-container">
          
          <UserTable users={dbUsers} deleteUser={deleteUser} setFormValue={setFormValue} />
          
        </div>
        </div>
     
    </>
  
  )
}