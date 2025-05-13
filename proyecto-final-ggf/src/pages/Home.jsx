import React from "react";
import { Container } from "react-bootstrap";
import '../App.css'
import ProductsList from '../components/ProductsList'


const Home = ({ productos, addToCart }) => {
    return (
      <Container className="mt-4">
        <h1>Todos los productos</h1>
        <ProductsList productos={productos} addToCart={addToCart} />
      </Container>
    );
  };
  
  export default Home;