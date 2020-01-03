import React from 'react';
import './scss/banner.scss';

export default function Banner(props) {

    let bannerStyle = {
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div className="banner" style={bannerStyle} >
            <div className="container">
                <h1>{props.title}</h1>
                {props.subtitle ? <h4>{props.subtitle}</h4> : ''}
            </div>
        </div>
    );
}
