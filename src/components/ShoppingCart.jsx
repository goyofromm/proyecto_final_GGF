import React, { useContext } from "react";
import { Navbar, Nav, Container, Row, Col, Card } from "react-bootstrap";
import './css/cards.css'
import ProductsList from "./ProductsList";
import { CarritoContext } from "../context/CarritoContext";


const ShoppingCart = () => {
  const {productosCarrito, eliminarDelCarrito} = useContext(CarritoContext)
    return (
      <Container className="mt-4">
        <h1>Carrito de compras actual</h1>
        {productosCarrito.length === 0 ? (
          <p className="card-text">El carrito está vacío.</p>
        ) : (
          <ProductsList productos={productosCarrito} deleteFromCart={eliminarDelCarrito}/>
        )}
      </Container>
    )
}

export default ShoppingCart