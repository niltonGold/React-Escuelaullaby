import React, { useEffect, useState } from 'react';
import './styles.css';
import imagen_1 from '../../../../../Images/instalaciones/aulas/descubridores/descubridores_1.jpg';
import imagen_2 from '../../../../../Images/instalaciones/aulas/descubridores/descubridores_2.jpg';
import imagen_3 from '../../../../../Images/instalaciones/aulas/descubridores/descubridores_3.jpg';
import imagen_4 from '../../../../../Images/instalaciones/aulas/descubridores/descubridores_4.jpg';
import imagen_5 from '../../../../../Images/instalaciones/aulas/descubridores/descubridores_5.jpg';
import imagen_6 from '../../../../../Images/instalaciones/aulas/descubridores/descubridores_6.jpg';
import imagen_7 from '../../../../../Images/instalaciones/aulas/descubridores/descubridores_7.jpg';
import imagen_8 from '../../../../../Images/instalaciones/aulas/descubridores/descubridores_8.jpg';
import imagen_9 from '../../../../../Images/instalaciones/aulas/descubridores/descubridores_9.jpg';
import imagen_10 from '../../../../../Images/instalaciones/aulas/descubridores/descubridores_10.jpg';





export const AulasDescubridoresImagenes = ( ) => {


    const images = [
        imagen_1,
        imagen_2,
        imagen_3,
        imagen_4,
        imagen_5,
        imagen_6,
        imagen_7,
        imagen_8,
        imagen_9,
        imagen_10,
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


            <div className="AulasDescubridoresImagenes-image-container">

                <div
                    className={`AulasDescubridoresImagenes-image ${isFading ? 'AulasDescubridoresImagenes-fade-in' : 'AulasDescubridoresImagenes-fade-out'}`}
                    style={{ backgroundImage: `url(${images[currentImage]})` }}
                />
                
            </div>


        </>
    );
};