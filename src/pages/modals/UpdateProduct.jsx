import { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from 'react-toastify';
import { ProductContext } from "../../context/ProductContext";

const UpdateProduct = ({ show, setShow, productos, actualizarProducto }) => {
    const [errores, setErrores] = useState({})
    const [selectedId, setSelectedId] = useState('');
    const [updatedProducto, setUpdatedProducto] = useState({
      title: '',
      price: '',
      description: '',
      image: '',
    });
  
    useEffect(() => {
      if (selectedId) {
        const prod = productos.find(p => p.id === selectedId);
        if (prod) setUpdatedProducto(prod);
      }
    }, [selectedId, productos]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUpdatedProducto(prev => ({ ...prev, [name]: value }));
    };

    const handleGuardarCambios = () => {
      if (validarProducto(updatedProducto)) {
        actualizarProducto(updatedProducto);
        setErrores({});
        setSelectedId('');
        setUpdatedProducto({ id: '', title: '', price: '', description: '', image: '' });
        setShow(false);
      }
    };

    const handleCerrar = () => {
      setErrores({});
      setSelectedId('');
      setUpdatedProducto({ id: '', title: '', price: '', description: '', image: '' });
      setShow(false);
    };

    const validarProducto = (producto) => {
      const nuevosErrores = {};
      if (!producto.title.trim()) {
        nuevosErrores.title = 'El título es obligatorio';
      }
      if (!producto.price || producto.price <= 0) {
        nuevosErrores.price = 'El precio debe ser mayor a 0';
      }
      if (!producto.description.trim() || producto.description.length < 10) {
        nuevosErrores.description = 'La descripción debe tener al menos 10 caracteres';
      }
      setErrores(nuevosErrores);
      return Object.keys(nuevosErrores).length === 0;
    };


 return (
    <Modal show={show} onHide={handleCerrar}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Seleccionar producto</Form.Label>
            <Form.Select
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
            >
              <option value="">-- Seleccioná un producto --</option>
              {productos.map(prod => (
                <option key={prod.id} value={prod.id}>
                  {prod.title}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          {selectedId && (
            <>
              <Form.Group>
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={updatedProducto.title}
                  onChange={handleChange}
                  isInvalid={!!errores.title}
                />
                <Form.Control.Feedback type="invalid">{errores.title}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={updatedProducto.price}
                  onChange={handleChange}
                  isInvalid={!!errores.price}
                />
                <Form.Control.Feedback type="invalid">{errores.price}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={updatedProducto.description}
                  onChange={handleChange}
                  isInvalid={!!errores.description}
                />
                <Form.Control.Feedback type="invalid">{errores.description}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Imagen (URL)</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  value={updatedProducto.image}
                  onChange={handleChange}
                />
              </Form.Group>
            </>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCerrar}>Cancelar</Button>
        <Button variant="primary" disabled={!selectedId} onClick={handleGuardarCambios}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateProduct;
