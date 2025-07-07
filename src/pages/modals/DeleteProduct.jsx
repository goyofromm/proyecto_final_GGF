import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { toast } from 'react-toastify';

const DeleteProduct = ({
  show,
  setShow,
  productos,
  eliminarProducto
}) => {
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  const handleEliminar = () => {
    const ordenados = [...productosSeleccionados].sort((a, b) => b - a);
    ordenados.forEach(index => eliminarProducto(productos[index].id));
    setProductosSeleccionados([]);
    setShow(false);
  };

  const handleToggleProducto = (index) => {
    setProductosSeleccionados((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
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
                onChange={() => handleToggleProducto(index)}
              />
            ))}
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>Cancelar</Button>
        <Button
          variant="danger"
          disabled={productosSeleccionados.length === 0}
          onClick={handleEliminar}>
          Eliminar seleccionados
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteProduct;
