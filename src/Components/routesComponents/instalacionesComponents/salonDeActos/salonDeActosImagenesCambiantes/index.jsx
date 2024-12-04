import React, { useEffect, useState } from 'react';
import './styles.css';
import imagen_1 from '../../../../../Images/instalaciones/salonDeActos/salondeactos_imagen1.jpg';
import imagen_2 from '../../../../../Images/instalaciones/salonDeActos/salondeactos_imagen2.jpg';





export const SalonDeActosImagenesCambiantes = ( ) => {


    const images = [
        imagen_1,
        imagen_2,
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
        <>


            <div className="SalonDeActosImagenesCambiantes-image-container">

                <div
                    className={`SalonDeActosImagenesCambiantes-image ${isFading ? 'SalonDeActosImagenesCambiantes-fade-in' : 'SalonDeActosImagenesCambiantes-fade-out'}`}
                    style={{ backgroundImage: `url(${images[currentImage]})` }}
                />
                
            </div>


        </>
    );
};