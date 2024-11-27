import React, { useEffect, useState } from 'react';
import './styles.css';
import imagen_1 from '../../../../../Images/instalaciones/aulas/aventureros/aventureros_1.jpg';
import imagen_2 from '../../../../../Images/instalaciones/aulas/aventureros/aventureros_2.jpg';
import imagen_3 from '../../../../../Images/instalaciones/aulas/aventureros/aventureros_3.jpg';
import imagen_4 from '../../../../../Images/instalaciones/aulas/aventureros/aventureros_4.jpg';




export const AulasAventurerosImagenes = ( ) => {

    const images = [
        imagen_1,
        imagen_2,
        imagen_3,
        imagen_4,
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [isFading, setIsFading] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsFading(false); // Desvanece la imagen actual
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length); // Cambia la imagen
                setIsFading(true); // Activa el desvanecimiento de la nueva imagen
            }, 1000); // Duración de fade-out antes de cambiar la imagen
        }, 4000); // Intervalo total para la transición y visualización

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (

            <div className="AulasAventurerosImagenes-image-container">
                <div
                    className={`AulasAventurerosImagenes-image ${isFading ? 'AulasAventurerosImagenes-fade-in' : 'AulasAventurerosImagenes-fade-out'}`}
                    style={{ backgroundImage: `url(${images[currentImage]})` }}
                />
            </div>

    );
};