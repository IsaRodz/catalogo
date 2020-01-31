import React from 'react';
import './scss/form.scss';
import Swal from 'sweetalert2';

export default function ContactForm(props) {

    const handleSubmit = e => {
        e.preventDefault();

        // inicializar variables
        let data = new FormData(e.target),
            url = 'http://localhost/catalogo_bps/api/process.php',
            button = e.target.querySelector('.btn'),
            inputs = e.target.querySelectorAll('input');

        // Deshabilitar botón 
        button.setAttribute('disabled', 'true');
        button.innerText = 'Procesando...';

        // Consulta api
        fetch(url, {
            body: data,
            method: 'post',
        })
            .then(response => response.text())
            .then(result => {
                console.log(result);

                button.removeAttribute('disabled');
                button.innerText = 'Enviado';

                Swal.fire({
                    toast: true,
                    position: 'bottom-right',
                    title: "Solicitud enviada",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 5000
                });

                inputs.forEach(input => input.value = '')
                // if (props.hideModal) props.hideModal();
            })
            .catch(error => {
                console.log("Ocurrió un error: ", error)
                Swal.fire({
                    toast: true,
                    position: 'bottom',
                    title: "Ocurrió un error. Intenta de nuevo más tarde",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 5000
                });
            })
    }

    return (
        <div className="form">
            <h4>Cotiza tu BMW</h4>
            <form onSubmit={handleSubmit}>
                <div className="grid-row">
                    <span>
                        <label htmlFor="names">Nombres y apellidos</label>
                        <input id="names" name="names" required />
                    </span>
                    <span>
                        <label htmlFor="dni">DNI</label>
                        <input id="dni" name="dni" required />
                    </span>
                </div>
                <div className="grid-row">
                    <span>
                        <label htmlFor="email">Correo electrónico</label>
                        <input id="email" name="email" required />
                    </span>
                    <span>
                        <label htmlFor="phone">Celular</label>
                        <input id="phone" name="phone" required />
                    </span>
                </div>
                <div>
                    <span>
                        <label htmlFor="address">Dirección</label>
                        <input id="address" name="address" required />
                    </span>
                    {
                        props.modelo ? (
                            <span>
                                <label htmlFor="modelo">Modelo</label>

                                <input id="modelo" name="modelo" value={props.modelo} readOnly />
                                <input type="hidden" name="placa" value={props.placa} readOnly />
                            </span>
                        ) : null
                    }
                    <button className="btn">Enviar</button>
                </div>
            </form>
        </div>
    );
}
