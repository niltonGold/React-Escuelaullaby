import React, { useState, useEffect } from 'react';
import './styles.css';
import imagen_1 from '../../../../Images/ingles/inglesImagen_1.jpg';
import imagen_2 from '../../../../Images/ingles/inglesImagen_2.jpg';
import imagen_3 from '../../../../Images/ingles/inglesImagen_3.jpg';
import imagen_4 from '../../../../Images/ingles/inglesImagen_4.jpg';





export const InglesImagenesCambiantes = () => {


    const images = [
        imagen_1,
        imagen_2,
        imagen_3,
        imagen_4,
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [isFading, setIsFading] = useState(true);

    // Avanzar a la siguiente imagen
    const nextImage = () => {
        setIsFading(false);
        setTimeout(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
            setIsFading(true);
        }, 100);
    };

    // Retroceder a la imagen anterior
    const prevImage = () => {
        setIsFading(false);
        setTimeout(() => {
            setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
            setIsFading(true);
        }, 100);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 3000);
    
        return () => clearInterval(intervalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Solo se ejecutará al montar el componente

    // Cambiar a una imagen específica
    const goToImage = (index) => {
        setIsFading(false);
        setTimeout(() => {
            setCurrentImage(index);
            setIsFading(true);
        }, 100);
    };


    return (
        <>
                <div className="InglesImagenesCambiantes-image-container">


                        <div className='InglesImagenesCambiantes-imagen-y-botones-prevYnext-container'>
                        
                                    {/* Boton prev */}
                                    <button className="InglesImagenesCambiantes-navegadores prev" onClick={prevImage}>
                                        ❮
                                    </button>


                                    {/* Imagenes cambiantes */}
                                    <div
                                        className={`InglesImagenesCambiantes-image ${
                                            isFading ? 'InglesImagenesCambiantes-fade-in' : 'InglesImagenesCambiantes-fade-out'
                                        }`}
                                        style={{ backgroundImage: `url(${images[currentImage]})` }}
                                    />


                                    {/* Boton next */}
                                    <button className="InglesImagenesCambiantes-navegadores next" onClick={nextImage}>
                                        ❯
                                    </button>

                        </div>


                        {/* Indicadores de imagen */}
                        <div className="InglesImagenesCambiantes-indicadores">

                            {images.map((_, index) => (

                                    <button
                                        key={index}
                                        className={`InglesImagenesCambiantes-indicador ${
                                            index === currentImage ? 'InglesImagenesCambiantes_active' : ''
                                        }`}
                                        onClick={() => goToImage(index)}
                                    />

                            ))}

                        </div>


                </div>
        </>
    );
};
