import React from 'react';
import './styles.css';
import { Box } from '@mui/material';

export const CuadernoNotas = ( props ) => {
  return (
    <>

        <Box  sx={{ '@media (max-width: 480px)': {
                            width: `${props.anchuraCuadernoNotas480px}rem`, 
                    },
                    '@media (min-width: 481px) and (max-width: 767px)': {
                            width: `${props.anchuraCuadernoNotas481px_a_767px}rem`, 
                    },
                    '@media (min-width: 768px) and (max-width: 959px)': {
                            width: `${props.anchuraCuadernoNotas768px_a_959px}rem`, 
                    },
                    '@media (min-width: 960px) and (max-width: 1199px)': {
                            width: `${props.anchuraCuadernoNotas960px_a_1199px}rem`, 
                    },
                    '@media (min-width: 1200px)': {
                            width: `${props.anchuraCuadernoNotas1200px}rem`, 
                    }  
        }}>   
                    
                    
                    <div className='CuadernoNotas-Principal-Container'>
                       
                            
                            <div className='cuadernoNotas-subContainer'>
                                

                                        <div className='cuadernoNotas-parrafo-Container'>
                                            
                                                    <div className='cuadernoNotas-parrafo-titulo'>
                                                        Ven a Conocernos
                                                    </div>
                                                    
                                                    <div className='cuadernoNotas-parrafo'>
                                                        La Escuela Infantil Lullaby es un centro de nueva construcción
                                                        de 300 metros cuadrados en una sola planta, grandes espacios
                                                        iluminados con luz natural todo el año y dotado con los mejores
                                                        equipamientos. <b>Y más de 1000 metros cuadrados de jardines y 
                                                        patios al aire libre</b>, diferenciados por edades. 
                                                    </div>
                                                    
                                                    <div className='cuadernoNotas-parrafo'>
                                                        <i>¿Te lo vas a perder?</i>
                                                    </div>
                                                    
                                                    <div className='cuadernoNotas-parrafo'>
                                                        <b>Llámanos al 681 285 932.</b>
                                                    </div>

                                        </div>


                                        <div className='cuadernoNotas-lineaDivisora'/>
                        

                                        <div className='cuadernoNotas-parrafo-Container'>
                                                    
                                                    <div className='cuadernoNotas-parrafo-titulo'>
                                                        Aprendizaje por Descubrimiento
                                                    </div>
                                                    
                                                    <div>
                                                            <div className='cuadernoNotas-parrafo'>
                                                                <b>¿Eres un pequeño explorador, un trepidante aventurero o un curioso descubridor?</b>
                                                            </div>
                                                            
                                                            <div className='cuadernoNotas-parrafo'>
                                                                En Lullaby, nuestros niños aprenden y conocen su entorno, sorprendiéndose con cada pequeño 
                                                                descubrimiento, aventurándose en caminos que antes no habían transitado, explorando
                                                                cada centímetro del mundo que les rodea. Pero, sobre todo, en Lullaby <b>nuestros 
                                                                niños son felices</b> porque experimentan ese mundo en un ambiente de cariño y
                                                                seguridad.
                                                            </div>
                                                            <div className='cuadernoNotas-parrafo'>
                                                                <b><i>¿Te apuntas?</i> Ven con nosotros</b>.
                                                            </div>
                                                    </div> 

                                        </div>


                            </div>


                    </div>

                    
        </Box>


    </>
  )
}

