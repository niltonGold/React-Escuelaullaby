import React, { useEffect, useState } from 'react';
import './styles.css';
import imagenCambiante1 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante1.jpg';
import imagenCambiante2 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante2.jpg';
import imagenCambiante3 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante3.jpg';
import imagenCambiante4 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante4.jpg';
import imagenCambiante5 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante5.jpg';
import imagenCambiante6 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante6.jpg';
import imagenCambiante7 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante7.jpg';
import imagenCambiante8 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante8.jpg';
import imagenCambiante9 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante9.jpg';
import imagenCambiante10 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante10.jpg';
import imagenCambiante11 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante11.jpg';
import imagenCambiante12 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante12.jpg';
import imagenCambiante13 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante13.jpg';
import imagenCambiante14 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante14.jpg';
import imagenCambiante15 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante15.jpg';
import imagenCambiante16 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante16.jpg';
import imagenCambiante17 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante17.jpg';
import imagenCambiante18 from '../../../../../Images/inicio/imagenesCambiantes/imagenCambiante18.jpg';


export const ImagenesCambiantes = () => {

    const images = [
        imagenCambiante1,
        imagenCambiante2,
        imagenCambiante3,
        imagenCambiante4,
        imagenCambiante5,
        imagenCambiante6,
        imagenCambiante7,
        imagenCambiante8,
        imagenCambiante9,
        imagenCambiante10,
        imagenCambiante11,
        imagenCambiante12,
        imagenCambiante13,
        imagenCambiante14,
        imagenCambiante15,
        imagenCambiante16,
        imagenCambiante17,
        imagenCambiante18,        
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
        <div className="image-container">
            <div
                className={`image ${isFading ? 'fade-in' : 'fade-out'}`}
                style={{ backgroundImage: `url(${images[currentImage]})` }}
            />
        </div>
    );
};