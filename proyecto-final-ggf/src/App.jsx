
import Home from './pages/Home'
import NavBar from './components/NavBar'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import ShoppingCart from './components/ShoppingCart';
import ProductsList from './components/ProductsList';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Footer from './components/Footer';
import Login from './pages/Login';
import Admin from './pages/Admin';
import ProtectedRoute from './components/ProtectedRoute';



function App() {
  const[productos,setProductos]=useState([]);
  const [productosCarrito, setProductosCarrito] = useState([]);
  
  
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

  const addProductToCart = (producto) => {
    setProductosCarrito(prev => [...prev, producto]);
    showAlertMessage("Agregado con exito!", "success" )
  };

  const deleteFromCart = (indexToRemove) => {
    setProductosCarrito( prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const showAlertMessage = (message, icon)=> {
    Swal.fire({
      title: message,
      icon: icon,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }


return (
  <div className="d-flex flex-column min-vh-100" style={{ paddingTop: '50px' }}>
    <BrowserRouter>
      <NavBar />
      <div className="flex-grow-1">
        <Routes>
          <Route path='/' element={<Home productos={productos} addToCart={addProductToCart} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shopping-cart' element={<ShoppingCart productosCarrito={productosCarrito} deleteFromCart={deleteFromCart} />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/admin' element={<ProtectedRoute><Admin/></ProtectedRoute>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </div>
);

}

export default App
