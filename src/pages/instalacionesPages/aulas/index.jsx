import React, { useState, useEffect } from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAinstalacionesYsiguiente } from '../../../Components/componentsConstantes/volverAInstalacionesYSiguiente';
import AulaTitulo from '../../../Images/instalaciones/aulas/aulasImagenesPrincipales/aulasTitulo.png';
import { TituloCabecera } from '../../../Components/componentsConstantes/tituloCabecera';
import { Parrafo } from '../../../Components/componentsConstantes/parrafo';
import { Siguiente } from '../../../Components/componentsConstantes/siguiente';
import { AulasExploradores } from '../../../Components/routesComponents/instalacionesComponents/aulas/aulasExploradores';
import { AulasAventureros } from '../../../Components/routesComponents/instalacionesComponents/aulas/aulasAventureros';
import { AulasDescubridores } from '../../../Components/routesComponents/instalacionesComponents/aulas/aulasDescubridores';
import { AulasDarwin } from '../../../Components/routesComponents/instalacionesComponents/aulas/aulasDarwin';





export const AulasEnlacePrincipalPage = (props) => {


    const IrAhallYdespachos = 'instalacionesPage/hallYdespacho';

    // Aula Titulo
    const AulaTituloImagen = AulaTitulo;
    const [AulaTituloImagenAnchura, setAulaTituloImagenAnchura] = useState(0);
    const [AulaTituloImagenAltura, setAulaTituloImagenAltura] = useState(0);

    const AulasTexto = `Espacios amplios y luminosos organizados por rincones y zonas 
                        específicas para satisfacer las necesidades de los niños en cada momento 
                        del día: cambiador, aseos y áreas de actividades. Todas las aulas, incluida 
                        la de psicomotricidad, cuentan con salida directa al patio.`;

    useEffect(() => {
        // Función para actualizar los valores de ancho y alto según el tamaño de la pantalla
        const updateDimensions = () => {
            const width = window.innerWidth;
            if (width <= 480) {
                setAulaTituloImagenAnchura(56);
                setAulaTituloImagenAltura(28);

            } else if (width >= 481 && width <= 767) {
                setAulaTituloImagenAnchura(84);
                setAulaTituloImagenAltura(42);

            } else if (width >= 768 && width <= 959) {
                setAulaTituloImagenAnchura(136);
                setAulaTituloImagenAltura(68);

            } else if (width >= 960 && width <= 1199) {
                setAulaTituloImagenAnchura(170);
                setAulaTituloImagenAltura(85);

            } else {
                setAulaTituloImagenAnchura(213);
                setAulaTituloImagenAltura(107);

            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);


    return (
        <>


            <Box sx={{
                // backgroundColor: 'rgb(250, 235, 215)',
                '@media (max-width: 480px)': {
                    width: `${props.anchuraAulasEnlacePrincipalPage480px}rem`,
                    height: `${props.alturaAulasEnlacePrincipalPage480px}rem`,
                    marginTop: '1rem',
                },
                '@media (min-width: 481px) and (max-width: 767px)': {
                    width: `${props.anchuraAulasEnlacePrincipalPage481px_a_767px}rem`,
                    height: `${props.alturaAulasEnlacePrincipalPage481px_a_767px}rem`,
                    marginTop: '1.5rem',
                },
                '@media (min-width: 768px) and (max-width: 959px)': {
                    width: `${props.anchuraAulasEnlacePrincipalPage768px_a_959px}rem`,
                    height: `${props.alturaAulasEnlacePrincipalPage768px_a_959px}rem`,
                    marginTop: '2rem',
                },
                '@media (min-width: 960px) and (max-width: 1199px)': {
                    width: `${props.anchuraAulasEnlacePrincipalPage960px_a_1199px}rem`,
                    height: `${props.alturaAulasEnlacePrincipalPage960px_a_1199px}rem`,
                    marginTop: '2.5rem',
                },
                '@media (min-width: 1200px)': {
                    width: `${props.anchuraAulasEnlacePrincipalPage1200px}rem`,
                    height: `${props.alturaAulasEnlacePrincipalPage1200px}rem`,
                    marginTop: '3rem',
                }
            }}>
                
                
                <VolverAinstalacionesYsiguiente enlace={IrAhallYdespachos} />
                

                <div className='aulasEnlacePrincipalPage-subContainer'>
                    
                    
                            <div>

                                <TituloCabecera 
                                    imagenBackgroundUbicacion={AulaTituloImagen}
                                    anchuraTitulo={AulaTituloImagenAnchura}
                                    alturaTitulo={AulaTituloImagenAltura} 
                                />

                                <Parrafo parrafoTexto={AulasTexto} />
                                
                            </div>

                            <div className='aulasEnlacePrincipalPage-aulasEnlacesContainer'>
                                
                                <div className='aulasEnlacePrincipalPage-aulasEnlaces-Sub-Container'>
                                        
                                        <AulasExploradores />

                                        <AulasAventureros />

                                </div>
                                
                                <div className='aulasEnlacePrincipalPage-aulasEnlaces-Sub-Container'>
                                        
                                        <AulasDescubridores />

                                        <AulasDarwin /> 

                                </div>

                            </div>
                                
                            <Siguiente enlace={IrAhallYdespachos} />


                </div>

            </Box>


        </>
    );
}
