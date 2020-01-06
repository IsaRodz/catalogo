import React from 'react';
import { Link } from 'react-router-dom';
import './scss/navigation.scss';
import logo from '../images/bps.png';

export default function Navigation() {

    window.onscroll = () => {
        let header = document.querySelector('header');
        let st = document.documentElement.scrollTop;
        if (st > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }


    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Logo BMW" />
                </div>
                <nav>
                    <Link to="/">Inicio</Link>
                    <Link to="/catalogo">Catálogo</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>
            </div>
        </header>
    );
}
