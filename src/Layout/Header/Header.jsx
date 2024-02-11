import { NavLink,useNavigate } from 'react-router-dom';
import './Header.css';

export default function Header() {
const navigate=useNavigate();
    const isAdmin = true;
const currentUser=JSON.parse(localStorage.getItem('currentUser'));
function logout(){
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    navigate("/");
}

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
                currentUser? <NavLink onClick={()=>logout()}>Logout</NavLink>
                :<NavLink to="/Login" className="nav-link">Login</NavLink>
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

