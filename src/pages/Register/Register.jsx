import { useForm } from "react-hook-form";
import './Register.css';

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
    
    <main className="main-container-register">
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

  <div>
                    <label class="form-label" for="inputState">Select your State</label>
                    <select class="group" name="provincia" id="inputState">
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>



  
  <button type="submit" className={userId ? "btn-success":""}>
    {userId ? "Edit User": "Add User"
    }
  </button>

</form>

          </div>
          

     


        </div>
    </main>
      
     
    </>
  
  )
}



/*import './Register.css'
import Swal from "sweetalert2";

export default function Register() {



  return (
    <>
    <main className="main-container">
      <div className="user-register">
        <h1 className="register">REGISTER</h1>
        <hr />

        <form className='formRegister'  id="formRegister" onSubmit={handleSubmit(submitedData)}>

          <div>
            <label className="form-label" >
              Full Name
            </label>
            <input
              className="group"
              type="text"
              value=''
              name="nombreCompleto"
              id="inputName"
              placeholder="Jhon Doe"
              required
              minLength="2"
              maxLength="60"
              
            />
          </div>
          <div class="decoration">
                    <label class="form-label" for="inputEmail">Email Address</label>
                    <input class="group" type="email" value="" name="correoElectronico" id="inputEmail"
                        placeholder="JhonDoe@gmail.com" title="Please enter a valid email address."/>
                    <div class="square">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </div>
                <div class="decoration">
                    <label class="form-label" for="inputContrasena">Password</label>
                    <input class="group" type="password" value="" name="contrasena" id="inputContrasena"
                        placeholder="******" required 
                        title="Enter password"
                        maxlength="20"/>
                    <div class="square">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </div>
                <div>
                    <label class="form-label" for="inputRcontrasena">Repeat Password</label>
                    <input class="group" type="password" value="" name="contrasena" id="inputRcontrasena"
                        placeholder="******" required
                        title="Enter the same password again."/>


                </div>
                <div>
                    <label class="form-label" for="inputDateOfBirth">Date of Birth</label>
                    <input class="group" type="date" value="" name="fechaDeNacimiento" id="inputDateOfBirth"
                        placeholder="dd/mm/aaaa" min="1920-01-01" required title="Seleccione your date of Birth"/>
                </div>
                <div>
                    <label class="form-label" for="inputState">Select your State</label>
                    <select class="group" name="provincia" id="inputState">
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>


          

          <div>
            <label className="form-label" >
              Observations
            </label>
            <textarea
              className="group"
              name="Observation"
              id="Observation"
              cols="10"
              rows="5"
              placeholder="Additional Information"
              value=''
             
            ></textarea>
          </div>

          <div>
            <button type="submit">Registrarse</button>
          </div>
        </form>
      </div>
    </main>
    </>
  )
}
*/