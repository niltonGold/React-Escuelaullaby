import React from 'react';
import './styles.css';
import { Box } from '@mui/material';

export const ZonaPrivadaPage = ( props ) => {
  return (
        <Box  sx={{     backgroundColor: 'yellowgreen',
          '@media (max-width: 480px)': {
                width: `${props.anchuraZonaPrivadaPage480px}rem`, 
          },
          '@media (min-width: 481px) and (max-width: 767px)': {
                width: `${props.anchuraZonaPrivadaPage481px_a_767px}rem`, 
          },
          '@media (min-width: 768px) and (max-width: 959px)': {
                width: `${props.anchuraZonaPrivadaPage768px_a_959px}rem`, 
          },
          '@media (min-width: 960px) and (max-width: 1199px)': {
                width: `${props.anchuraZonaPrivadaPage960px_a_1199px}rem`, 
          },
          '@media (min-width: 1200px)': {
                width: `${props.anchuraZonaPrivadaPage1200px}rem`, 
          }  
        }}>


              ZonaPrivadaPage


        </Box>  
  )
}
