import React from "react";
import { Navbar, Nav, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './css/cards.css'

const ProductsList = ({ productos, addToCart, deleteFromCart }) => {
    return (
      <Container className='mt-4'>
        <Row>
          {productos.map((prod, index) => (
            <Col md={4} key={index} className="mb-4 d-flex">
              <Card className="card-fixed">
                <Card.Img variant="top" src={prod.image} className="card-img-top" />
                <Card.Body classNazme="d-flex flex-column justify-content-between">
                  <Card.Title>{prod.title}</Card.Title>
                  <Card.Subtitle className="card-price">${prod.price}</Card.Subtitle>
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
                      onClick={() => deleteFromCart(index)}
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