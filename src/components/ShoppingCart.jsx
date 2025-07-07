import React, { useContext } from "react";
import { Navbar, Nav, Button, Container, Row, Col, Card } from "react-bootstrap";
import './css/cards.css'
import ProductsList from "./ProductsList";
import { CarritoContext } from "../context/CarritoContext";


const ShoppingCart = () => {
  const {productosCarrito, eliminarDelCarrito, limpiarCarrito} = useContext(CarritoContext)
    return (
      <Container className="mt-4">
        <h1>Carrito de compras actual</h1>
        {productosCarrito.length === 0 ? (
          <p className="card-text">El carrito está vacío.</p>
        ) : (
          <div>
              <ProductsList productos={productosCarrito} deleteFromCart={eliminarDelCarrito}/>
              <Button
                variant="danger"
                className="h-auto"
                disabled={productosCarrito.length === 0}
                onClick={limpiarCarrito}>
                Vaciar carrito
              </Button>
          </div>
        )}

      </Container>
    )
}

export default ShoppingCart