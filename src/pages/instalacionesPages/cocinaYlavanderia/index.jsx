import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const CocinaYlavanderia = ( props ) => {

      const navigate = useNavigate();
      
      const handleVolverAinstalacionesClick = () => {
            navigate('/instalacionesPage');
      };

      const handleSiguienteClick = () => {
            navigate('/patios');
      };

  return (
    <>
        <Box  sx={{     backgroundColor: 'rgb(242, 186, 100)',
                  '@media (max-width: 480px)': {
                        width: `${props.anchuraCocinaYlavanderia480px}rem`,
                        marginTop: '1rem',
                        marginBottom: '0rem', 
                  },
                  '@media (min-width: 481px) and (max-width: 767px)': {
                        width: `${props.anchuraCocinaYlavanderia481px_a_767px}rem`,
                        marginTop: '1.5rem',
                        marginBottom: '0rem', 
                  },
                  '@media (min-width: 768px) and (max-width: 959px)': {
                        width: `${props.anchuraCocinaYlavanderia768px_a_959px}rem`,
                        marginTop: '2rem',
                        marginBottom: '5rem', 
                  },
                  '@media (min-width: 960px) and (max-width: 1199px)': {
                        width: `${props.anchuraCocinaYlavanderia960px_a_1199px}rem`,
                        marginTop: '2.5rem',
                        marginBottom: '5rem', 
                  },
                  '@media (min-width: 1200px)': {
                        width: `${props.anchuraCocinaYlavanderia1200px}rem`,
                        marginTop: '3rem',
                        marginBottom: '5rem',
                  }  
          }}>
          
                  <div className='cocinaYlavanderia-volverYsiguiente'>
                        <div className='cocinaYlavanderia-volverAinstalaciones-container' onClick={handleVolverAinstalacionesClick}>
                              <div className='cocinaYlavanderia-volverAinstalaciones-subContainer'>
                                    &lt;&lt; Volver a Instalaciones
                              </div>
                        </div>

                        <div className='cocinaYlavanderia-siguiente-container' onClick={handleSiguienteClick}>
                              <div className='cocinaYlavanderia-siguiente-subContainer'>
                                    Siguiente &gt;&gt;
                              </div>
                        </div>
                  </div>

                  <div  className='cocinaYlavanderia-subContainer'>
                              cocinaYlavanderia
                              <div className='cocinaYlavanderia-volverYsiguiente'>
                                    
                                    <div />

                                    <div className='cocinaYlavanderia-siguiente-container' onClick={handleSiguienteClick}>
                                          <div className='cocinaYlavanderia-siguiente-subContainer'>
                                                Siguiente &gt;&gt;
                                          </div>
                                    </div>
                                    
                              </div>
                  </div>
          
          </Box>
    </>
  )
}
