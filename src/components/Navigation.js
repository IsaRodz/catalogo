import React, { useState } from 'react';
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

    const [menu, setMenu] = useState(false);

    window.onclick = e => {
        let burger = document.querySelector('.burger');
        if (e.target !== burger && menu === true)
            setMenu(false)
    }
    window.addEventListener("scroll", () => setMenu(false))

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo BMW" />
                    </Link>
                </div>
                <button onClick={() => setMenu(!menu)}
                    className={menu ? 'burger active' : 'burger'}>
                    <span></span>
                </button>
                <nav className={menu ? 'active' : null}>
                    <Link onClick={() => setMenu(false)} to="/">
                        Inicio
                    </Link>
                    <Link onClick={() => setMenu(false)} to="/catalogo">
                        Catálogo
                    </Link>
                    <Link onClick={() => setMenu(false)} to="/contacto">
                        Contacto
                    </Link>
                </nav>
            </div>
        </header>
    );
}
