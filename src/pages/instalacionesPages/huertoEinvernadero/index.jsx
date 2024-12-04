import React, { useState, useEffect } from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAinstalacionesYsiguiente } from '../../../Components/componentsConstantes/volverAInstalacionesYSiguiente';
import { Siguiente } from '../../../Components/componentsConstantes/siguiente';
import HuertoEinvernaderoTitulo from '../../../Images/instalaciones/huertoEInvernadero/huertoeinvernaderoTitulo.png';
import { TituloCabecera } from '../../../Components/componentsConstantes/tituloCabecera';
import { Parrafo } from '../../../Components/componentsConstantes/parrafo';
import { HuertoEinvernaderoImagenesCambiantes } from '../../../Components/routesComponents/instalacionesComponents/huertoEinvernadero/huertoEinvernaderoImagenesCambiantes';





export const HuertoEinvernadero = ( props ) => {


    const IrAsalonDeActos = 'instalacionesPage/salonDeActos';

    const HuertoEinvernaderoImagen = HuertoEinvernaderoTitulo;

    const [HuertoEinvernaderoImagenAnchura, setHuertoEinvernaderoImagenAnchura] = useState(0);

    const [HuertoEinvernaderoImagenAltura, setHuertoEinvernaderoImagenAltura] = useState(0);

    const HuertoEinvernaderoTexto = `Se encuentran en el patio de actividades dirigidas. 
                                    Se trata de una zona espaciosa donde los niños aprenden 
                                    a cultivar las plantas, así como a acercarse al concepto 
                                    de preservar y cuidar el medio ambiente y el ecosistema.`

    useEffect(() => {
    // Función para actualizar los valores de ancho y alto según el tamaño de la pantalla
    const updateDimensions = () => {
        const width = window.innerWidth;
        if (width <= 480) {

                setHuertoEinvernaderoImagenAnchura(198); // Ancho y alto para pantallas pequeñas
                setHuertoEinvernaderoImagenAltura(28);

        } else if (width >= 481 && width <= 767) {

                setHuertoEinvernaderoImagenAnchura(297); // Ancho y alto para pantallas medianas
                setHuertoEinvernaderoImagenAltura(43);

        } else if (width >= 768 && width <= 959) {

                setHuertoEinvernaderoImagenAnchura(475); // Ancho y alto para pantallas grandes
                setHuertoEinvernaderoImagenAltura(68);

        } else if (width >= 960 && width <= 1199) {

                setHuertoEinvernaderoImagenAnchura(594); // Ancho y alto para pantallas extra grandes
                setHuertoEinvernaderoImagenAltura(85);

        } else {
                setHuertoEinvernaderoImagenAnchura(741); // Ancho y alto para pantallas muy grandes
                setHuertoEinvernaderoImagenAltura(106);
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


        <Box  sx={{     
                //   backgroundColor: 'rgb(242, 186, 100)',
                  '@media (max-width: 480px)': {
                        width: `${props.anchuraHuertoEinvernadero480px}rem`,
                        marginTop: '1rem',
                        marginBottom: '0rem', 
                  },
                  '@media (min-width: 481px) and (max-width: 767px)': {
                        width: `${props.anchuraHuertoEinvernadero481px_a_767px}rem`,
                        marginTop: '1.5rem',
                        marginBottom: '0rem', 
                  },
                  '@media (min-width: 768px) and (max-width: 959px)': {
                        width: `${props.anchuraHuertoEinvernadero768px_a_959px}rem`,
                        marginTop: '2rem',
                        marginBottom: '5rem', 
                  },
                  '@media (min-width: 960px) and (max-width: 1199px)': {
                        width: `${props.anchuraHuertoEinvernadero960px_a_1199px}rem`,
                        marginTop: '2.5rem',
                        marginBottom: '5rem', 
                  },
                  '@media (min-width: 1200px)': {
                        width: `${props.anchuraHuertoEinvernadero1200px}rem`,
                        marginTop: '3rem',
                        marginBottom: '5rem',
                  }  
          }}>
          

                  <VolverAinstalacionesYsiguiente enlace={IrAsalonDeActos} />

                  <div  className='huertoEinvernadero-subContainer'>

                        <div className='huertoEinvernadero-titulo_parrafo-container'>
                              
                              <TituloCabecera imagenBackgroundUbicacion={HuertoEinvernaderoImagen}
                                                      anchuraTitulo={HuertoEinvernaderoImagenAnchura}
                                                      alturaTitulo={HuertoEinvernaderoImagenAltura} />

                              <Parrafo parrafoTexto={HuertoEinvernaderoTexto} />

                        </div>

                              <HuertoEinvernaderoImagenesCambiantes />
                              
                              <Siguiente enlace={IrAsalonDeActos} />
                  </div>
          

          </Box>


    </>
  )
}
