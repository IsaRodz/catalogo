import React from 'react'
import Banner from './Banner';
import background from '../images/06.jpg';
import ContactForm from './ContactForm';
import InfoList from './InfoList';

export default function Contact() {
    document.title = 'BPS | Contacto';
    document.documentElement.scrollTop = 0;
    return (
        <>
            <Banner title="Contacto"
                backgroundImage={background}
            />
            <div className="container">
                <div className="flex-row">
                    <ContactForm />
                    <InfoList />
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.6174890561788!2d-76.9708214070941!3d-12.096059708057005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7a67836cbdb%3A0x8391fe7c34d04607!2sEl%20Polo%201117%2C%20Santiago%20de%20Surco%2015023!5e0!3m2!1ses!2spe!4v1573167871980!5m2!1ses!2spe" title="Mapa"> </iframe>
            </div>
        </>
    )

}
