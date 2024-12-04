import React, { useEffect, useState } from 'react';
import './styles.css';
import imagen_1 from '../../../../../Images/instalaciones/aulas/darwin/darwin_1.jpg';
import imagen_2 from '../../../../../Images/instalaciones/aulas/darwin/darwin_2.jpg';
import imagen_3 from '../../../../../Images/instalaciones/aulas/darwin/darwin_3.jpg';
import imagen_4 from '../../../../../Images/instalaciones/aulas/darwin/darwin_4.jpg';
import imagen_5 from '../../../../../Images/instalaciones/aulas/darwin/darwin_5.jpg';
import imagen_6 from '../../../../../Images/instalaciones/aulas/darwin/darwin_6.jpg';





export const AulasDarwinImagenes = ( ) => {


    const images = [
        imagen_1,
        imagen_2,
        imagen_3,
        imagen_4,
        imagen_5,
        imagen_6,
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


            <div className="AulasDarwinImagenes-image-container">

                <div
                    className={`AulasDarwinImagenes-image ${isFading ? 'AulasDarwinImagenes-fade-in' : 'AulasDarwinImagenes-fade-out'}`}
                    style={{ backgroundImage: `url(${images[currentImage]})` }}
                />
                
            </div>


        </>
    );
};