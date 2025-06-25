
import Home from './pages/Home'
import NavBar from './components/NavBar'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import ShoppingCart from './components/ShoppingCart';
import ProductsList from './components/ProductsList';
import { useEffect, useState, useContext } from 'react';
import Footer from './components/Footer';
import Login from './pages/Login';
import Admin from './pages/Admin';
import ProtectedRoute from './components/ProtectedRoute';
import { carritoContext } from "./context/CarritoContext";
import { AuthProvider } from './context/AuthContext';


function App() {
  const[productos,setProductos]=useState([]);
  
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
        setProductos(data);
    })
    .catch(err=>{
      console.error("Error de carga de API",err);
    });
  }, []) 

return (
  <div className="d-flex flex-column min-vh-100" style={{ paddingTop: '50px' }}>
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <div className="flex-grow-1">
          <Routes>
            <Route path='/' element={<Home productos={productos}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/shopping-cart' element={<ShoppingCart/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/admin' element={<ProtectedRoute><Admin/></ProtectedRoute>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  </div>
);

}

export default App
