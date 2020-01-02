import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

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
        <div className="container">
            <h1>Catálogo</h1>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id} >
                            <Link to={`vehiculo/${item.id}`}>
                                <h6>
                                    {item.modelo}
                                </h6>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Catalogue;