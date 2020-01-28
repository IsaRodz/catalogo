import React, { useState, useEffect } from 'react';
import './scss/carDetail.scss';
import Banner from './Banner';
import BannerBPS from './BannerBPS';
import Features from './Features';
import InfoTable from './InfoTablejs';
import Modal from './Modal';
import CarGallery from './CarGallery';

function CarDetail({ match }) {

    useEffect(() => {
        fetchItem();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [item, setItem] = useState({
        color: [],
        imagenes: []
    });

    const fetchItem = async () => {
        let { id } = await match.params;
        return fetch(`http://localhost/catalogo_bps/api/carDetail.php?id=${id}`)
            .then(data => data.json())
            .then(response => setItem(response))
    }

    const toggleModal = () => {
        let modal = document.querySelector('.modal');
        let overlay = document.querySelector('.modalOverlay');

        modal.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('noscroll');
    }

    // const showImage = e => console.log('Clicked the image: ' + e.target.src);
    const imgUrl = 'http://localhost/catalogo_bps/vehiculos/';

    document.title = `BPS | ${item.marca} ${item.modelo}`;
    document.documentElement.scrollTop = 0;

    return (

        <div className="carDetail">
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
                    <CarGallery imagenes={item.imagenes} imgUrl={imgUrl} placa={item.placa} />
                </div>
                <button className="btn large" onClick={toggleModal}>
                    Cotiza ahora
                </button>
            </div>
            <BannerBPS />
            <Features />
            <Modal
                toggleModal={toggleModal}
                marca={item.marca}
                modelo={item.modelo}
                placa={item.placa}
            />
        </div>
    );
}

export default CarDetail;