import React from "react";
import { Navbar, Nav, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './css/cards.css'
import ProductsList from "./ProductsList";


const ShoppingCart = ({ productosCarrito, deleteFromCart })=> {
    return (
      <Container className="mt-4">
        <h1>Carrito de compras actual</h1>
        {productosCarrito.length === 0 ? (
          <p className="card-text">El carrito está vacío.</p>
        ) : (
          <ProductsList productos={productosCarrito} deleteFromCart={deleteFromCart}/>
        )}
      </Container>
    )
}

export default ShoppingCart