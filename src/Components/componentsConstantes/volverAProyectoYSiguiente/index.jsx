import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';





export const VolverAProyectoYsiguiente = ( props ) => {


  const navigate = useNavigate();
      
  const handleVolverAProyectoClick = () => {
        navigate('/proyectoPage');
  };

  const handleSiguienteClick = () => {
        navigate(`/${props.enlace}`);
  };


  return (
    <>


        <div className='VolverAProyectoYsiguiente-volverYsiguiente'>

              <div className='VolverAProyectoYsiguiente-volverAProyectos-container' onClick={handleVolverAProyectoClick}>

                    <div className='VolverAProyectoYsiguiente-volverAProyectos-subContainer'>
                          &lt;&lt; Volver a Proyectos
                    </div>

              </div>

              <div className='VolverAProyectoYsiguiente-siguiente-container' onClick={handleSiguienteClick} >

                    <div className='VolverAProyectoYsiguiente-siguiente-subContainer'>
                          Siguiente &gt;&gt;
                    </div>

              </div>
              
        </div>


    </>
  )
}
