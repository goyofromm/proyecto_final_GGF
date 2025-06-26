import { useContext, useState } from 'react';
import { Container, Modal, Button, Form } from 'react-bootstrap';
import { ProductContext } from '../context/ProductContext';

const Admin = () => {
  const { productos, crearProducto, eliminarProducto } = useContext(ProductContext);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [nuevoProducto, setNuevoProducto] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto(prev => ({ ...prev, [name]: value }));
  };

  const handleCrear = () => {
    const productoConId = { ...nuevoProducto, id: crypto.randomUUID() };
    crearProducto(productoConId);
    setShowCreateModal(false);
    setNuevoProducto({ title: '', price: '', description: '', image: '' });
  };

  const handleEliminar = () => {
    const ordenados = [...productosSeleccionados].sort((a, b) => b - a);
    ordenados.forEach(index => eliminarProducto(index));
    setProductosSeleccionados([]);
    setShowDeleteModal(false);
  };

  return (
    <Container className="mt-4 d-flex flex-column">
      <h2 className='d-flex justify-content-center'>Panel de Administración</h2>
      <div className='d-flex justify-content-evenly'>
        <button className="btn btn-success w-30" onClick={() => setShowCreateModal(true)}>Crear producto</button>
        <button className="btn btn-warning w-30">Modificar producto</button>
        <button className="btn btn-danger w-30" onClick={() => setShowDeleteModal(true)}>Eliminar producto</button>
      </div>

      <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Título</Form.Label>
              <Form.Control type="text" name="title" value={nuevoProducto.title} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" name="price" value={nuevoProducto.price} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" name="description" value={nuevoProducto.description} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control type="text" name="image" value={nuevoProducto.image} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCreateModal(false)}>Cancelar</Button>
          <Button variant="primary" onClick={handleCrear}>Crear</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar productos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productos.length === 0 ? (
            <p>No hay productos disponibles.</p>
          ) : (
            <Form>
              {productos.map((prod, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  id={`prod-${index}`}
                  label={prod.title}
                  checked={productosSeleccionados.includes(index)}
                  onChange={() => {
                    setProductosSeleccionados((prev) =>
                      prev.includes(index)
                        ? prev.filter((i) => i !== index)
                        : [...prev, index]
                    );
                  }}
                />
              ))}
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancelar</Button>
          <Button
            variant="danger"
            disabled={productosSeleccionados.length === 0}
            onClick={handleEliminar}>
            Eliminar seleccionados
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
};

export default Admin;
