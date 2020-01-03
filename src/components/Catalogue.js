import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import Banner from './Banner';
import background from '../images/08.jpg';

import './scss/catalogue.scss';

function Catalogue() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        let url = 'http://localhost/catalogo_bps/api/catalogue.php';
        let data = await fetch(url);
        let response = await data.json();
        // console.log(response);
        setItems(response);
    }
    return (
        <>
            <Banner title="Catálogo" backgroundImage={background} />
            <div className="container">
                <div className="carlist-grid">
                    {
                        items.map(item => (
                            <div className="auto-card"
                                key={item.id} >
                                <Link to={`vehiculo/${item.id}`}>
                                    <img src={`http://localhost/catalogo_bps/vehiculos/${item.placa}/${item.imagen}.JPG`} alt="" />
                                    <div className="text">
                                        <h6>
                                            {item.modelo}
                                        </h6>
                                        <p>{item.precio}</p>
                                        <p>{item.km} Kms</p>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Catalogue;