import React from 'react';
import './styles.css';
import { Box } from '@mui/material';

export const BannerCelesteCentral = ( props ) => {
  return (
        <>
            <div className='BannerCelesteCentral-Principal-Container'>

            <Box  sx={{ '@media (max-width: 480px)': {
                                width: `${props.anchuraBannerCelesteCentral480px}rem`, 
                        },
                        '@media (min-width: 481px) and (max-width: 767px)': {
                                width: `${props.anchuraBannerCelesteCentral481px_a_767px}rem`, 
                        },
                        '@media (min-width: 768px) and (max-width: 959px)': {
                                width: `${props.anchuraBannerCelesteCentral768px_a_959px}rem`, 
                        },
                        '@media (min-width: 960px) and (max-width: 1199px)': {
                                width: `${props.anchuraBannerCelesteCentral960px_a_1199px}rem`, 
                        },
                        '@media (min-width: 1200px)': {
                                width: `${props.anchuraBannerCelesteCentral1200px}rem`, 
                        }  
                        }}>   
                    
                                    <div className='bannerCelesteCentral-subcontainer'>
                                            
                                                <div className='bannerCelesteCentral-titulo-texto-container'>
                                                    <div className='bannerCelesteCentral-titulo'>Dirección :</div>
                                                    <div className='bannerCelesteCentral-texto'>C/Salónica 43 Las Rozas de Madrid</div>
                                                </div>
                                                <div className='bannerCelesteCentral-titulo-texto-container'>
                                                    <div className='bannerCelesteCentral-titulo'>Teléfono :</div>
                                                    <div className='bannerCelesteCentral-texto bannerCelesteCentral-texto-telefono'>681 285 932</div>
                                                </div>
                                        
                                                <div className='bannerCelesteCentral-titulo-texto-container'>
                                                    <div className='bannerCelesteCentral-titulo'>Mail :</div>
                                                    <div className='bannerCelesteCentral-texto'>info@escuelalullaby.es</div>
                                                </div>
                                                
                                                <div className='bannerCelesteCentral-redesSociales-container'>
                                                    <div className='bannerCelesteCentral-redSocial bannerCelesteCentral-instagram'/>
                                                    <div className='bannerCelesteCentral-redSocial bannerCelesteCentral-facebook'/>
                                                    <div className='bannerCelesteCentral-redSocial bannerCelesteCentral-x'/>
                                                </div>
                                    
                                    </div>

            </Box>

            </div>
        </>
  )
}
