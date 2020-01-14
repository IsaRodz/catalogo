import React from 'react'

export default function InfoTable(props) {
    return (
        <>
            <h4>Detalles del vehículo</h4>
            <table>
                <tbody>
                    <tr>
                        <td>Modelo:</td>
                        <td>{props.modelo}</td>
                    </tr>
                    <tr>
                        <td>Año de fabricación:</td>
                        <td>{props.afabricacion}</td>
                    </tr>
                    <tr>
                        <td>Año de modelo:</td>
                        <td>{props.amodelo}</td>
                    </tr>
                    <tr>
                        <td>Kilometraje:</td>
                        <td>{props.km}</td>
                    </tr>
                    <tr>
                        <td>Color:</td>
                        <td>{props.color}</td>
                    </tr>
                    <tr>
                        <td>Tapicería:</td>
                        <td>{props.tapiceria}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
