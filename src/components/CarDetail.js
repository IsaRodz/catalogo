import React, { useState, useEffect } from 'react'

function CarDetail({ match }) {

    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        let url = `http://localhost/catalogo_bps/api/carDetail.php?id=${match.params.id}`;
        let data = await fetch(url);
        let response = await data.json();
        // console.log(response);
        setItem(response);
    }

    return (
        <div className="container">
            <h1>{item.marca} {item.modelo}</h1>
            <img src={`http://localhost/catalogo_bps/vehiculos/${item.placa}/${item.imagen}.JPG`} alt="" />
        </div>
    )
}

export default CarDetail;