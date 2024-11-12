import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const HuertoEinvernadero = ( props ) => {

      const navigate = useNavigate();
      
      const handleVolverAinstalacionesClick = () => {
            navigate('/instalacionesPage');
      };

      const handleSiguienteClick = () => {
            navigate('/salonDeActos');
      };

  return (
    <>
        <Box  sx={{     backgroundColor: 'rgb(242, 186, 100)',
                  '@media (max-width: 480px)': {
                        width: `${props.anchuraHuertoEinvernadero480px}rem`,
                        marginTop: '1rem',
                        marginBottom: '0rem', 
                  },
                  '@media (min-width: 481px) and (max-width: 767px)': {
                        width: `${props.anchuraHuertoEinvernadero481px_a_767px}rem`,
                        marginTop: '1.5rem',
                        marginBottom: '0rem', 
                  },
                  '@media (min-width: 768px) and (max-width: 959px)': {
                        width: `${props.anchuraHuertoEinvernadero768px_a_959px}rem`,
                        marginTop: '2rem',
                        marginBottom: '5rem', 
                  },
                  '@media (min-width: 960px) and (max-width: 1199px)': {
                        width: `${props.anchuraHuertoEinvernadero960px_a_1199px}rem`,
                        marginTop: '2.5rem',
                        marginBottom: '5rem', 
                  },
                  '@media (min-width: 1200px)': {
                        width: `${props.anchuraHuertoEinvernadero1200px}rem`,
                        marginTop: '3rem',
                        marginBottom: '5rem',
                  }  
          }}>
          

                  <div className='huertoEinvernadero-volverYsiguiente'>
                        <div className='huertoEinvernadero-volverAinstalaciones-container' onClick={handleVolverAinstalacionesClick}>
                              <div className='huertoEinvernadero-volverAinstalaciones-subContainer'>
                                    &lt;&lt; Volver a Instalaciones
                              </div>
                        </div>

                        <div className='huertoEinvernadero-siguiente-container' onClick={handleSiguienteClick}>
                              <div className='huertoEinvernadero-siguiente-subContainer'>
                                    Siguiente &gt;&gt;
                              </div>
                        </div>
                  </div>

                  <div  className='huertoEinvernadero-subContainer'>
                              huertoEinvernadero
                              <div className='huertoEinvernadero-volverYsiguiente'>
                                    
                                    <div />

                                    <div className='huertoEinvernadero-siguiente-container' onClick={handleSiguienteClick}>
                                          <div className='huertoEinvernadero-siguiente-subContainer'>
                                                Siguiente &gt;&gt;
                                          </div>
                                    </div>
                                    
                              </div>
                  </div>
          

          </Box>
    </>
  )
}
