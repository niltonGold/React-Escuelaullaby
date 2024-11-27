import React from 'react';
import './styles.css';
import { Box } from '@mui/material';

export const InglesPage = ( props ) => {
  return (
    <Box  sx={{     backgroundColor: 'rgb(242, 186, 113)',
                  '@media (max-width: 480px)': {
                        width: `${props.anchuraInglesPage480px}rem`,
                        marginTop: '1rem',
                        marginBottom: '0rem', 
                  },
                  '@media (min-width: 481px) and (max-width: 767px)': {
                        width: `${props.anchuraInglesPage481px_a_767px}rem`,
                        marginTop: '1.5rem',
                        marginBottom: '0rem',  
                  },
                  '@media (min-width: 768px) and (max-width: 959px)': {
                        width: `${props.anchuraInglesPage768px_a_959px}rem`, 
                        marginTop: '2rem',
                        marginBottom: '5rem', 
                  },
                  '@media (min-width: 960px) and (max-width: 1199px)': {
                        width: `${props.anchuraInglesPage960px_a_1199px}rem`,
                        marginTop: '2.5rem',
                        marginBottom: '5rem',
                  },
                  '@media (min-width: 1200px)': {
                        width: `${props.anchuraInglesPage1200px}rem`,
                        marginTop: '3rem',
                        marginBottom: '5rem',  
                  }  
    }}>


          InglesPage


    </Box>
  )
}
