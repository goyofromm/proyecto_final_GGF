import Home from './pages/Home'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';
import Login from './pages/Login';
import Admin from './pages/Admin';
import ProtectedRoute from './components/ProtectedRoute';
import { ProductProvider } from './context/ProductContext';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ paddingTop: '50px' }}>
      <AuthProvider>
        <ProductProvider>
          <BrowserRouter>
            <NavBar />
            <div className="flex-grow-1">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/shopping-cart' element={<ShoppingCart />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={<ProtectedRoute><Admin /></ProtectedRoute>} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </ProductProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
