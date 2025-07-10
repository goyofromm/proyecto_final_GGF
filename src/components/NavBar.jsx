import {React} from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate  } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import escudo from './images/escudo-independiente.png';
import { FaHome, FaShoppingCart } from "react-icons/fa";

const NavBar = ()=> {

    const navigate = useNavigate();
    const { user, logout } = useAuthContext();

    return (
        <Navbar style={{ backgroundColor: '#8B0000' }} variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to="/"> 
                <img
                    src={escudo}
                    alt="Escudo Independiente"
                    height="40"
                    style={{ marginRight: '8px' }}
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/'}><FaHome/></Nav.Link>
                        <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                        <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
                        <Nav.Link as={Link} to={'/shopping-cart'}><FaShoppingCart/></Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        {!user ? (
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        ) : (
                            <div className="d-flex flex-row">
                                <Nav.Link as={Link} to="/admin" className="login-button">Admin</Nav.Link>
                                <Nav.Link className="log-out-button" onClick={logout}>Cerrar sesión</Nav.Link>
                            </div>
                        )}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar