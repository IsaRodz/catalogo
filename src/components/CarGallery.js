import React, { useState } from 'react'
// import Slider from 'react-slick'

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function CarGallery(props) {

    const [image, setImage] = useState(false)

    const openImage = (e) => {
        let modalImage = document.getElementById('modal-image')
        modalImage.setAttribute('src', e.target.src)
        setImage(true)
    }


    return (
        <div className="gallery">
            <h4>Galería</h4>
            <div className="grid-gallery">
                {props.imagenes.map((img, index) => (
                    <div className="image-container" key={index}>
                        <img onClick={openImage}
                            src={`${props.imgUrl}${props.placa}/${img}`}
                            alt={img} />
                    </div>
                ))}
            </div>
            <div className={image ? "modalOverlay active" : "modalOverlay"} onClick={() => setImage(false)}></div>
            <img id="modal-image" className={image ? 'modal-image active' : 'modal-image'} alt="Car" />

            <div className={image ? 'modal-overlay active' : 'modal-overlay'} ></div>
        </div>
    )
}

export default CarGallery
