import {React, useContext} from "react";
import { Container } from "react-bootstrap";
import '../App.css'
import ProductsList from '../components/ProductsList'
import { carritoContext } from "../context/CarritoContext";


const Home = ({productos}) => {
    const {agregarAlCarrito} = useContext(carritoContext)
    return (
      <Container className="mt-4">
        <h1>Todos los productos</h1>
        <ProductsList productos={productos} addToCart={agregarAlCarrito} />
      </Container>
    );
  };
  
  export default Home;