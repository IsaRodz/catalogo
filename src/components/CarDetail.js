import React, { useState, useEffect } from 'react';
import './scss/carDetail.scss';
import Banner from './Banner';
import BannerBPS from './BannerBPS';
import Features from './Features';
import ContactForm from './ContactForm';
import InfoTable from './InfoTablejs';

function CarDetail({ match }) {

    useEffect(() => { fetchItem() }, []);

    const fetchItem = async () => {
        let url = `http://localhost/catalogo_bps/api/carDetail.php?id=${match.params.id}`;
        let data = await fetch(url);
        let response = await data.json();
        setItem(response);
    }

    const [item, setItem] = useState({
        color: [],
        imagenes: []
    });

    const toggleModal = () => {
        let modal = document.querySelector('.modal');
        let overlay = document.querySelector('.modalOverlay');

        modal.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('noscroll');
    }

    const showImage = e => console.log('Clicked the image: ' + e.target.src);

    const imgUrl = 'http://localhost/catalogo_bps/vehiculos/';
    document.title = `BPS | ${item.marca} ${item.modelo}`;
    document.documentElement.scrollTop = 0;
    return (
        <>
            <Banner title={`${item.marca} ${item.modelo}`}
                backgroundImage={`${imgUrl}${item.placa}/${item.imagen}`}
            />
            <div className="container">
                <div className="grid-row">
                    <div>
                        <InfoTable
                            modelo={item.modelo}
                            afabricacion={item.afabricacion}
                            amodelo={item.amodelo}
                            km={item.km}
                            color={item.color[0]}
                            tapiceria={item.color[1]}
                        />
                    </div>
                    <div>
                        <h4>Galería</h4>
                        <div className="grid-gallery">
                            {
                                item.imagenes.map((img, i) => (
                                    <div key={i} className="image-container">
                                        <img onClick={showImage}
                                            src={`${imgUrl}${item.placa}/${img}`}
                                            alt={img} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="container">
                </div>
                <button className="btn large" onClick={toggleModal}>
                    Cotiza ahora
                </button>
            </div>
            <BannerBPS />
            <Features />

            <div className="modalOverlay" onClick={toggleModal}></div>
            <div className="modal">
                <button className="close" onClick={toggleModal}>
                    <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100">
                        <path d="M53.9,50L96.9,6.9c1.1-1.1,1.1-2.8,0-3.9c-1.1-1.1-2.8-1.1-3.9,0L50,46.1L6.9,3.1C5.9,2,4.1,2,3.1,3.1C2,4.1,2,5.9,3.1,6.9 L46.1,50L3.1,93.1c-1.1,1.1-1.1,2.8,0,3.9c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8L50,53.9l43.1,43.1c0.5,0.5,1.2,0.8,1.9,0.8 s1.4-0.3,1.9-0.8c1.1-1.1,1.1-2.8,0-3.9L53.9,50z" />
                    </svg>
                </button>
                <ContactForm hideModal={toggleModal}
                    modelo={`${item.marca} ${item.modelo}`}
                    placa={item.placa} />
            </div>
        </>
    );
}

export default CarDetail;