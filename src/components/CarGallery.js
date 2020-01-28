import React from 'react'
// import Slider from 'react-slick'

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function CarGallery(props) {

    return (
        <div className="gallery">
            <h4>Galería</h4>
            <div className="grid-gallery">
                {props.imagenes.map(img => (
                    <div className="image-container">
                        <img src={`${props.imgUrl}${props.placa}/${img}`} alt={img} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default CarGallery
