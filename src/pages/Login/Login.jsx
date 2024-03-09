
import './Login.css';
import {useUser} from "@/context/UserContext"






export default function Login() {
const {login}=useUser();

function handleSubmit(event) {
    event.preventDefault();
    
    const el = event.target.elements

    const data = {
      email: el.email.value,
      password: el.password.value,
      
    }
    


  login(data)//objeto tiene email y password dentro
  }
  
 
  return (
    <>
      <main className="main-container-login">

        <section className="login-container">
          <div className="login-wrapper">
            <h1 className="login-title" >Login</h1>
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
