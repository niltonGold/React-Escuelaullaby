import React from 'react';
import './styles.css';

export const EnlacesRedondos = ( props ) => {
  return (
    <>
        <div className='EnlacesRedondos-Principal-Container'>
            
                <div className='enlacesRedondos-enlaceRedondo' style={{ backgroundImage: `url(${props.imgBarckGround1})` }}/>
                <div className='enlacesRedondos-enlaceRedondo' style={{ backgroundImage: `url(${props.imgBarckGround2})` }}/>
                <div className='enlacesRedondos-enlaceRedondo' style={{ backgroundImage: `url(${props.imgBarckGround3})` }}/>
                
        </div>
    </>
  )
}
