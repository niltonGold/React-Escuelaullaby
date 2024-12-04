import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { ParrafoEquipo } from '../../../../Components/routesComponents/equipoComponents/parrafoEquipo';
import { RosaAyudanteIzquierda } from '../../../../Components/routesComponents/equipoComponents/rosaAyudanteIzquierda';
import { ClaudiaAyudanteIzquierda } from '../../../../Components/routesComponents/equipoComponents/claudiaAyudanteIzquierda';
import { CarmenAyudanteIzquierda } from '../../../../Components/routesComponents/equipoComponents/carmenAyudanteIzquierda';
import { AnaAyudanteDerecha } from '../../../../Components/routesComponents/equipoComponents/anaAyudanteDerecha';
import { VictoriaAyudanteDerecha } from '../../../../Components/routesComponents/equipoComponents/victoriaAyudanteDerecha';
import { NoraAyudanteDerecha } from '../../../../Components/routesComponents/equipoComponents/noraAyudanteDerecha';





export const EquipoPage = ( props ) => {


  return (
    <>


            <Box  sx={{     
                // backgroundColor: 'rgb(242, 186, 113)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                '@media (max-width: 480px)': {
                        width: `${props.anchuraEquipoPage480px}rem`,
                        marginTop: '1rem',
                        marginBottom: '0rem', 
                        gap: '0.5rem',
                },
                '@media (min-width: 481px) and (max-width: 767px)': {
                        width: `${props.anchuraEquipoPage481px_a_767px}rem`,
                        marginTop: '1.5rem',
                        marginBottom: '0rem', 
                        gap: '1rem', 
                },
                '@media (min-width: 768px) and (max-width: 959px)': {
                        width: `${props.anchuraEquipoPage768px_a_959px}rem`,
                        marginTop: '2rem',
                        marginBottom: '5rem',
                        gap: '1.5rem', 
                },
                '@media (min-width: 960px) and (max-width: 1199px)': {
                        width: `${props.anchuraEquipoPage960px_a_1199px}rem`,
                        marginTop: '2.5rem',
                        marginBottom: '5rem',
                        gap: '2rem',   
                },
                '@media (min-width: 1200px)': {
                        width: `${props.anchuraEquipoPage1200px}rem`,
                        marginTop: '3rem',
                        marginBottom: '5rem',
                        gap: '2.5rem', 
                }  
            }}>


                    <ParrafoEquipo />


                    <div className='EquipoPage-Ayudantes-Container'>
                            
                            <div className='EquipoPage-izquierda'>

                                    <RosaAyudanteIzquierda />

                                    <ClaudiaAyudanteIzquierda />

                                    <CarmenAyudanteIzquierda />

                            </div>

                            <div className='EquipoPage-derecha'>

                                    <AnaAyudanteDerecha />

                                    <VictoriaAyudanteDerecha />

                                    <NoraAyudanteDerecha />
                                    
                            </div>

                    </div>


            </Box>


    </>
  )
}
