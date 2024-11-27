import React, { useState, useEffect }  from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAProyectoYsiguiente } from '../../../Components/componentsConstantes/volverAProyectoYSiguiente';
import { TituloCabecera } from '../../../Components/componentsConstantes/tituloCabecera';
import ArteTitulo from '../../../Images/proyecto/arte/arte.png';
import { Parrafo } from '../../../Components/componentsConstantes/parrafo';
import { ArteComponentImagen } from '../../../Components/routesComponents/proyectoComponents/arteComponentImagen';

export const ArtePage = ( props ) => {

  const IrAMusicaPage = 'proyecto/musica';

  const ArteTituloImagen = ArteTitulo;

  const [ArteTituloImagenAnchura, setArteTituloImagenAnchura] = useState(0);
  
  const [ArteTituloImagenAltura, setArteTituloImagenAltura] = useState(0);

  const ArtesTexto1 = `El aprendizaje de los diferentes contenidos de la programación, 
                      se llevarán a cabo a través de diversas disciplinas artísticas: 
                      pintura, modelado, collage, etc., adaptado a las diferentes 
                      edades de cada aula. `;

  const ArtesTexto2 = `La metodología se basa en el contacto directo con la realidad y el entorno natural 
                       del niño para alcanzar un mayor conocimiento y asimilación de los conceptos del 
                       currículo (salidas programadas del centro: parque, mercado, granja-escuela). 
                       Además, se desarrollarán talleres de temáticas relacionadas con el entorno del 
                       niño (cocina, ciencia, profesiones).`;


  useEffect(() => {
      // Función para actualizar los valores de ancho y alto según el tamaño de la pantalla
      const updateDimensions = () => {
          const width = window.innerWidth;
          if (width <= 480) {
              setArteTituloImagenAnchura(63);
              setArteTituloImagenAltura(47);

          } else if (width >= 481 && width <= 767) {
              setArteTituloImagenAnchura(96);
              setArteTituloImagenAltura(71);

          } else if (width >= 768 && width <= 959) {
              setArteTituloImagenAnchura(154);
              setArteTituloImagenAltura(114);

          } else if (width >= 960 && width <= 1199) {
              setArteTituloImagenAnchura(193);
              setArteTituloImagenAltura(143);

          } else {
              setArteTituloImagenAnchura(241);
              setArteTituloImagenAltura(179);

          }
      };

      updateDimensions();
      window.addEventListener('resize', updateDimensions);

      return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <Box  sx={{     backgroundColor: 'rgb(242, 186, 113)',
                    '@media (max-width: 480px)': {
                              width: `${props.anchuraArtePage480px}rem`,
                              marginTop: '1rem',
                              marginBottom: '0rem',  
                    },
                    '@media (min-width: 481px) and (max-width: 767px)': {
                              width: `${props.anchuraArtePage481px_a_767px}rem`,
                              marginTop: '1.5rem',
                              marginBottom: '0rem',  
                    },
                    '@media (min-width: 768px) and (max-width: 959px)': {
                              width: `${props.anchuraArtePage768px_a_959px}rem`,
                              marginTop: '2rem',
                              marginBottom: '5rem', 
                    },
                    '@media (min-width: 960px) and (max-width: 1199px)': {
                              width: `${props.anchuraArtePage960px_a_1199px}rem`,
                              marginTop: '2.5rem',
                              marginBottom: '5rem',  
                    },
                    '@media (min-width: 1200px)': {
                              width: `${props.anchuraArtePage1200px}rem`,
                              marginTop: '3rem',
                              marginBottom: '5rem',  
                    }  
    }}>

            <VolverAProyectoYsiguiente enlace={IrAMusicaPage} />

            <div className='ArteLogoTituloEfecto'>

                  <TituloCabecera imagenBackgroundUbicacion={ArteTituloImagen}
                                    anchuraTitulo={ArteTituloImagenAnchura}
                                    alturaTitulo={ArteTituloImagenAltura} 
                                />

            </div>

            <div className='ArtePage-parrafos-imagenes-container'>

                    <div className='ArtePage-parrafos-container'>

                            <Parrafo parrafoTexto={ArtesTexto1} />

                            <Parrafo parrafoTexto={ArtesTexto2} />

                    </div>
                    
                    <ArteComponentImagen />
            </div>
            
    </Box>
  )
}
