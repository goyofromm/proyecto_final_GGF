import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { CarritoProvider } from './context/CarritoContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CarritoProvider>
            <App/>
      </CarritoProvider>
  </React.StrictMode>,
)
