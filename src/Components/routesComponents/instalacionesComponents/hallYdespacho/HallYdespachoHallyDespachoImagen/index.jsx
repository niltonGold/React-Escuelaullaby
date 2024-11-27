import React from 'react';
import './styles.css';
import imagen_1 from '../../../../../Images/instalaciones/hallYDespacho/hallydespachoImagen.jpg';


export const HallYdespachoImagen = () => {

    return (

            <div className="HallYdespachoImagen-image-container">
                <div
                    className={`HallYdespachoImagen-image`}
                    style={{ backgroundImage: `url(${imagen_1})` }}
                />
            </div>

    );
};