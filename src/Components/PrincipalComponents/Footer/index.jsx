import React from 'react';
import './styles.css';
import { Box } from '@mui/material';

export const Footer = ( props ) => {
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
                                      
                                          <div className='footer-redesSociales footer-instagram' />
                                          
                                          <div className='footer-redesSociales footer-facebook' />

                                          <div className='footer-redesSociales footer-x' />

                                          <div className='footer-contactanos'>Contactanos</div>

                                          <div className='footer-comundadDeMadrid'/>

                                  </div> 
                                    
                                  <div className='footer-logoLullabyEscudo'/> 
                                
                          </div>


                  </Box>

            </div>
      </>
  )
}
