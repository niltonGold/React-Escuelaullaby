import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';





export const VolverAinstalaciones = ( ) => {


  const navigate = useNavigate();
      
  const handleVolverAinstalacionesClick = () => {
        navigate('/instalacionesPage');
  };


  return (
    <>


        <div className='VolverAinstalaciones-container'>
              
              <div className='VolverAinstalaciones-volver-container' onClick={handleVolverAinstalacionesClick}>

                    <div className='VolverAinstalaciones-volver-subContainer'>
                          &lt;&lt; Volver a Instalaciones
                    </div>
                    
              </div>

              <div/>

        </div>


    </>
  )
}
