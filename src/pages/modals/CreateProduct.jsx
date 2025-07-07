import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CreateProduct = ({ show, setShow, crearProducto }) => {
  const [errores, setErrores] = useState({})
  const [nuevoProducto, setNuevoProducto] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto(prev => ({ ...prev, [name]: value }));
  };

  const handleCrear = () => {
    if (validarProducto(nuevoProducto)) {
      crearProducto(nuevoProducto);
      setShow(false);
      setNuevoProducto({ title: '', price: '', description: '', image: '' });
      setErrores({})
    }
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
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Crear nuevo producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Group>
              <Form.Label>Título</Form.Label>
              <Form.Control type="text" name="title" value={nuevoProducto.title} onChange={handleChange} isInvalid={!!errores.title}/>
              <Form.Control.Feedback type="invalid">
                {errores.title}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
               <Form.Label>Precio</Form.Label>
               <Form.Control type="number" name="price" value={nuevoProducto.price} onChange={handleChange} isInvalid={!!errores.price}/>
               <Form.Control.Feedback type="invalid">
                 {errores.price}
               </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" name="description" value={nuevoProducto.description} onChange={handleChange} isInvalid={!!errores.description}/>
              <Form.Control.Feedback type="invalid">
                {errores.description}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control type="text" name="image" value={nuevoProducto.image} onChange={handleChange} />
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {setNuevoProducto({ title: '', price: '', description: '', image: '' }), setErrores({}), setShow(false)}}>Cancelar</Button>
        <Button variant="primary" onClick={handleCrear}>Crear</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateProduct;
