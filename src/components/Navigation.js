import React from 'react';
import { Link } from 'react-router-dom';
import './scss/navigation.scss';

export default function Navigation() {

    return (
        <header>
            <div className="container">
                <div className="logo">
                    Logo
                </div>
                <nav>
                    <Link to="/">Inicio</Link>
                    <Link to="/catalogo">Catálogo</Link>
                    <Link to="contacto">Contacto</Link>
                </nav>
            </div>
        </header>
    );
}
