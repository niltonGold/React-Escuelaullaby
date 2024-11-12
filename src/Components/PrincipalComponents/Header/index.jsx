import React from 'react';
import './styles.css';
import { HeaderLullabyLogo } from '../../headerComponents/headerLullabyLogo';
import { HeaderEnlacesRedondos } from '../../headerComponents/headerEnlacesRodondosComponents';
import { HeaderPaginasNavegacion } from '../../headerComponents/headerPaginasNavegacion';
import { Box } from '@mui/material';

export const Header = ( props ) => {
  return (
      <>
            <div className='Header-Principal-Container' >
                  
                  
                        <Box  sx={{       '@media (max-width: 480px)': {
                                                width: `${props.anchuraHeader480px}rem`, 
                                          },
                                          '@media (min-width: 481px) and (max-width: 767px)': {
                                                width: `${props.anchuraHeader481px_a_767px}rem`, 
                                          },
                                          '@media (min-width: 768px) and (max-width: 959px)': {
                                                width: `${props.anchuraHeader768px_a_959px}rem`, 
                                          },
                                          '@media (min-width: 960px) and (max-width: 1199px)': {
                                                width: `${props.anchuraHeader960px_a_1199px}rem`, 
                                          },
                                          '@media (min-width: 1200px)': {
                                                width: `${props.anchuraHeader1200px}rem`, 
                                          }  
                                          }}>
                                    <div className='header-logoLullby-enlacesRedondos-container'>
                                          <HeaderLullabyLogo/>
                                          <HeaderEnlacesRedondos/>
                                    </div>
                        </Box>
                        
                        <HeaderPaginasNavegacion/>


            </div>
      </>
  )
}




