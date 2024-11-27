import React from 'react';
import './styles.css';
import imagen_1 from '../../../../../Images/instalaciones/cocinayLavanderia/concinaYlavanderia_1.jpg';


export const CocinaYlavanderiaImagen = () => {

    return (

            <div className="CocinaYlavanderia-image-container">
                <div
                    className={`CocinaYlavanderia-image`}
                    style={{ backgroundImage: `url(${imagen_1})` }}
                />
            </div>

    );
};