import { useContext, useState } from 'react';
import { Container, Modal, Button, Form } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';
import CreateProduct from './modals/CreateProduct';
import DeleteProduct from './modals/DeleteProduct';
const Admin = () => {
  const { productos, crearProducto, eliminarProducto } = useContext(ProductContext);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <Container className="mt-4 d-flex flex-column">
      <h2 className='d-flex justify-content-center'>Panel de Administración</h2>
      <div className='d-flex justify-content-evenly'>
        <button className="btn btn-success w-30" onClick={() => setShowCreateModal(true)}>Crear producto</button>
        <button className="btn btn-warning w-30">Modificar producto</button>
        <button className="btn btn-danger w-30" onClick={() => setShowDeleteModal(true)}>Eliminar producto</button>
      </div>

      {/* Modales como componentes controlados */}
      <CreateProduct
        show={showCreateModal}
        setShow={setShowCreateModal}
        crearProducto={crearProducto}
      />

      <DeleteProduct
        show={showDeleteModal}
        setShow={setShowDeleteModal}
        productos={productos}
        eliminarProducto={eliminarProducto}
      />
    </Container>
  );
};

export default Admin;
