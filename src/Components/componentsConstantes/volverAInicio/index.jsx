import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const VolverAinicio = () => {

    const navigate = useNavigate();
      
    const handleVolverAinicioClick = () => {
          navigate('/inicioPage');
    };

  return (
    <>
        <div className='VolverAinicio-container' onClick={handleVolverAinicioClick}>
            <div className='VolverAinicio-subContainer'>
                    &lt;&lt; Volver a Inicio
            </div>
        </div>
    </>
  )
}
