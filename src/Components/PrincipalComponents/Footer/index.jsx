import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';





export const Footer = ( props ) => {


    const navigate = useNavigate();

    const handleContactoClick = () => {
        window.scrollTo({ top: 0 });
        navigate('/contactoPage');
    };


  return (
      <>


            <div className='Footer-Principal-Container'>
                  
                    <Box  sx={{   '@media (max-width: 480px)': {
                                        width: `${ props.anchuraHeader480px }rem`, 
                                  },
                                  '@media (min-width: 481px) and (max-width: 767px)': {
                                        width: `${ props.anchuraHeader481px_a_767px }rem`, 
                                  },
                                  '@media (min-width: 768px) and (max-width: 959px)': {
                                        width: `${ props.anchuraHeader768px_a_959px }rem`, 
                                  },
                                  '@media (min-width: 960px) and (max-width: 1199px)': {
                                        width: `${ props.anchuraHeader960px_a_1199px }rem`, 
                                  },
                                  '@media (min-width: 1200px)': {
                                        width: `${ props.anchuraHeader1200px }rem`, 
                                  }  
                    }}>
                          
                          
                          <div className='footer-subContainer'>
                              
                                  <div className='footer-sub-subContainer'>

                                            <a  href="https://www.instagram.com/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >

                                                    <div className='footer-redesSociales footer-instagram' />

                                            </a>

                                            <a  href="https://www.facebook.com/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >

                                                    <div className='footer-redesSociales footer-facebook' />

                                            </a>

                                            <a  href="https://twitter.com/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >

                                                    <div className='footer-redesSociales footer-x' />

                                            </a>

                                            <div className='footer-contactanos' onClick={handleContactoClick} >Contactanos</div>

                                            <a  className='footer-comundadDeMadrid'  
                                                href="https://www.comunidad.madrid/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                
                                                <div className='footer-comundadDeMadrid'/>

                                            </a>

                                  </div> 
                                    
                                  <div className='footer-logoLullabyEscudo'/> 
                                
                          </div>


                  </Box>

            </div>


      </>
  )
}
