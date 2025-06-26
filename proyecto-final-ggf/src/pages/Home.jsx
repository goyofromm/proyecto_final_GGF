import {React, useContext} from "react";
import { Container } from "react-bootstrap";
import '../App.css'
import ProductsList from '../components/ProductsList'
import { CarritoContext } from "../context/CarritoContext";
import { ProductContext } from "../context/ProductContext";


const Home = () => {
    const {agregarAlCarrito} = useContext(CarritoContext)
    const {productos} = useContext(ProductContext)
    return (
      <Container className="mt-4">
        <h1>Todos los productos</h1>
        <ProductsList productos={productos} addToCart={agregarAlCarrito} />
      </Container>
    );
  };
  
  export default Home;