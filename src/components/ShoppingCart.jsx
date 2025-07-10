import React, { useContext } from "react";
import { Navbar, Nav, Button, Container, Row, Col, Card } from "react-bootstrap";
import './css/cards.css'
import ProductsList from "./ProductsList";
import { CarritoContext } from "../context/CarritoContext";


const ShoppingCart = () => {
  const {productosCarrito, eliminarDelCarrito, limpiarCarrito} = useContext(CarritoContext)
    return (
      <Container className="mt-4 container-cart">
        <h1 className="card-title">Carrito de compras 🛒</h1>
        <Button
          variant="danger"
          className="h-auto"
          hidden={productosCarrito.length === 0}
          onClick={limpiarCarrito}>
          Vaciar carrito
        </Button>
        {productosCarrito.length === 0 ? (
          <p className="card-empty">El carrito está vacío.</p>
        ) : (
          <div className="list-products">
              <ProductsList productos={productosCarrito} deleteFromCart={eliminarDelCarrito}/>
              
          </div>
        )}

      </Container>
    )
}

export default ShoppingCart