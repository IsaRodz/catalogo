import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import background from '../images/07.jpg';

export default function Home() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        let url = 'http://localhost/catalogo_bps/api/destacados.php';
        let data = await fetch(url);
        let response = await data.json();
        // console.log(response);
        setItems(response);
    }
    return (
        <>
            <Banner title="BMW Premium Selection"
                subtitle="Vehículos seminuevos certificados"
                backgroundImage={background} />
            <div className="container">
                <h1>Destacados</h1>
                <div className="carlist-grid">
                    {
                        items.map(item => (
                            <div className="auto-card"
                                key={item.id} >
                                <Link to={`vehiculo/${item.id}`}>
                                    <img src={`http://localhost/catalogo_bps/vehiculos/${item.placa}/${item.imagen}.JPG`} alt="" />
                                    <div className="text">
                                        <h6>
                                            {item.marca}{item.modelo}
                                        </h6>
                                        <p>Año {item.afabricacion}</p>
                                        <p>{item.km} Kms</p>
                                        <p>{item.precio}</p>
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
