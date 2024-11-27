import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const InstalacionesEnlacesRedondos = ( props ) => {

  const navigate = useNavigate();

  const handleAulasPage = () => {
    navigate('/instalacionesPage/aulas');
  };

  const handleHallYdespachoPage = () => {
    navigate('/instalacionesPage/hallYdespacho');
  };

  const handleComedorPage = () => {
    navigate('/instalacionesPage/comedor');
  };

  const handleCocinaYlavanderiaPage = () => {
    navigate('/instalacionesPage/cocinaYlavanderia');
  };

  const handlePatiosPage = () => {
    navigate('/instalacionesPage/patios');
  };

  const handleHuertoEinvernaderoPage = () => {
    navigate('/instalacionesPage/huertoEinvernadero');
  };

  const handleSalonDeActosPage = () => {
    navigate('/instalacionesPage/salonDeActos');
  };
  
  return (
    <>
        <div className='InstalacionesEnlacesRedondos-Principal-Container'>
            
                <div className='instalacionesEnlacesRedondos-subContainer'>
                    <div className='instalacionesEnlacesRedondos-Logo instalacionesEnlacesRedondos-aulasLogo' onClick={ handleAulasPage }/>
                    <div className='instalacionesEnlacesRedondos-Logo instalacionesEnlacesRedondos-hallYdespachoLogo'onClick={ handleHallYdespachoPage }/>
                    <div className='instalacionesEnlacesRedondos-Logo instalacionesEnlacesRedondos-comedorLogo' onClick={ handleComedorPage }/>
                </div>

                <div className='instalacionesEnlacesRedondos-subContainer'>
                    <div className='instalacionesEnlacesRedondos-Logo instalacionesEnlacesRedondos-cocinaYlavanderiaLogo' onClick={ handleCocinaYlavanderiaPage }/>
                    <div className='instalacionesEnlacesRedondos-Logo instalacionesEnlacesRedondos-patiosLogo' onClick={ handlePatiosPage }/>
                    <div className='instalacionesEnlacesRedondos-Logo instalacionesEnlacesRedondos-huertoEinvernaderoLogo' onClick={ handleHuertoEinvernaderoPage }/>
                    <div className='instalacionesEnlacesRedondos-Logo instalacionesEnlacesRedondos-salonDeActosLogo' onClick={ handleSalonDeActosPage }/>   
                </div>
                
        </div>
    </>
  )
}
