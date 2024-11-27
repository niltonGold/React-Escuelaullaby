// import React, { useEffect, useState } from 'react';
// import './styles.css';
// import imagen_1 from '../../../../Images/proyecto/juego/juegoImagen_1.jpg';
// import imagen_2 from '../../../../Images/proyecto/juego/juegoImagen_1.jpg';
// import imagen_3 from '../../../../Images/proyecto/juego/juegoImagen_1.jpg';
// import imagen_4 from '../../../../Images/proyecto/juego/juegoImagen_1.jpg';
// import imagen_5 from '../../../../Images/proyecto/juego/juegoImagen_1.jpg';
// import imagen_6 from '../../../../Images/proyecto/juego/juegoImagen_1.jpg';
// import imagen_7 from '../../../../Images/proyecto/juego/juegoImagen_1.jpg';






// export const JuegoComponentImagenesCambiantes = ( ) => {

//     const images = [
//         imagen_1,
//         imagen_2,
//         imagen_3,
//         imagen_4,
//         imagen_5,
//         imagen_6,
//         imagen_7,
//     ];

//     const [currentImage, setCurrentImage] = useState(0);
//     const [isFading, setIsFading] = useState(true);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setIsFading(false); 
//             setTimeout(() => {
//                 setCurrentImage((prev) => (prev + 1) % images.length); 
//                 setIsFading(true); 
//             }, 1000); 
//         }, 4000); 

//         return () => clearInterval(intervalId);
//     }, [images.length]);

//     return (

//             <div className="JuegoComponentImagenesCambiantes-image-container">
//                 <div
//                     className={`JuegoComponentImagenesCambiantes-image ${isFading ? 'JuegoComponentImagenesCambiantes-fade-in' : 'JuegoComponentImagenesCambiantes-fade-out'}`}
//                     style={{ backgroundImage: `url(${images[currentImage]})` }}
//                 />
//             </div>

//     );
// };




import React, { useState, useEffect } from 'react';
import './styles.css';
import imagen_1 from '../../../../Images/proyecto/juego/juegoImagen_1.jpg';
import imagen_2 from '../../../../Images/proyecto/juego/juegoImagen_2.jpg';
import imagen_3 from '../../../../Images/proyecto/juego/juegoImagen_3.jpg';
import imagen_4 from '../../../../Images/proyecto/juego/juegoImagen_4.jpg';
import imagen_5 from '../../../../Images/proyecto/juego/juegoImagen_5.jpg';
import imagen_6 from '../../../../Images/proyecto/juego/juegoImagen_6.jpg';
import imagen_7 from '../../../../Images/proyecto/juego/juegoImagen_7.jpg';

export const JuegoComponentImagenesCambiantes = () => {
    const images = [
        imagen_1,
        imagen_2,
        imagen_3,
        imagen_4,
        imagen_5,
        imagen_6,
        imagen_7,
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [isFading, setIsFading] = useState(true);

    // Avanzar a la siguiente imagen
    const nextImage = () => {
        setIsFading(false);
        setTimeout(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
            setIsFading(true);
        }, 300);
    };

    // Retroceder a la imagen anterior
    const prevImage = () => {
        setIsFading(false);
        setTimeout(() => {
            setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
            setIsFading(true);
        }, 300);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 4000);
    
        return () => clearInterval(intervalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Solo se ejecutará al montar el componente

    // Cambiar a una imagen específica
    const goToImage = (index) => {
        setIsFading(false);
        setTimeout(() => {
            setCurrentImage(index);
            setIsFading(true);
        }, 300);
    };

    return (
        <div className="JuegoComponentImagenesCambiantes-image-container">


            <div className='JuegoComponentImagenesCambiantes-imagen-y-botones-prevYnext-container'>
            

                        {/* Boton prev */}
                      
                        <button className="JuegoComponentImagenesCambiantes-nav prev" onClick={prevImage}>
                            ❮
                        </button>


                        {/* Imagenes cambiantes */}
                        <div
                            className={`JuegoComponentImagenesCambiantes-image ${
                                isFading ? 'JuegoComponentImagenesCambiantes-fade-in' : 'JuegoComponentImagenesCambiantes-fade-out'
                            }`}
                            style={{ backgroundImage: `url(${images[currentImage]})` }}
                        />


                        {/* Boton next */}
                        <button className="JuegoComponentImagenesCambiantes-nav next" onClick={nextImage}>
                            ❯
                        </button>


            </div>
            



            {/* Botones para navegar */}



            {/* Indicadores de imagen */}
            <div className="JuegoComponentImagenesCambiantes-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`JuegoComponentImagenesCambiantes-indicator ${
                            index === currentImage ? 'active' : ''
                        }`}
                        onClick={() => goToImage(index)}
                    />
                ))}
            </div>


        </div>
    );
};
