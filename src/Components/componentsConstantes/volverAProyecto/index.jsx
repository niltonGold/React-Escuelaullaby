import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const VolverAProyectos = ( ) => {

  const navigate = useNavigate();
      
  const handleVolverAProyectosClick = () => {
        navigate('/proyectoPage');
  };

  return (
    <>
        <div className='VolverAProyectos-container'>
              
              <div className='VolverAProyectos-volver-container' onClick={handleVolverAProyectosClick}>
                    <div className='VolverAProyectos-volver-subContainer'>
                          &lt;&lt; Volver a Proyectos
                    </div>
              </div>

              <div/>

        </div>
    </>
  )
}
