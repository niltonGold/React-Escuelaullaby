import React, { useState, useEffect } from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { Siguiente } from '../../../Components/componentsConstantes/siguiente';
import { VolverAinstalacionesYsiguiente } from '../../../Components/componentsConstantes/volverAInstalacionesYSiguiente';
import CocinaYlavanderiaTitulo from '../../../Images/instalaciones/cocinayLavanderia/cocinaYlavanderiaTitulo.png'
import { TituloCabecera } from '../../../Components/componentsConstantes/tituloCabecera';
import { Parrafo } from '../../../Components/componentsConstantes/parrafo';
import { CocinaYlavanderiaImagen } from '../../../Components/routesComponents/instalacionesComponents/cocinaYlavanderia/cocinaYlavanderiaImagen';





export const CocinaYlavanderia = ( props ) => {


    const IrAPatios = 'instalacionesPage/patios';

    const CocinaYlavanderiaTituloImagen = CocinaYlavanderiaTitulo;

    const [CocinaYlavanderiaTituloImagenAnchura, setCocinaYlavanderiaTituloImagenAnchura] = useState(0);

    const [CocinaYlavanderiaTituloImagenAltura, setCocinaYlavanderiaTituloImagenAltura] = useState(0);

    const CocinaYlavanderiaTexto = `La escuela dispone de una cocina visible desde el hall, donde 
                        diariamente se preparan los menús de los niños, servidos por una 
                        empresa de confianza, con máxima calidad en sus productos (proveedores de 
                        primeras marcas) y servicios, teniendo siempre presente todas las alergias 
                        e intolerancias alimentarias, así como dietas especiales por enfermedad. La comida es 
                        tradicional (sin frituras), rica en variedad y sabores, con la finalidad 
                        de que los niños conozcan la diversidad de alimentos que nos ofrece la 
                        dieta mediterránea y aprendan los hábitos saludables relacionados con la 
                        alimentación. Las familias tienen a su disposición a nuestra nutricionista, 
                        que resolverá todas las cuestiones y dudas que puedan surgir en relación a 
                        este tema. El centro cuenta además con una lavandería interna (baberos y ropa de cama).`

    useEffect(() => {
        // Función para actualizar los valores de ancho y alto según el tamaño de la pantalla
        const updateDimensions = () => {
                const width = window.innerWidth;
                if (width <= 480) {

                    setCocinaYlavanderiaTituloImagenAnchura(191); // Ancho y alto para pantallas pequeñas
                    setCocinaYlavanderiaTituloImagenAltura(28);

                } else if (width >= 481 && width <= 767) {

                    setCocinaYlavanderiaTituloImagenAnchura(287); // Ancho y alto para pantallas medianas
                    setCocinaYlavanderiaTituloImagenAltura(42);

                } else if (width >= 768 && width <= 959) {

                    setCocinaYlavanderiaTituloImagenAnchura(465); // Ancho y alto para pantallas grandes
                    setCocinaYlavanderiaTituloImagenAltura(68);

                } else if (width >= 960 && width <= 1199) {

                    setCocinaYlavanderiaTituloImagenAnchura(581); // Ancho y alto para pantallas extra grandes
                    setCocinaYlavanderiaTituloImagenAltura(85);

                } else {
                    setCocinaYlavanderiaTituloImagenAnchura(725); // Ancho y alto para pantallas muy grandes
                    setCocinaYlavanderiaTituloImagenAltura(106);
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
                    // backgroundColor: 'rgb(250, 235, 215)',
                    '@media (max-width: 480px)': {
                            width: `${props.anchuraCocinaYlavanderia480px}rem`,
                            height: `${props.alturaaCocinaYlavanderiaPage480px}rem`,
                            marginTop: '1rem',
                    },
                    '@media (min-width: 481px) and (max-width: 767px)': {
                            width: `${props.anchuraCocinaYlavanderia481px_a_767px}rem`,
                            height: `${props.alturaaCocinaYlavanderiaPage481px_a_767px}rem`,
                            marginTop: '1.5rem',
                    },
                    '@media (min-width: 768px) and (max-width: 959px)': {
                            width: `${props.anchuraCocinaYlavanderia768px_a_959px}rem`,
                            height: `${props.alturaaCocinaYlavanderiaPage768px_a_959px}rem`,
                            marginTop: '2rem',
                    },
                    '@media (min-width: 960px) and (max-width: 1199px)': {
                            width: `${props.anchuraCocinaYlavanderia960px_a_1199px}rem`,
                            height: `${props.alturaaCocinaYlavanderiaPage960px_a_1199px}rem`,
                            marginTop: '2.5rem',
                    },
                    '@media (min-width: 1200px)': {
                            width: `${props.anchuraCocinaYlavanderia1200px}rem`,
                            height: `${props.alturaaCocinaYlavanderiaPage1200px}rem`,
                            marginTop: '3rem',
                    }  
        }}>
                  

                  <VolverAinstalacionesYsiguiente enlace={IrAPatios} />


                  <div  className='CocinaYlavanderia-subContainer'>

                              <div className='CocinaYlavanderia-titulo_parrafo-container'>
                              
                                    <TituloCabecera imagenBackgroundUbicacion={CocinaYlavanderiaTituloImagen}
                                                    anchuraTitulo={CocinaYlavanderiaTituloImagenAnchura}
                                                    alturaTitulo={CocinaYlavanderiaTituloImagenAltura} />

                                    <Parrafo parrafoTexto={CocinaYlavanderiaTexto} />
                                    
                              </div>

                              <CocinaYlavanderiaImagen />

                              <Siguiente enlace={IrAPatios} />
                              
                  </div>
          

          </Box>


    </>
  )
}
