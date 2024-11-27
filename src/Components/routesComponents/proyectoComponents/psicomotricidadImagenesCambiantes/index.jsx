import React, { useEffect, useState } from 'react';
import './styles.css';
import imagen_1 from '../../../../Images/proyecto/psicomotricidad/psicomotricidadImagen_1.jpg';
import imagen_2 from '../../../../Images/proyecto/psicomotricidad/psicomotricidadImagen_2.jpg';
import imagen_3 from '../../../../Images/proyecto/psicomotricidad/psicomotricidadImagen_3.jpg';
import imagen_4 from '../../../../Images/proyecto/psicomotricidad/psicomotricidadImagen_4.jpg';
import imagen_5 from '../../../../Images/proyecto/psicomotricidad/psicomotricidadImagen_5.jpg';





export const PsicomotricidadImagenesCambiantes = ( ) => {

    const images = [
        imagen_1,
        imagen_2,
        imagen_3,
        imagen_4,
        imagen_5,
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

            <div className="PsicomotricidadImagenesCambiantes-image-container">
                <div
                    className={`PsicomotricidadImagenesCambiantes-image ${isFading ? 'PsicomotricidadImagenesCambiantes-fade-in' : 'PsicomotricidadImagenesCambiantes-fade-out'}`}
                    style={{ backgroundImage: `url(${images[currentImage]})` }}
                />
            </div>

    );
};