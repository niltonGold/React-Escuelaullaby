import React, { useState, useEffect }  from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAProyectoYsiguiente } from '../../../Components/componentsConstantes/volverAProyectoYSiguiente';
import { TituloCabecera } from '../../../Components/componentsConstantes/tituloCabecera';
import JuegoPageTitulo from '../../../Images/proyecto/juego/juego.png';
import { Parrafo } from '../../../Components/componentsConstantes/parrafo';
import { JuegoParrafoConSangria } from '../../../Components/routesComponents/proyectoComponents/JuegoParrafoConSangria';
import { JuegoComponentImagenesCambiantes } from '../../../Components/routesComponents/proyectoComponents/juegoComponentImagenesCambiantes';

export const JuegoPage = ( props ) => {

    const IrAYogaPage = 'proyecto/yoga';

    const JuegoPageTituloImagen = JuegoPageTitulo;

    const [JuegoPageTituloImagenAnchura, setJuegoPageTituloImagenAnchura] = useState(0);
    
    const [JuegoPageTituloImagenAltura, setJuegoPageTituloImagenAltura] = useState(0);

    const JuegoTexto1 = `El juego durante la infancia, especialmente durante los tres 
                        primeros años de vida, representa la columna vertebral del aprendizaje 
                        del niño. Por ello, el PROYECTO Lullaby marca tres tipos de juego que 
                        desarrolla en las tres aulas:`;

    const JuegoTexto2 = `El Juego Heurístico. A través de materiales reciclables, estas 
                         sesiones tienen por objetivo el desarrollo de su creatividad.`;
                         
    const JuegoTexto3 = `El Juego por Rincones. Donde cada niño aprende a jugar de forma 
                         ordenada y tranquila.`; 
    
    const JuegoTexto4 = `El Juego Libre. Como modo de descanso, sociabilidad y desarrollo 
                         infantil.`;  

  useEffect(() => {
    // Función para actualizar los valores de ancho y alto según el tamaño de la pantalla
    const updateDimensions = () => {
        const width = window.innerWidth;
        if (width <= 480) {
            setJuegoPageTituloImagenAnchura(99);
            setJuegoPageTituloImagenAltura(71);

        } else if (width >= 481 && width <= 767) {
            setJuegoPageTituloImagenAnchura(149);
            setJuegoPageTituloImagenAltura(107);

        } else if (width >= 768 && width <= 959) {
            setJuegoPageTituloImagenAnchura(238);
            setJuegoPageTituloImagenAltura(171);

        } else if (width >= 960 && width <= 1199) {
            setJuegoPageTituloImagenAnchura(298);
            setJuegoPageTituloImagenAltura(214);

        } else {
            setJuegoPageTituloImagenAnchura(372);
            setJuegoPageTituloImagenAltura(267);

        }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
}, []);

  return (

    <Box  sx={{     backgroundColor: 'rgb(242, 186, 113, 0.6)',
                    display: 'flex',
                    alignSelf: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    '@media (max-width: 480px)': {
                              width: `20rem`,
                              marginTop: '1rem',
                              marginBottom: '0rem',  
                    },
                    '@media (min-width: 481px) and (max-width: 767px)': {
                              width: `28rem`,
                              marginTop: '1.5rem',
                              marginBottom: '0rem',   
                    },
                    '@media (min-width: 768px) and (max-width: 959px)': {
                              width: `44rem`,
                              marginTop: '2rem',
                              marginBottom: '5rem', 
                    },
                    '@media (min-width: 960px) and (max-width: 1199px)': {
                              width: `52rem`,
                              marginTop: '2.5rem',
                              marginBottom: '5rem', 
                    },
                    '@media (min-width: 1200px)': {
                              width: `64rem`,
                              marginTop: '3rem',
                              marginBottom: '5rem',  
                    }  

    }}>

            <div className='JuegoPage-Volver-Y-Siguiente-Container'>

                    <VolverAProyectoYsiguiente enlace={IrAYogaPage} />

            </div>
           

            <div className='JuegoPage-TituloCabecera-Container'>
                  <TituloCabecera imagenBackgroundUbicacion={JuegoPageTituloImagen}
                                    anchuraTitulo={JuegoPageTituloImagenAnchura}
                                    alturaTitulo={JuegoPageTituloImagenAltura} 
                                />

            </div>
            
            <div className='JuegoPage-parrafos-imagenes-container'>

                    <div className='JuegoPage-parrafos-container'>

                            <Parrafo parrafoTexto={JuegoTexto1} />

                            <JuegoParrafoConSangria JuegoParrafoConSangriaTexto={JuegoTexto2} />

                            <JuegoParrafoConSangria JuegoParrafoConSangriaTexto={JuegoTexto3} />

                            <JuegoParrafoConSangria JuegoParrafoConSangriaTexto={JuegoTexto4} />
                    </div>
                    
                    <div className='JuegoPage-Imagenes-Cambiantes-Container'>
                    <JuegoComponentImagenesCambiantes />
                    </div>
            </div>
        

    </Box>


  )
}
