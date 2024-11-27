import React from 'react';
import './styles.css';

export const TituloCabecera = ( props ) => {
  return (
    <>
        <div className='TituloCabecera-Principal-Container'>

            <div    className='TituloCabecera-imagenLogo'  
                    style={{ backgroundImage: `url('${props.imagenBackgroundUbicacion}')`,
                                width: `${props.anchuraTitulo}px`, 
                                height: `${props.alturaTitulo}px` }} />

        </div>
    </>
  )
}
