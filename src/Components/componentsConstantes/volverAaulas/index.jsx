import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const VolverAaulas = () => {

    const navigate = useNavigate();
      
    const handleVolverAaulasClick = () => {
          navigate('/instalacionesPage/aulas');
    };

  return (
    <>
        <div className='VolverAaulas-container'>
            <div className='VolverAaulas-subContainer' onClick={handleVolverAaulasClick}>
                    &lt;&lt; Volver a Aulas
            </div>
            <div/>
        </div>
    </>
  )
}
