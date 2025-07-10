import {React, useContext, useState} from "react";
import { Container } from "react-bootstrap";
import '../App.css'
import ProductsList from '../components/ProductsList'
import { CarritoContext } from "../context/CarritoContext";
import { ProductContext } from "../context/ProductContext";
import SearchBar from "../components/SearchBar";


const Home = () => {
    const {agregarAlCarrito} = useContext(CarritoContext)
    const {productos} = useContext(ProductContext)

    const [searchTerm, setSearchTerm] = useState("");

    const productosFiltrados = productos.filter((prod) =>
      prod.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className="mt-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <ProductsList productos={productosFiltrados} addToCart={agregarAlCarrito} />
        </Container>

    );
  };
  
  export default Home;