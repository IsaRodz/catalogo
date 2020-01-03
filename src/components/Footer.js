import React from 'react';

export default function Footer() {
    let year = new Date().getFullYear();
    return (
        <footer>
            <div className="container">
                <div className="small">
                    Desarrollado por Isaac Rodríguez &copy; {year}
                </div>
            </div>
        </footer>
    );
}
