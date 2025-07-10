import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../App.css'
import ProductsList from '../components/ProductsList'
import Swal from 'sweetalert2';
import { useAuthContext } from "../context/AuthContext";



const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();

    const validateEntry = () => {
        const emailInput = document.getElementById('inputEmail').value?.trim();
        const passInput = document.getElementById('inputPassword').value.trim();
        return emailInput.length >= 1 && passInput.length >= 1;
    };

  const handleLogin = (event) => {
    event.preventDefault();
    if(validateEntry()){
        const email = document.getElementById('inputEmail').value?.trim();
        login(email) 
        navigate('/admin');
    }
    else{
        Swal.fire({
            title: 'Usuario o contraseña inválidos',        
        })
    }
    
  };

    return (
        <Container className="mt-4 py-5">
          <div className="login-box mx-auto p-4 rounded shadow">
            <form onSubmit={handleLogin} className="d-flex flex-column">
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label text-white">Email</label>
                <input                  
                  className="input-underline"
                  id="inputEmail"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label text-white">Contraseña</label>
                <input
                  type="password"
                  className="input-underline"
                  id="inputPassword"
                  required
                />
              </div>
              <div className="d-flex">
                <button type="submit" className="btn-login">Ingresar</button>
              </div>
            </form>
          </div>
        </Container>

    );
  };  
export default Login;