
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Contact from './pages/Contact/Contact'
import AdminProduct from './pages/AdminProduct/AdminProduct'
import AdminUser from './pages/AdminUser/AdminUser'
import Header from './Layout/Header/Header'
import Footer from './Layout/Footer/Footer'
import AdminRoute from './Guard/AdminRoute/AdminRoute'
import ProductDescription from './pages/ProductDescription/ProductDescription'
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";






function App() {


  return (
    <>
      <Header />

      <main className='main'>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Contact' element={<Contact/>}/>
         <Route path='/Register' element={<Register/>}/>
         <Route path='/Login' element={<Login/>}/>
         <Route path='/AdminUser' element={<AdminRoute><AdminUser/></AdminRoute>}/>
         <Route path='/AdminProduct' element={<AdminRoute><AdminProduct/></AdminRoute>}/>
         <Route path='/' element={<Login/>}/>
         <Route path='/ProductDescription' element={<ProductDescription/>}/>
         <Route path="/product-detail/:id" element={ <ProductDetail /> } />
       

         
        

        </Routes>
      
        

       

        

      </main>
      <Footer />



      
    </>
  )
}

export default App
