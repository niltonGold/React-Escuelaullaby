import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';





export const Siguiente = ( props ) => {


  const navigate = useNavigate();

  const handleSiguienteClick = () => {
      window.scrollTo({ top: 0 });
      navigate(`/${props.enlace}`);
  };


  return (
    <>


        <div className='Siguiente-volverYsiguiente'>
                                    
            <div/>

            <div className='Siguiente-siguiente-container' onClick={handleSiguienteClick}>

                    <div className='Siguiente-siguiente-subContainer'>
                        Siguiente &gt;&gt;
                    </div>
                    
            </div>
            
        </div>


    </>
  )
}
