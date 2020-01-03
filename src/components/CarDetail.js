import React, { useState, useEffect } from 'react';
import './scss/carDetail.scss';
import Banner from './Banner';


function CarDetail({ match }) {

    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({
        color: [],
        imagenes: []
    });

    const fetchItem = async () => {
        let url = `http://localhost/catalogo_bps/api/carDetail.php?id=${match.params.id}`;
        let data = await fetch(url);
        let response = await data.json();
        setItem(response);
    }

    return (
        <>
            <Banner title={`${item.marca} ${item.modelo}`}
                backgroundImage={`http://localhost/catalogo_bps/vehiculos/${item.placa}/${item.imagen}`}
            />
            <div className="container">
                <div className="grid-row">
                    <div>
                        <h4>Detalles del vehículo</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Modelo:</td>
                                    <td>{item.modelo}</td>
                                </tr>
                                <tr>
                                    <td>Año de fabricación:</td>
                                    <td>{item.afabricacion}</td>
                                </tr>
                                <tr>
                                    <td>Kilometraje:</td>
                                    <td>{item.km}</td>
                                </tr>
                                <tr>
                                    <td>Color:</td>
                                    <td>{item.color[0]}</td>
                                </tr>
                                <tr>
                                    <td>Tapicería:</td>
                                    <td>{item.color[1]}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h4>Galería</h4>
                        <div className="grid-gallery">
                            {
                                item.imagenes.map(img => (
                                    <div className="image-container">
                                        <img src={`http://localhost/catalogo_bps/vehiculos/${item.placa}/${img}`}
                                            alt={img} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <button className="btn">Cotizar </button>
            </div>
        </>
    );
}

export default CarDetail;