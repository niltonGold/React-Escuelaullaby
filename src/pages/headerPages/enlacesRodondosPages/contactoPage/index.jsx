import React from 'react';
import './styles.css';
import { Box } from '@mui/material';

export const ContactoPage = ( props ) => {
  return (
        <Box  sx={{     backgroundColor: 'yellowgreen',
          '@media (max-width: 480px)': {
                width: `${props.anchuraContactoPage480px}rem`, 
          },
          '@media (min-width: 481px) and (max-width: 767px)': {
                width: `${props.anchuraContactoPage481px_a_767px}rem`, 
          },
          '@media (min-width: 768px) and (max-width: 959px)': {
                width: `${props.anchuraContactoPage768px_a_959px}rem`, 
          },
          '@media (min-width: 960px) and (max-width: 1199px)': {
                width: `${props.anchuraContactoPage960px_a_1199px}rem`, 
          },
          '@media (min-width: 1200px)': {
                width: `${props.anchuraContactoPage1200px}rem`, 
          }  
        }}>


              ContactoPage


        </Box>  
  )
}
