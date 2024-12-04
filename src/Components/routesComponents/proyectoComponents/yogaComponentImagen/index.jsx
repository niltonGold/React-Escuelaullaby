import React from 'react';
import './styles.css';
import imagen_1 from '../../../../Images/proyecto/yoga/yogaImagen_1.jpg';


export const YogaComponentImagen = () => {

    return (

            <div className="YogaComponentImagen-image-container">
                <div
                    className={`YogaComponentImagen-image`}
                    style={{ backgroundImage: `url(${imagen_1})` }}
                />
            </div>

    );
};