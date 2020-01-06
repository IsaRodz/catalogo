import React from 'react';
import './scss/form.scss';

export default function ContactForm(props) {
    return (
        <div className="form">
            <h4>Cotiza tu BMW</h4>
            <form>
                <div className="grid-row">
                    <span>
                        <label htmlFor="names">Nombres y apellidos</label>
                        <input id="names" />
                    </span>
                    <span>
                        <label htmlFor="dni">DNI</label>
                        <input id="dni" />
                    </span>
                </div>
                <div className="grid-row">
                    <span>
                        <label htmlFor="email">Correo electrónico</label>
                        <input id="email" />
                    </span>
                    <span>
                        <label htmlFor="phone">Celular</label>
                        <input id="phone" />
                    </span>
                </div>
                <div>
                    <span>
                        <label htmlFor="address">Dirección</label>
                        <input id="address" />
                    </span>
                    <span>
                        <label htmlFor="modelo">Modelo</label>
                        <input id="modelo" value={props.modelo} />
                        <input type="hidden" value={props.placa} />
                    </span>
                    <button className="btn">Enviar</button>
                </div>
            </form>
        </div>
    );
}
