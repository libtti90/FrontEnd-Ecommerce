import { NavLink} from 'react-router-dom';
import './Header.css';
import {useUser} from "../../context/UserContext";




export default function Header() {

  const {user,logout}=useUser();
  const isAdmin = user?.role ==="ADMIN_USER"




    return (
        <header className='main-header'>

            <input class="input-check" type="checkbox" id="check" />
            <label class="label-menu" for="check">
                <div class="burger-line"></div>
            </label>

            <nav class="main-nav">
            <ul class="nav-list" id="header-nav">

            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/Contact" className="nav-link">Contact</NavLink>
            <NavLink to="/Register" className="nav-link">Register</NavLink>
            <NavLink to="/About" className="nav-link">About Us</NavLink>


            

            {
                user? <NavLink className='nav-link' onClick={()=>logout()}>Logout</NavLink>
                : <NavLink to="/Login" className="nav-link">Login</NavLink>
            }
            

            {isAdmin && (
                <>
                    <NavLink to="/AdminProduct" className="nav-link">Admin Product</NavLink>
                    <NavLink to="/AdminUser" className="nav-link">Admin User</NavLink>
                </>
            )}
            </ul>
            </nav>

        </header>
    )
}

