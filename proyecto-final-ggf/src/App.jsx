
import Home from './pages/Home'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import ShoppingCart from './components/ShoppingCart';
import ProductsList from './components/ProductsList';
import { useEffect, useState } from 'react';



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
  };

  const deleteFromCart = (producto) => {
    setProductosCarrito(prev =>
      prev.filter((p) => p.id !== producto.id)
    );
  };

  return (
    <div style={{ paddingTop: '50px' }}>
      <Router>
        <div>
          <NavBar/>
          <Routes>
              <Route path='/' element={<Home productos={productos} addToCart={addProductToCart} />}  />
              <Route path='/about' element={<About/>}  />
              <Route path='/contact' element={<Contact/>}  />
              <Route path='/shopping-cart' element={<ShoppingCart productosCarrito={productosCarrito} deleteFromCart={deleteFromCart}/>}  />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
