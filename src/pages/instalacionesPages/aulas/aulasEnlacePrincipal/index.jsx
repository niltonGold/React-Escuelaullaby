import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AulasTitulo } from '../../../../Components/routesComponents/instalacionesComponents/aulas/aulasTitulo';

export const AulasEnlacePrincipalPage = ( props ) => {
      
      const navigate = useNavigate();
      
      const handleVolverAinstalacionesClick = () => {
            navigate('/instalacionesPage');
      };

      const handleSiguienteClick = () => {
            navigate('/hallYdespacho');
      };

  return (
    <>
          <Box  sx={{     backgroundColor: 'rgb(242, 186, 100)',
                  '@media (max-width: 480px)': {
                        width: `${props.anchuraAulasEnlacePrincipalPage480px}rem`,
                        marginTop: '1rem',
                        marginBottom: '0rem', 
                  },
                  '@media (min-width: 481px) and (max-width: 767px)': {
                        width: `${props.anchuraAulasEnlacePrincipalPage481px_a_767px}rem`,
                        marginTop: '1.5rem',
                        marginBottom: '0rem', 
                  },
                  '@media (min-width: 768px) and (max-width: 959px)': {
                        width: `${props.anchuraAulasEnlacePrincipalPage768px_a_959px}rem`,
                        marginTop: '2rem',
                        marginBottom: '5rem', 
                  },
                  '@media (min-width: 960px) and (max-width: 1199px)': {
                        width: `${props.anchuraAulasEnlacePrincipalPage960px_a_1199px}rem`,
                        marginTop: '2.5rem',
                        marginBottom: '5rem', 
                  },
                  '@media (min-width: 1200px)': {
                        width: `${props.anchuraAulasEnlacePrincipalPage1200px}rem`,
                        marginTop: '3rem',
                        marginBottom: '5rem',
                  }  
          }}>

                  <div className='aulasEnlacePrincipalPage-volverYsiguiente'>
                        <div className='aulasEnlacePrincipalPage-volverAinstalaciones-container' onClick={handleVolverAinstalacionesClick}>
                              <div className='aulasEnlacePrincipalPage-volverAinstalaciones-subContainer'>
                                    &lt;&lt; Volver a Instalaciones
                              </div>
                        </div>

                        <div className='aulasEnlacePrincipalPage-siguiente-container' onClick={handleSiguienteClick}>
                              <div className='aulasEnlacePrincipalPage-siguiente-subContainer'>
                                    Siguiente &gt;&gt;
                              </div>
                        </div>
                  </div>

                  <div  className='aulasEnlacePrincipalPage-subContainer'>
                              <AulasTitulo />
                              <div className='aulasEnlacePrincipalPage-volverYsiguiente'>
                                    
                                    <div />

                                    <div className='aulasEnlacePrincipalPage-siguiente-container' onClick={handleSiguienteClick}>
                                          <div className='aulasEnlacePrincipalPage-siguiente-subContainer'>
                                                Siguiente &gt;&gt;
                                          </div>
                                    </div>
                                    
                              </div>
                  </div>
              
          </Box>
    </>
  )
}
