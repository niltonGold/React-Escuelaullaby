import React from 'react';
import './styles.css';
import { Box } from '@mui/material';

export const EquipoPage = ( props ) => {
  return (
    <Box  sx={{     backgroundColor: 'rgb(242, 186, 113)',
          '@media (max-width: 480px)': {
                width: `${props.anchuraEquipoPage480px}rem`, 
          },
          '@media (min-width: 481px) and (max-width: 767px)': {
                width: `${props.anchuraEquipoPage481px_a_767px}rem`, 
          },
          '@media (min-width: 768px) and (max-width: 959px)': {
                width: `${props.anchuraEquipoPage768px_a_959px}rem`, 
          },
          '@media (min-width: 960px) and (max-width: 1199px)': {
                width: `${props.anchuraEquipoPage960px_a_1199px}rem`, 
          },
          '@media (min-width: 1200px)': {
                width: `${props.anchuraEquipoPage1200px}rem`, 
          }  
    }}>


            EquipoPage


    </Box>
  )
}
