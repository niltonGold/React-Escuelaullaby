import React from 'react';
import './styles.css';

export const ParrafoCentrado = ( props ) => {
  return (
    <>
        <div className='ParrafoCentrado-Principal-Container'>
                    {props.ParrafoCentradoTexto}
        </div>
    </>
  )
}
