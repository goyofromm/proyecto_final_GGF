import { useContext, useState } from 'react';
import { Container, Modal, Button, Form } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';
import CreateProduct from './modals/CreateProduct';
import DeleteProduct from './modals/DeleteProduct';
import '../components/css/admin.css'
import UpdateProduct from './modals/UpdateProduct';

const Admin = () => {
  const { productos, crearProducto, eliminarProducto, editarProducto } = useContext(ProductContext);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <Container className="mt-4 d-flex flex-column">
      <h2 className='d-flex justify-content-center'>Panel de Administración</h2>
      <div className="d-flex flex-column align-items-center gap-3 mt-4 botones-admin">
        <button className="btn btn-danger btn-admin" onClick={() => setShowCreateModal(true)}>
          Crear producto
        </button>
        <button className="btn btn-warning btn-admin" onClick={() => setShowUpdateModal(true)}>
          Modificar producto
        </button>
        <button className="btn btn-dark btn-admin" onClick={() => setShowDeleteModal(true)}>
          Eliminar producto
        </button>
      </div>


      <CreateProduct
        show={showCreateModal}
        setShow={setShowCreateModal}
        crearProducto={crearProducto}
      />

      <UpdateProduct
        show={showUpdateModal}
        setShow={setShowUpdateModal}
        productos={productos}
        actualizarProducto={editarProducto}
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
