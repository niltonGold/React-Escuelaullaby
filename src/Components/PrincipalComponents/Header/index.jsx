import React from 'react';
import './styles.css';
import { HeaderLullabyLogo } from '../../headerComponents/headerLullabyLogo';
import { HeaderEnlacesRedondos } from '../../headerComponents/headerEnlacesRodondosComponents';
import { HeaderPaginasNavegacion } from '../../headerComponents/headerPaginasNavegacion';

export const Header = () => {
  return (
      <>
            <div className='Header-Principal-Container'>
      
                  <div className='header-logoLullby-enlacesRedondos-container'>
                        <HeaderLullabyLogo/>
                        <HeaderEnlacesRedondos/>
                  </div>

                  <HeaderPaginasNavegacion/>

            </div>
      </>
  )
}
