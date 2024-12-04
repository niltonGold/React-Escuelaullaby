import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { BannerCelesteCentral } from '../../../../Components/routesComponents/inicioComponents/bannerCelesteleCentral';
import { CuadernoNotas } from '../../../../Components/routesComponents/inicioComponents/cuadernoNotas';
import { EnlacesRedondosImagenesPrincipal } from '../../../../Components/routesComponents/inicioComponents/enlacesRedondosImagenes/enlacesRedondosImagenesPrincipal';





export const InicioPage = ( props ) => {


  return (
    <>  
    
            <div className='InicioPage-Principal-Container'>


                        <Box  sx={{     '@media (max-width: 480px)': {
                                                width: `${ props.anchuraInicio480px }rem`,
                                                marginTop: '1rem',
                                                marginBottom: '1rem',  
                                          },
                                          '@media (min-width: 481px) and (max-width: 767px)': {
                                                width: `${ props.anchuraInicio481px_a_767px }rem`,
                                                marginTop: '1.5rem',
                                                marginBottom: '1.5rem',  
                                          },
                                          '@media (min-width: 768px) and (max-width: 959px)': {
                                                width: `${ props.anchuraInicio768px_a_959px }rem`, 
                                                marginTop: '2rem',
                                                marginBottom: '2rem',
                                          },
                                          '@media (min-width: 960px) and (max-width: 1199px)': {
                                                width: `${ props.anchuraInicio960px_a_1199px }rem`,
                                                marginTop: '2.5rem',
                                                marginBottom: '2.5rem',  
                                          },
                                          '@media (min-width: 1200px)': {
                                                width: `${ props.anchuraInicio1200px }rem`,
                                                marginTop: '3rem',
                                                marginBottom: '3rem',  
                                          }  
                        }}>
                              
                                    <EnlacesRedondosImagenesPrincipal />
                        
                        </Box>



                        <BannerCelesteCentral anchuraBannerCelesteCentral480px={ props.anchuraInicio480px }
                                              anchuraBannerCelesteCentral481px_a_767px={ props.anchuraInicio481px_a_767px}
                                              anchuraBannerCelesteCentral768px_a_959px={ props.anchuraInicio768px_a_959px }
                                              anchuraBannerCelesteCentral960px_a_1199px={ props.anchuraInicio960px_a_1199px }
                                              anchuraBannerCelesteCentral1200px={ props.anchuraInicio1200px } />
                  
                        <CuadernoNotas  anchuraCuadernoNotas480px={ props.anchuraInicio480px }
                                        anchuraCuadernoNotas481px_a_767px={ props.anchuraInicio481px_a_767px }
                                        anchuraCuadernoNotas768px_a_959px={ props.anchuraInicio768px_a_959px }
                                        anchuraCuadernoNotas960px_a_1199px={ props.anchuraInicio960px_a_1199px }
                                        anchuraCuadernoNotas1200px={ props.anchuraInicio1200px } /> 


        </div>

    </>
  )
}
