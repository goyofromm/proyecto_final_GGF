import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../App.css'
import ProductsList from '../components/ProductsList'


const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    navigate('/admin');
  };

    return (
        <Container className="mt-4 py-5">
        <div className="mx-auto p-4 bg-light rounded shadow" style={{ maxWidth: "500px" }}>
            <form>
            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="inputPassword" />
            </div>
            <button type="submit" className="btn btn-primary w-100" onClick={handleLogin}>Ingresar</button>
            </form>
        </div>
        </Container>
    );
  };  
export default Login;