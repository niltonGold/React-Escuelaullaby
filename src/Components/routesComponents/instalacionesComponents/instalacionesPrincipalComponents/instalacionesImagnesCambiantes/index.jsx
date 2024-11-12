import React, { useEffect, useState } from 'react';
import './styles.css';
import imagenCambianteInstalaciones1 from '../../../../../Images/instalaciones/instalacionesImagenes/InstalacionesImagen1.jpg';
import imagenCambianteInstalaciones2 from '../../../../../Images/instalaciones/instalacionesImagenes/InstalacionesImagen2.jpg';
import imagenCambianteInstalaciones3 from '../../../../../Images/instalaciones/instalacionesImagenes/InstalacionesImagen3.jpg';
import imagenCambianteInstalaciones4 from '../../../../../Images/instalaciones/instalacionesImagenes/InstalacionesImagen4.jpg';
import imagenCambianteInstalaciones5 from '../../../../../Images/instalaciones/instalacionesImagenes/InstalacionesImagen5.jpg';
import imagenCambianteInstalaciones6 from '../../../../../Images/instalaciones/instalacionesImagenes/InstalacionesImagen6.jpg';
import imagenCambianteInstalaciones7 from '../../../../../Images/instalaciones/instalacionesImagenes/InstalacionesImagen7.jpg';
import imagenCambianteInstalaciones8 from '../../../../../Images/instalaciones/instalacionesImagenes/InstalacionesImagen8.jpg';
import imagenCambianteInstalaciones9 from '../../../../../Images/instalaciones/instalacionesImagenes/InstalacionesImagen9.jpg';
import imagenCambianteInstalaciones10 from '../../../../../Images/instalaciones/instalacionesImagenes/InstalacionesImagen10.jpg';
import imagenCambianteInstalaciones11 from '../../../../../Images/instalaciones/instalacionesImagenes/InstalacionesImagen11.jpg';
import imagenCambianteInstalaciones12 from '../../../../../Images/instalaciones/instalacionesImagenes/InstalacionesImagen12.jpg';
import imagenCambianteInstalaciones13 from '../../../../../Images/instalaciones/instalacionesImagenes/InstalacionesImagen13.jpg';


export const InstalacionesImagenesCambiantes = () => {

    const images = [
        imagenCambianteInstalaciones1,
        imagenCambianteInstalaciones2,
        imagenCambianteInstalaciones3,
        imagenCambianteInstalaciones4,
        imagenCambianteInstalaciones5,
        imagenCambianteInstalaciones6,
        imagenCambianteInstalaciones7,
        imagenCambianteInstalaciones8,
        imagenCambianteInstalaciones9,
        imagenCambianteInstalaciones10,
        imagenCambianteInstalaciones11,
        imagenCambianteInstalaciones12,
        imagenCambianteInstalaciones13,      
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
        <div className='InstalcionesImagenes-PrincipalContainer'>
        <div className="InstalacionesImage-container">
            <div
                className={`instalacionesImage ${isFading ? 'instalaciones-fade-in' : 'instalaciones-fade-out'}`}
                style={{ backgroundImage: `url(${images[currentImage]})` }}
            />
        </div>
        </div>
    );
};