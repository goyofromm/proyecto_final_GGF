import {createContext, useState} from 'react'
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

export const CarritoContext = createContext();

export function CarritoProvider({children}){
  const [productosCarrito, setProductosCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setProductosCarrito([...productosCarrito, producto ])
    toast.success('Producto Añadido!!')
  }

  const eliminarDelCarrito = (indexToRemove) => {
    setProductosCarrito(prev => prev.filter((_, index) => index !== indexToRemove))
    toast.success('Producto Eliminado')
  } 

  const limpiarCarrito = () => {
    setProductosCarrito([]);
    toast.success('Carrito vaciado')
  };

  return(
    <CarritoContext.Provider value={{ productosCarrito, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito}}>
      {children}
    </CarritoContext.Provider>
  )
}
