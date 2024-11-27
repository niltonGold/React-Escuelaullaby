import React, { useState, useEffect } from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAProyectoYsiguiente } from '../../../Components/componentsConstantes/volverAProyectoYSiguiente';
import { TituloCabecera } from '../../../Components/componentsConstantes/tituloCabecera';
import MusicaTitulo from '../../../Images/proyecto/musica/musica.png';
import { Parrafo } from '../../../Components/componentsConstantes/parrafo';
import { MusicaComponentImagenesCambiantes } from '../../../Components/routesComponents/proyectoComponents/musicaComponetImagenesCambiantes';

export const MusicaPage = ( props ) => {

  const IrAPsicomotricidadPage = 'proyecto/psicomotricidad';

  const MusicaTituloImagen = MusicaTitulo;

  const [MusicaTituloImagenAnchura, setMusicaTituloImagenAnchura] = useState(0);
  
  const [MusicaTituloImagenAltura, setMusicaTituloImagenAltura] = useState(0);

  const MusicasTexto1 = `Numerosos estudios pedagógicos demuestran que la música es una 
                         herramienta esencial para la estimulación del aprendizaje cognitivo 
                         del niño, especialmente la música clásica. Por ello, el Proyecto Lullaby 
                         le otorga una importancia vital a esta disciplina. Además de formar 
                         pMusica de la vida diaria de la escuela en sus actividades semanales, 
                         el centro recibirá visitas periódicas de músicos que les mostrarán 
                         los instrumentos reales, escucharán su sonoridad y, en definitiva, 
                         asimilarán la importancia de la música en la vida.`;

  const MusicasTexto2 = `También se les enseñará a los alumnos del centro las bases del solfeo, 
                         a través de técnicas educativas concretas (musicogramas, audiciones, etc.). 
                         Al final del curso los niños disfrutarán de un concierto de música clásica 
                         ofrecido por los músicos que les visitaron a lo largo periodo escolar.`;



  useEffect(() => {
  // Función para actualizar los valores de ancho y alto según el tamaño de la pantalla
    const updateDimensions = () => {
        const width = window.innerWidth;
        if (width <= 480) {
            setMusicaTituloImagenAnchura(90);
            setMusicaTituloImagenAltura(61);

        } else if (width >= 481 && width <= 767) {
            setMusicaTituloImagenAnchura(134);
            setMusicaTituloImagenAltura(91);

        } else if (width >= 768 && width <= 959) {
            setMusicaTituloImagenAnchura(216);
            setMusicaTituloImagenAltura(147);

        } else if (width >= 960 && width <= 1199) {
            setMusicaTituloImagenAnchura(270);
            setMusicaTituloImagenAltura(184);

        } else {
            setMusicaTituloImagenAnchura(338);
            setMusicaTituloImagenAltura(230);

        }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
    
  return (
    <Box  sx={{     backgroundColor: 'rgb(242, 186, 113)',
                    '@media (max-width: 480px)': {
                              width: `${props.anchuraMusicaPage480px}rem`,
                              marginTop: '1rem',
                              marginBottom: '0rem', 
                    },
                    '@media (min-width: 481px) and (max-width: 767px)': {
                              width: `${props.anchuraMusicaPage481px_a_767px}rem`,
                              marginTop: '1.5rem',
                              marginBottom: '0rem',
                    },
                    '@media (min-width: 768px) and (max-width: 959px)': {
                              width: `${props.anchuraMusicaPage768px_a_959px}rem`, 
                              marginTop: '2rem',
                              marginBottom: '5rem',
                    },
                    '@media (min-width: 960px) and (max-width: 1199px)': {
                              width: `${props.anchuraMusicaPage960px_a_1199px}rem`,
                              marginTop: '2.5rem',
                              marginBottom: '5rem', 
                    },
                    '@media (min-width: 1200px)': {
                              width: `${props.anchuraMusicaPage1200px}rem`,
                              marginTop: '3rem',
                              marginBottom: '5rem',  
                    }  
    }}>

          <VolverAProyectoYsiguiente enlace={IrAPsicomotricidadPage} />

          <div className='MusicaLogoTituloEfecto'>

                  <TituloCabecera imagenBackgroundUbicacion={MusicaTituloImagen}
                                    anchuraTitulo={MusicaTituloImagenAnchura}
                                    alturaTitulo={MusicaTituloImagenAltura} 
                                />

            </div>

            <div className='MusicaPage-parrafos-imagenes-container'>

                    <div className='MusicaPage-parrafos-container'>

                            <Parrafo parrafoTexto={MusicasTexto1} />

                            <Parrafo parrafoTexto={MusicasTexto2} />

                    </div>
                    
                    <MusicaComponentImagenesCambiantes />
            </div>

    </Box>
  )
}
