import React, { useState, useEffect, useRef, useCallback } from 'react';
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

  const intervalRef = useRef(null);

  // Memoiza `nextImage` para evitar que su referencia cambie
  const nextImage = useCallback(() => {
    setIsFading(false);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setIsFading(true);
    }, 100);
  }, [images.length]); // Dependemos de `images.length`

  const startInterval = useCallback(() => {
    intervalRef.current = setInterval(() => {
      nextImage();
    }, 3000);
  }, [nextImage]); // Incluimos `nextImage` como dependencia

  const clearAndRestartInterval = () => {
    clearInterval(intervalRef.current);
    startInterval();
  };

  const prevImage = () => {
    setIsFading(false);
    setTimeout(() => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
      setIsFading(true);
    }, 100);
    clearAndRestartInterval(); // Reinicia el intervalo después de cambiar la imagen
  };

  const goToImage = (index) => {
    setIsFading(false);
    setTimeout(() => {
      setCurrentImage(index);
      setIsFading(true);
    }, 100);
    clearAndRestartInterval(); // Reinicia el intervalo después de cambiar la imagen
  };

  const handleNextImage = () => {
    nextImage();
    clearAndRestartInterval(); // Reinicia el intervalo después de cambiar la imagen
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [startInterval]);


  return (
    <>


            <div className="JuegoComponentImagenesCambiantes-image-container">


                    <div className="JuegoComponentImagenesCambiantes-imagen-y-botones-prevYnext-container">


                            {/* Boton prev */}
                            <button
                            className="JuegoComponentImagenesCambiantes-navegadores prev"
                            onClick={prevImage}
                            >
                            ❮
                            </button>

                        {/* -------------------------------------------------------------------------- */}

                                    {/* Imagenes cambiantes */}
                                    <div
                                    className={`JuegoComponentImagenesCambiantes-image ${
                                        isFading
                                        ? 'JuegoComponentImagenesCambiantes-fade-in'
                                        : 'JuegoComponentImagenesCambiantes-fade-out'
                                    }`}
                                    style={{ backgroundImage: `url(${images[currentImage]})` }}
                                    />

                        {/* -------------------------------------------------------------------------- */}

                            {/* Boton next */}
                            <button
                            className="JuegoComponentImagenesCambiantes-navegadores next"
                            onClick={handleNextImage} // Usa la función con reinicio del intervalo
                            >
                            ❯
                            </button>


                    </div>

                    {/* Indicadores de imagen */}
                    <div className="JuegoComponentImagenesCambiantes-indicadores">
                        {images.map((_, index) => (
                        <button
                            key={index}
                            className={`JuegoComponentImagenesCambiantes-indicador ${
                            index === currentImage ? 'JuegoComponentImagenesCambiantes_active' : ''
                            }`}
                            onClick={() => goToImage(index)}
                        />
                        ))}
                    </div>


            </div>


    </>
  );
};