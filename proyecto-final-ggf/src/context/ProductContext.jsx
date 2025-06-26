import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error("Error al cargar productos", err));
  }, []);

  const crearProducto = (nuevoProducto) => {
    setProductos(prev => [...prev, nuevoProducto]);
  };

  const editarProducto = (productoEditado) => {
    setProductos(prev =>
      prev.map(prod => prod.id === productoEditado.id ? productoEditado : prod)
    );
  };

  const eliminarProducto = (indexToRemove) => {
    setProductos(prev => prev.filter((_, index) => index !== indexToRemove));
  };


  return (
    <ProductContext.Provider value={{ productos, crearProducto, editarProducto, eliminarProducto }}>
      {children}
    </ProductContext.Provider>
  );
}
