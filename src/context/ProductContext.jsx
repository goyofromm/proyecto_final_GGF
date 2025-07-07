import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const ProductContext = createContext();

const API_URL = 'https://686c1e6e14219674dcc749cf.mockapi.io/mock/api/products'

export function ProductProvider({ children }) {
  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error("Error al cargar productos", err));
  }, []);

  const crearProducto = async (nuevoProducto) => {
     try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoProducto),
      });
      const productoCreado = await res.json();
      setProductos(prev => [...prev, productoCreado]);      
      toast.success('Producto creado exitosamente!')
    } catch (err) {
      console.error("Error al crear producto", err);
      toast.error('Hubo un error al agregar el producto')
    }
  };

  const editarProducto = async (productoEditado) => {
    try {
      const res = await fetch(`${API_URL}/${productoEditado.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productoEditado),
      });
      const productoActualizado = await res.json();
      setProductos(prev =>
        prev.map(prod => prod.id === productoActualizado.id ? productoActualizado : prod)
      );
      toast.success('Producto editado exitosamente!')
    } catch (err) {
      console.error("Error al editar producto", err);
      toast.error('Hubo un error al editar el producto')
    }
  };

  const eliminarProducto = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      setProductos(prev => prev.filter(prod => prod.id !== id));
      toast.success('Producto eliminado exitosamente!')
    } catch (err) {
      console.error("Error al eliminar producto", err);
      toast.error('Hubo un error al eliminar el producto')
    }
  };


  return (
    <ProductContext.Provider value={{ productos, crearProducto, editarProducto, eliminarProducto }}>
      {children}
    </ProductContext.Provider>
  );
}
