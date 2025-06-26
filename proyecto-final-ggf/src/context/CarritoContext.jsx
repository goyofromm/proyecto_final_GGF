import {createContext, useState} from 'react'
import Swal from 'sweetalert2';

export const CarritoContext = createContext();

  const showAlertMessage = (message, icon)=> {
    Swal.fire({
      title: message,
      icon: icon,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }


export function CarritoProvider({children}){
  const [productosCarrito, setProductosCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setProductosCarrito([...productosCarrito, producto ])
    showAlertMessage("Agregado con exito!", "success" )
  }

  const eliminarDelCarrito = (indexToRemove) => {
    setProductosCarrito(prev => prev.filter((_, index) => index !== indexToRemove))
  } 

  return(
    <CarritoContext.Provider value={{ productosCarrito, agregarAlCarrito, eliminarDelCarrito}}>
      {children}
    </CarritoContext.Provider>
  )
}
