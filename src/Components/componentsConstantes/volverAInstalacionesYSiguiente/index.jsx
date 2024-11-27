import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const VolverAinstalacionesYsiguiente = ( props ) => {

  const navigate = useNavigate();
      
  const handleVolverAinstalacionesClick = () => {
        navigate('/instalacionesPage');
  };

  const handleSiguienteClick = () => {
        navigate(`/${props.enlace}`);
  };

  return (
    <>
        <div className='VolverAinstalacionesYsiguiente-volverYsiguiente'>
              <div className='VolverAinstalacionesYsiguiente-volverAinstalaciones-container' onClick={handleVolverAinstalacionesClick}>
                    <div className='VolverAinstalacionesYsiguiente-volverAinstalaciones-subContainer'>
                          &lt;&lt; Volver a Instalaciones
                    </div>
              </div>

              <div className='VolverAinstalacionesYsiguiente-siguiente-container' onClick={handleSiguienteClick} >
                    <div className='VolverAinstalacionesYsiguiente-siguiente-subContainer'>
                          Siguiente &gt;&gt;
                    </div>
              </div>
        </div>
    </>
  )
}
