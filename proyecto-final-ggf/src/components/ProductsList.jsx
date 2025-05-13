import React from "react";
import { Navbar, Nav, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './css/cards.css'


const ProductsList = ({ productos, addToCart, deleteFromCart }) => {
    return (
      <Container className='mt-4'>
        <Row>
          {productos.map((prod) => (
            <Col md={4} key={prod.id} className="mb-4">
              <Card className="card-fixed">
                <Card.Img variant="top" src={prod.image} className="card-img-top" />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{prod.title}</Card.Title>
                  <Card.Subtitle>${prod.price}</Card.Subtitle>
                  <Card.Text className="card-text">{prod.description}</Card.Text>
  
                  {addToCart && (
                    <button
                      type="button"
                      className="card-button"
                      onClick={() => addToCart(prod)}
                    >
                      Add to cart
                    </button>
                  )}
                  {deleteFromCart && (
                    <button
                      type="button"
                      className="delete-button card-button"
                      onClick={() => deleteFromCart(prod)}
                    >
                      Delete
                    </button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  
  export default ProductsList;