import React, { useState, useEffect } from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAinstalaciones } from '../../../Components/componentsConstantes/volverAInstalaciones';
import SalonDeActosTitulo from '../../../Images/instalaciones/salonDeActos/salondeactosTitulo.png';
import { TituloCabecera } from '../../../Components/componentsConstantes/tituloCabecera';
import { Parrafo } from '../../../Components/componentsConstantes/parrafo';
import { SalonDeActosImagenesCambiantes } from '../../../Components/routesComponents/instalacionesComponents/salonDeActos/salonDeActosImagenesCambiantes';


export const SalonDeActos = ( props ) => {

      const SalonDeActosImagen = SalonDeActosTitulo;

      const [SalonDeActosImagenAnchura, setSalonDeActosImagenAnchura] = useState(0);

      const [SalonDeActosImagenAltura, setSalonDeActosImagenAltura] = useState(0);

      const SalonDeActosTexto = `El aula de psicomotricidad y el comedor son dos espacios
                                 modulables que se convierten en un luminoso y espacioso 
                                 Salón de Actos destinado a reuniones, fiestas y eventos 
                                 especiales que tienen lugar en el centro a lo largo de 
                                 todo el año.`


      useEffect(() => {
      // Función para actualizar los valores de ancho y alto según el tamaño de la pantalla
      const updateDimensions = () => {
            const width = window.innerWidth;
            if (width <= 480) {

                  setSalonDeActosImagenAnchura(140); // Ancho y alto para pantallas pequeñas
                  setSalonDeActosImagenAltura(28);

            } else if (width >= 481 && width <= 767) {

                  setSalonDeActosImagenAnchura(210); // Ancho y alto para pantallas medianas
                  setSalonDeActosImagenAltura(43);

            } else if (width >= 768 && width <= 959) {

                  setSalonDeActosImagenAnchura(339); // Ancho y alto para pantallas grandes
                  setSalonDeActosImagenAltura(68);

            } else if (width >= 960 && width <= 1199) {

                  setSalonDeActosImagenAnchura(424); // Ancho y alto para pantallas extra grandes
                  setSalonDeActosImagenAltura(85);

            } else {
                  setSalonDeActosImagenAnchura(529); // Ancho y alto para pantallas muy grandes
                  setSalonDeActosImagenAltura(106);
            }
      };

            // Llama a updateDimensions al montar el componente y cuando se redimensiona la pantalla
            updateDimensions();
            window.addEventListener('resize', updateDimensions);

            // Limpia el evento al desmontar el componente
            return () => window.removeEventListener('resize', updateDimensions);

      }, []);

  return (
    <>
        <Box  sx={{     backgroundColor: 'rgb(242, 186, 100)',
                  '@media (max-width: 480px)': {
                        width: `${props.anchuraSalonDeActos480px}rem`,
                        marginTop: '1rem',
                        marginBottom: '0rem', 
                  },
                  '@media (min-width: 481px) and (max-width: 767px)': {
                        width: `${props.anchuraSalonDeActos481px_a_767px}rem`,
                        marginTop: '1.5rem',
                        marginBottom: '0rem', 
                  },
                  '@media (min-width: 768px) and (max-width: 959px)': {
                        width: `${props.anchuraSalonDeActos768px_a_959px}rem`,
                        marginTop: '2rem',
                        marginBottom: '5rem', 
                  },
                  '@media (min-width: 960px) and (max-width: 1199px)': {
                        width: `${props.anchuraSalonDeActos960px_a_1199px}rem`,
                        marginTop: '2.5rem',
                        marginBottom: '5rem', 
                  },
                  '@media (min-width: 1200px)': {
                        width: `${props.anchuraSalonDeActos1200px}rem`,
                        marginTop: '3rem',
                        marginBottom: '5rem',
                  }  
          }}>
          
                  <VolverAinstalaciones />

                  <div  className='salonDeActos-subContainer'>

                        <div className='salonDeActos-titulo_parrafo-container'>
                              
                              <TituloCabecera imagenBackgroundUbicacion={SalonDeActosImagen}
                                              anchuraTitulo={SalonDeActosImagenAnchura}
                                              alturaTitulo={SalonDeActosImagenAltura} />

                              <Parrafo parrafoTexto={SalonDeActosTexto} />

                        </div>

                        <SalonDeActosImagenesCambiantes />

                  </div>
          
          </Box>
    </>
  )
}
