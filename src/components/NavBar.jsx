import {React} from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate  } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const NavBar = ()=> {

    const navigate = useNavigate();
    const { user, logout } = useAuthContext();

    return (
        <Navbar bg="dark" variant="dark" expand='lg' fixed="top"> 
            <Container>
                <Navbar.Brand as={Link} to="/">Camisetas del rey!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                        <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                        <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
                        <Nav.Link as={Link} to={'/shopping-cart'}>🛒</Nav.Link>
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