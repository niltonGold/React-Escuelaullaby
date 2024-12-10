import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';





export const BannerCelesteCentral = ( props ) => {


    const navigate = useNavigate();

    const handleGoToContacto = () => {
        window.scrollTo({ top: 0 });
        navigate('/contactoPage');
    }


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
                                                        <div className='bannerCelesteCentral-texto' onClick={handleGoToContacto} >C/Salónica 43 Las Rozas de Madrid</div>
                                                    </div>


                                                    <div className='bannerCelesteCentral-titulo-texto-container'>
                                                        <div className='bannerCelesteCentral-titulo'>Teléfono :</div>
                                                        <div className='bannerCelesteCentral-texto bannerCelesteCentral-texto-telefono' onClick={handleGoToContacto} >681 285 932</div>
                                                    </div>
                                            

                                                    <div className='bannerCelesteCentral-titulo-texto-container'>
                                                        <div className='bannerCelesteCentral-titulo'>Mail :</div>
                                                        <a className='bannerCelesteCentral-texto'
                                                           href="mailto:info@escuelalullaby.es?subject=Consulta desde la web&body=Hola, me gustaría obtener más información sobre...">
                                                            info@escuelalullaby.es
                                                        </a>
                                                    </div>
                                                    

                                                    <div className='bannerCelesteCentral-redesSociales-container'>

                                                                <a  href="https://www.instagram.com/" 
                                                                    target="_blank" 
                                                                    rel="noopener noreferrer"
                                                                >

                                                                        <div className='bannerCelesteCentral-redSocial bannerCelesteCentral-instagram'/>

                                                                </a>
                                                                

                                                                <a  href="https://www.facebook.com/" 
                                                                    target="_blank" 
                                                                    rel="noopener noreferrer"
                                                                >

                                                                    <div className='bannerCelesteCentral-redSocial bannerCelesteCentral-facebook'/>

                                                                </a>


                                                                <a  href="https://twitter.com/" 
                                                                    target="_blank" 
                                                                    rel="noopener noreferrer"
                                                                >

                                                                    <div className='bannerCelesteCentral-redSocial bannerCelesteCentral-x'/>
                                                                    
                                                                </a>

                                                    </div>

                                        </div>

                </Box>

                </div>


        </>
  )
}
