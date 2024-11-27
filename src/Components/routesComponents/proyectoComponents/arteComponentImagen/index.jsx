import React from 'react';
import './styles.css';
import imagen_1 from '../../../../Images/proyecto/arte/arteImagen.jpg';


export const ArteComponentImagen = () => {

    return (

            <div className="ArteComponentImagen-image-container">
                <div
                    className={`ArteComponentImagen-image`}
                    style={{ backgroundImage: `url(${imagen_1})` }}
                />
            </div>

    );
};