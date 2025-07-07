import React from "react";
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="text-white text-center py-3 mt-auto" style={{ backgroundColor: '#8B0000' }}>
      <Container>
        <p className="mb-0">© 2025 Gregorio Gonzalez Fromm. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}

export default Footer