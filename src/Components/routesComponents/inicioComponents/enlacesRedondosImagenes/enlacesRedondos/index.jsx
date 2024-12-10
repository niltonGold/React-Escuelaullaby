import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const EnlacesRedondos = ( props ) => {

  const navigate = useNavigate();

  const handleEnlacesRedondos1 = () => {
    window.scrollTo({ top: 0 });
    navigate(`/inicioPage/${props.enlaceDeImagenRedonda1}`);
  };

  const handleEnlacesRedondos2 = () => {
    window.scrollTo({ top: 0 });
    navigate(`/inicioPage/${props.enlaceDeImagenRedonda2}`);
  };

  const handleEnlacesRedondos3 = () => {
    window.scrollTo({ top: 0 });
    navigate(`/inicioPage/${props.enlaceDeImagenRedonda3}`);
  };
  
  return (
    <>
        <div className='EnlacesRedondos-Principal-Container'>
            
                <div className='enlacesRedondos-enlaceRedondo' style={{ backgroundImage: `url(${props.imgBarckGround1})` }}
                     onClick={handleEnlacesRedondos1} />

                <div className='enlacesRedondos-enlaceRedondo' style={{ backgroundImage: `url(${props.imgBarckGround2})` }}
                     onClick={handleEnlacesRedondos2} />

                <div className='enlacesRedondos-enlaceRedondo' style={{ backgroundImage: `url(${props.imgBarckGround3})` }}
                     onClick={handleEnlacesRedondos3} />
                
        </div>
    </>
  )
}
