import React, { useEffect, useState } from 'react';
import './styles.css';
import imagen_1 from '../../../../../Images/instalaciones/aulas/exploradores/exploradores_1.jpg';
import imagen_2 from '../../../../../Images/instalaciones/aulas/exploradores/exploradores_2.jpg';
import imagen_3 from '../../../../../Images/instalaciones/aulas/exploradores/exploradores_3.jpg';
import imagen_4 from '../../../../../Images/instalaciones/aulas/exploradores/exploradores_4.jpg';




export const AulasExploradoresImagenes = ( ) => {

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

            <div className="AulasExploradoresImagenes-image-container">
                <div
                    className={`AulasExploradoresImagenes-image ${isFading ? 'AulasExploradoresImagenes-fade-in' : 'AulasExploradoresImagenes-fade-out'}`}
                    style={{ backgroundImage: `url(${images[currentImage]})` }}
                />
            </div>

    );
};