import React, { useState, useEffect } from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAinstalacionesYsiguiente } from '../../../Components/componentsConstantes/volverAInstalacionesYSiguiente';
import { Siguiente } from '../../../Components/componentsConstantes/siguiente';
import { TituloCabecera } from '../../../Components/componentsConstantes/tituloCabecera';
import { Parrafo } from '../../../Components/componentsConstantes/parrafo';
import ComedorTitulo from '../../../Images/instalaciones/comedor/comedorTitulo.png'
import { ComedorImagenesCambiantes } from '../../../Components/routesComponents/instalacionesComponents/comedor/comedorImagenesCambiantes';





export const Comedor = ( props ) => {


    const IrAcocinaYlavanderia = 'instalacionesPage/cocinaYlavanderia';
    
    const ComedorTituloImagen = ComedorTitulo;

    const [ComedorTituloImagenAnchura, setComedorTituloImagenAnchura] = useState(0);

    const [ComedorTituloImagenAltura, setComedorTituloImagenAltura] = useState(0);

    const ComedorTexto = `Lullaby es una de las pocas escuelas infantiles de la zona 
                        que ofrece un espacio exclusivamente destinado a la alimentación, 
                        consiguiendo así que las aulas no tengan más función que la propia 
                        educación de los niños, manteniéndolas como espacios agradables, 
                        limpios y ausente olores. El comedor cuenta con un sistema de 
                        filtración de olores y renovación de aire específico para la 
                        actividad que se desarrolla en este espacio: la alimentación.`

    useEffect(() => {
        // Función para actualizar los valores de ancho y alto según el tamaño de la pantalla
        const updateDimensions = () => {
                const width = window.innerWidth;
                if (width <= 480) {

                    setComedorTituloImagenAnchura(160); // Ancho y alto para pantallas pequeñas
                    setComedorTituloImagenAltura(70);

                } else if (width >= 481 && width <= 767) {

                    setComedorTituloImagenAnchura(240); // Ancho y alto para pantallas medianas
                    setComedorTituloImagenAltura(105);

                } else if (width >= 768 && width <= 959) {

                    setComedorTituloImagenAnchura(384); // Ancho y alto para pantallas grandes
                    setComedorTituloImagenAltura(168);

                } else if (width >= 960 && width <= 1199) {

                    setComedorTituloImagenAnchura(479); // Ancho y alto para pantallas extra grandes
                    setComedorTituloImagenAltura(209);

                } else {
                    setComedorTituloImagenAnchura(598); // Ancho y alto para pantallas muy grandes
                    setComedorTituloImagenAltura(261);
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
                        width: `${props.anchuraComedor480px}rem`,
                        marginTop: '1rem',
                        marginBottom: '0rem', 
                  },
                  '@media (min-width: 481px) and (max-width: 767px)': {
                        width: `${props.anchuraComedor481px_a_767px}rem`,
                        marginTop: '1.5rem',
                        marginBottom: '0rem', 
                  },
                  '@media (min-width: 768px) and (max-width: 959px)': {
                        width: `${props.anchuraComedor768px_a_959px}rem`,
                        marginTop: '2rem',
                        marginBottom: '5rem', 
                  },
                  '@media (min-width: 960px) and (max-width: 1199px)': {
                        width: `${props.anchuraComedor960px_a_1199px}rem`,
                        marginTop: '2.5rem',
                        marginBottom: '5rem', 
                  },
                  '@media (min-width: 1200px)': {
                        width: `${props.anchuraComedor1200px}rem`,
                        marginTop: '3rem',
                        marginBottom: '5rem',
                  }  
        }}>
          

                  <VolverAinstalacionesYsiguiente enlace={IrAcocinaYlavanderia} />


                  <div  className='comedor-subContainer'>
                              
                              <div className='comedor-titulo_parrafo-container'>
                                    <TituloCabecera imagenBackgroundUbicacion={ComedorTituloImagen}
                                                    anchuraTitulo={ComedorTituloImagenAnchura}
                                                    alturaTitulo={ComedorTituloImagenAltura} />

                                    <Parrafo parrafoTexto={ComedorTexto} />
                              </div>

                              <ComedorImagenesCambiantes />

                              <Siguiente enlace={IrAcocinaYlavanderia} />

                  </div>
          
        
          </Box>

    </>
  )
}
