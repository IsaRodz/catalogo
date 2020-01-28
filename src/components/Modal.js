import React from 'react'
import ContactForm from './ContactForm';
import './scss/modal.scss';

function Modal(props) {


    return (<>
        <div className="modalOverlay" onClick={props.toggleModal}></div>
        <div className="modal">
            <button className="close" onClick={props.toggleModal}>
                <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100">
                    <path d="M53.9,50L96.9,6.9c1.1-1.1,1.1-2.8,0-3.9c-1.1-1.1-2.8-1.1-3.9,0L50,46.1L6.9,3.1C5.9,2,4.1,2,3.1,3.1C2,4.1,2,5.9,3.1,6.9 L46.1,50L3.1,93.1c-1.1,1.1-1.1,2.8,0,3.9c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8L50,53.9l43.1,43.1c0.5,0.5,1.2,0.8,1.9,0.8 s1.4-0.3,1.9-0.8c1.1-1.1,1.1-2.8,0-3.9L53.9,50z" />
                </svg>
            </button>
            <ContactForm hideModal={props.toggleModal}
                modelo={`${props.marca} ${props.modelo}`}
                placa={props.placa} />
        </div>
    </>)
}

export default Modal
