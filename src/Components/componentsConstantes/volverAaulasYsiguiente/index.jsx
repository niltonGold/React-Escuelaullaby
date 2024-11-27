import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const VolverAaulasYsiguiente = ( props ) => {

  const navigate = useNavigate();
      
  const handleVolverAulasClick = () => {
        navigate('/instalacionesPage/aulas');
  };

  const handleSiguienteClick = () => {
        navigate(`/${props.enlace}`);
  };

  return (
    <>
        <div className='VolverAaulasYsiguiente-volverYsiguiente'>
              <div className='VolverAaulasYsiguiente-volverAaulas-container' onClick={handleVolverAulasClick}>
                    <div className='VolverAaulasYsiguiente-volverAaulas-subContainer'>
                          &lt;&lt; Volver a Aulas
                    </div>
              </div>

              <div className='VolverAaulasYsiguiente-siguiente-container' onClick={handleSiguienteClick} >
                    <div className='VolverAaulasYsiguiente-siguiente-subContainer'>
                          Siguiente &gt;&gt;
                    </div>
              </div>
        </div>
    </>
  )
}
