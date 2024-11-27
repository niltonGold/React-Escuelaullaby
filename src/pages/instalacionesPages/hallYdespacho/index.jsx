import React, { useState, useEffect } from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAinstalacionesYsiguiente } from '../../../Components/componentsConstantes/volverAInstalacionesYSiguiente';
import { Siguiente } from '../../../Components/componentsConstantes/siguiente';
import { TituloCabecera } from '../../../Components/componentsConstantes/tituloCabecera';
import HallYdespachoTitulo from '../../../Images/instalaciones/hallYDespacho/hallydespachoTitulo.png';
import { Parrafo } from '../../../Components/componentsConstantes/parrafo';
import { HallYdespachoImagen } from '../../../Components/routesComponents/instalacionesComponents/hallYdespacho/HallYdespachoHallyDespachoImagen';

export const HallYdespacho = ( props ) => {

      const IrComedor = 'instalacionesPage/comedor';

      const HallYdespachoTituloImagen = HallYdespachoTitulo;

      const [HallYdespachoTituloImagenAnchura, setHallYdespachoTituloImagenAnchura] = useState(0);

      const [HallYdespachoTituloImagenAltura, setHallYdespachoTituloImagenAltura] = useState(0);

      const HallYdespachoTexto = `El hall es la zona de recepción de los niños y padres, el lugar de 
                                  bienvenida a Lullaby. El despacho es uno de los puntos de reunión 
                                  de la dirección y tutores con las familias de los niños, separado 
                                  del hall con una cristalera para ofrecer la máxima transparencia 
                                  y, a la vez, privacidad.`

      useEffect(() => {
            // Función para actualizar los valores de ancho y alto según el tamaño de la pantalla
            const updateDimensions = () => {
                  const width = window.innerWidth;
                  if (width <= 480) {

                        setHallYdespachoTituloImagenAnchura(151); // Ancho y alto para pantallas pequeñas
                        setHallYdespachoTituloImagenAltura(28);

                  } else if (width >= 481 && width <= 767) {

                        setHallYdespachoTituloImagenAnchura(226); // Ancho y alto para pantallas medianas
                        setHallYdespachoTituloImagenAltura(42);

                  } else if (width >= 768 && width <= 959) {

                        setHallYdespachoTituloImagenAnchura(366); // Ancho y alto para pantallas grandes
                        setHallYdespachoTituloImagenAltura(68);

                  } else if (width >= 960 && width <= 1199) {

                        setHallYdespachoTituloImagenAnchura(458); // Ancho y alto para pantallas extra grandes
                        setHallYdespachoTituloImagenAltura(85);

                  } else {
                        setHallYdespachoTituloImagenAnchura(571); // Ancho y alto para pantallas muy grandes
                        setHallYdespachoTituloImagenAltura(107);
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
                        width: `${props.anchuraHallYdespacho480px}rem`,
                        marginTop: '1rem',
                        marginBottom: '0rem', 
                  },
                  '@media (min-width: 481px) and (max-width: 767px)': {
                        width: `${props.anchuraHallYdespacho481px_a_767px}rem`,
                        marginTop: '1.5rem',
                        marginBottom: '0rem', 
                  },
                  '@media (min-width: 768px) and (max-width: 959px)': {
                        width: `${props.anchuraHallYdespacho768px_a_959px}rem`,
                        marginTop: '2rem',
                        marginBottom: '5rem', 
                  },
                  '@media (min-width: 960px) and (max-width: 1199px)': {
                        width: `${props.anchuraHallYdespacho960px_a_1199px}rem`,
                        marginTop: '2.5rem',
                        marginBottom: '5rem', 
                  },
                  '@media (min-width: 1200px)': {
                        width: `${props.anchuraHallYdespacho1200px}rem`,
                        marginTop: '3rem',
                        marginBottom: '5rem',
                  }  
          }}>
          
                 
                  <VolverAinstalacionesYsiguiente enlace={IrComedor} />

                  <div  className='hallYdespacho-subContainer'>
                              
                              <div className='hallYdespacho-titulo_parrafo-container'>
                                          
                                          <TituloCabecera imagenBackgroundUbicacion={HallYdespachoTituloImagen}
                                                      anchuraTitulo={HallYdespachoTituloImagenAnchura}
                                                      alturaTitulo={HallYdespachoTituloImagenAltura} />

                                          <Parrafo parrafoTexto={HallYdespachoTexto} />

                              </div>

                              <HallYdespachoImagen />
                              
                              <Siguiente enlace={IrComedor} />

                  </div>

                 
          
          </Box>
    </>
  )
}
