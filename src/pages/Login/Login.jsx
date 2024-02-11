import axios from 'axios';
import './Login.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';




export default function Login() {
const navigate=useNavigate()
  function handleSubmit(event) {
    event.preventDefault();
    
    const el = event.target.elements

    const data = {
      email: el.email.value,
      password: el.password.value,
      
    }
    


  login(data)//objeto tiene email y password dentro
  }
  
  async function login(data) {
    try {
     
      const response= await axios.post(import.meta.env.VITE_SERVER_URL + '/login', data);
      console.log(response)
      

      const token=response.data.token;
      const user=response.data.user;

      localStorage.setItem('token', token);
      localStorage.setItem('currentUser', JSON.stringify(user));

      Swal.fire({
        title:'Login correcto',
        text:'sera redireccionado',
        icon:'success',
        
      }).then(()=>{
        navigate('/')
      })

    } catch (error) {
      Swal.fire({
        title:'error',
        text:"Information is incorrect",
        icon:'error'
      })
    }
  }
  return (
    <>
      <main className="main-container-login">

        <section className="login-container">
          <div className="login-wrapper">
            <h1 className="login-title">Login</h1>
            <form className="" class="login-form" id="login-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required placeholder='Email' />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required placeholder='password' />
              </div>


              <button type="submit" className="btn-form">Login</button>
            </form>
          </div>

        </section>




      </main>

    </>

  )
}
