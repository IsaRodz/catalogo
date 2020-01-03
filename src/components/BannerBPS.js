import React from 'react';
import background from '../images/05.jpg';

export default function BannerBPS() {
    let bannerStyle = {
        backgroundImage: `linear-gradient(rgba(63,81,181,.5),rgba(103,58,183,.25)), url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div className="banner bps"
            style={bannerStyle}>
            <div className="container">
                <h2>BMW Premium Selection</h2>
            </div>
        </div>
    );
}
