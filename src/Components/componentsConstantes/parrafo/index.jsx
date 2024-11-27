import React from 'react';
import './styles.css';

export const Parrafo = ( props ) => {
  return (
    <>
        <div className='Parrafo-Principal-Container'>
                    {props.parrafoTexto}
        </div>
    </>
  )
}
