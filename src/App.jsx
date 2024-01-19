
import './App.css'
import {Routes} from 'react-router-dom'

function App() {


  return (
    <>
      <header className='header'>
        <a href="">Home</a>
        <a href="">Contact</a>
        <a href="">Register</a>
        <a href="">About Us</a>
        <a href="">Admin Product</a>
        <a href="">Admin User</a>
        <a href="">Login</a>
      </header>

      <main className='main'>
        <Routes>
        
        </Routes>
        <h1>Home</h1>
        <h1>Contact</h1>
        <h1>Register</h1>
        <h1>About Us</h1>
        <h1>Admin Product</h1>
        <h1>Admin Users</h1>
        <h1>Login</h1>

        

      </main>




      <footer className='footer'>
        Pie de pagina
      </footer>
    </>
  )
}

export default App
