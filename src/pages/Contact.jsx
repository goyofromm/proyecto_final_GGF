import React from "react";
import { Container } from "react-bootstrap";
import '../App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../components/css/cards.css'

const Contact=()=>
    {
        return(
            <Container className="mt-4 container-cart">
                <h1 className="card-title">Como podemos ayudarte?</h1>
                <p className="card-text">Nos pondremos en contacto con usted a la brevedad</p>
                <div className="contact-input">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email@ejemplo.com"/>
                </div>
                <div className="contact-input">
                    <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="button" class="btn btn-secondary btn-lg">Enviar</button>
                <div className="d-flex gap-3 justify-content-center">
                    <a href="https://wa.me/xxxxxxxxxxx" target="_blank"  rel="noopener noreferrer" className="btn btn-lg">
                        <i className="fab fa-whatsapp fa-lg"/>
                    </a>
                    <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="btn btn-lg">
                        <i className="fab fa-instagram fa-lg"/>
                    </a>
                    <a href="https://www.facebook.com/tuusuario" target="_blank" rel="noopener noreferrer" className="btn btn-lg">
                        <i className="fab fa-facebook-f fa-lg"></i>
                    </a>
                </div>
            </Container>
        );
    };

export default Contact;