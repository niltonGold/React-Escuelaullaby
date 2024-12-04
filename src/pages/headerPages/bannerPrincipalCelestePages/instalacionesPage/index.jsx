import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { InstalacionesParrafo } from '../../../../Components/routesComponents/instalacionesComponents/instalacionesPrincipalComponents/instalacionesParrafos';
import { InstalacionesImagenesCambiantes } from '../../../../Components/routesComponents/instalacionesComponents/instalacionesPrincipalComponents/instalacionesImagnesCambiantes';
import { InstalacionesEnlacesRedondos } from '../../../../Components/routesComponents/instalacionesComponents/instalacionesPrincipalComponents/instalacionesEnlacesRedondos';

export const InstalacionesPage = ( props ) => {

  return (
      
    <>
        <Box  sx={{     
                        // backgroundColor: 'rgb(242, 186, 113)',
                        '@media (max-width: 480px)': {
                              width: `${props.anchuraInstalacionesPage480px}rem`,
                              marginTop: '1rem',
                              marginBottom: '0rem', 
                        },
                        '@media (min-width: 481px) and (max-width: 767px)': {
                              width: `${props.anchuraInstalacionesPage481px_a_767px}rem`,
                              marginTop: '1.5rem',
                              marginBottom: '0rem', 
                        },
                        '@media (min-width: 768px) and (max-width: 959px)': {
                              width: `${props.anchuraInstalacionesPage768px_a_959px}rem`,
                              marginTop: '2rem',
                              marginBottom: '5rem', 
                        },
                        '@media (min-width: 960px) and (max-width: 1199px)': {
                              width: `${props.anchuraInstalacionesPage960px_a_1199px}rem`,
                              marginTop: '2.5rem',
                              marginBottom: '5rem', 
                        },
                        '@media (min-width: 1200px)': {
                              width: `${props.anchuraInstalacionesPage1200px}rem`,
                              marginTop: '3rem',
                              marginBottom: '5rem',
                        }  
        }}>


                        <div className='InstalacionesPage-PrincipalContainer'>
                              
                              <InstalacionesParrafo/>
                              
                              <InstalacionesImagenesCambiantes />
                              
                              <InstalacionesEnlacesRedondos />

                        </div>


        </Box>
</>
  )
}
