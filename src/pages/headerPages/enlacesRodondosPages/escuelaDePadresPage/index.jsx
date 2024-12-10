import React, { useState, useEffect } from 'react';
import './styles.css';
import { Box } from '@mui/material';
import EscuelaDePadresTituloImagen from '../../../../Images/Header/escuelaDePadresTitulo.png';
import { Parrafo } from '../../../../Components/componentsConstantes/parrafo';
import { TituloCabecera } from '../../../../Components/componentsConstantes/tituloCabecera';





export const EscuelaDePadresPage = ( props ) => {


    const [EscuelaDePadresTituloTituloImagenAnchura, setEscuelaDePadresTituloTituloImagenAnchura] = useState(0);

    const [EscuelaDePadresTituloTituloImagenAltura, setEscuelaDePadresTituloTituloImagenAltura] = useState(0);

    const EsculaDePadresParrafo1 = `En Lullaby, damos mucha importancia a la participación de 
                                    los padres en el funcionamiento de la escuela con espacios 
                                    y actividades como:`;
    
    const EscuelaDePadresLogo = EscuelaDePadresTituloImagen;

    const EsculaDePadresParrafo2 = `Un espacio de encuentro y lugar de reunión para la comunidad 
                                    educativa de Lullaby (familias, maestros y profesionales de 
                                    distintas disciplinas relacionadas con la educación y el 
                                    desarrollo integral de los niños). `;

    const EsculaDePadresParrafo3 = `De manera periódica se organizan sesiones dirigidas por personas 
                                    especializadas en aspectos esenciales de la crianza de los más 
                                    pequeños. Se realizan charlas, reuniones informativas, cursos, 
                                    debates, etc., que versarán sobre temas tan interesantes y sugerentes 
                                    como: el sueño, la alimentación, el control de esfínteres, el masaje 
                                    infantil, el control de conductas….`;
    
    useEffect(() => {
    // Función para actualizar los valores de ancho y alto según el tamaño de la pantalla
    const updateDimensions = () => {
        const width = window.innerWidth;
        if (width <= 480) {
                setEscuelaDePadresTituloTituloImagenAnchura(123);
                setEscuelaDePadresTituloTituloImagenAltura(23);

        } else if (width >= 481 && width <= 767) {
                setEscuelaDePadresTituloTituloImagenAnchura(184);
                setEscuelaDePadresTituloTituloImagenAltura(34);

        } else if (width >= 768 && width <= 959) {
                setEscuelaDePadresTituloTituloImagenAnchura(294);
                setEscuelaDePadresTituloTituloImagenAltura(55);

        } else if (width >= 960 && width <= 1199) {
                setEscuelaDePadresTituloTituloImagenAnchura(369);
                setEscuelaDePadresTituloTituloImagenAltura(69);

        } else {
                setEscuelaDePadresTituloTituloImagenAnchura(461);
                setEscuelaDePadresTituloTituloImagenAltura(86);

        }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
    }, []);


  return (
    <>


        <Box  sx={{     
                    // backgroundColor: `rgb(250, 235, 215)`,
                    '@media (max-width: 480px)': {
                            width: `${props.anchuraEscuelaDePadresPage480px}rem`,
                            height: `${props.alturaEscuelaDePadresPage480px}rem`,
                            marginTop: '1rem',
                    },
                    '@media (min-width: 481px) and (max-width: 767px)': {
                            width: `${props.anchuraEscuelaDePadresPage481px_a_767px}rem`,
                            height: `${props.alturaEscuelaDePadresPage481px_a_767px}rem`,
                            marginTop: '1.5rem',
                    },
                    '@media (min-width: 768px) and (max-width: 959px)': {
                            width: `${props.anchuraEscuelaDePadresPage768px_a_959px}rem`,
                            height: `${props.alturaEscuelaDePadresPage768px_a_959px}rem`,
                            marginTop: '2rem',
                    },
                    '@media (min-width: 960px) and (max-width: 1199px)': {
                            width: `${props.anchuraEscuelaDePadresPage960px_a_1199px}rem`,
                            height: `${props.alturaEscuelaDePadresPage960px_a_1199px}rem`,
                            marginTop: '2.5rem', 
                    },
                    '@media (min-width: 1200px)': {
                            width: `${props.anchuraEscuelaDePadresPage1200px}rem`,
                            height: `${props.alturaEscuelaDePadresPage1200px}rem`,
                            marginTop: '3rem',
                    }  
        }}>


                  <div className='EscuelaDePadresPage-Parrafos-Container'>

                        <Parrafo parrafoTexto={EsculaDePadresParrafo1} />

                        <TituloCabecera 
                                    imagenBackgroundUbicacion={EscuelaDePadresLogo}
                                    anchuraTitulo={EscuelaDePadresTituloTituloImagenAnchura}
                                    alturaTitulo={EscuelaDePadresTituloTituloImagenAltura} 
                        />

                        <Parrafo parrafoTexto={EsculaDePadresParrafo2} />

                        <Parrafo parrafoTexto={EsculaDePadresParrafo3} />
                        
                  </div>       


        </Box>


    </>
  )
}
