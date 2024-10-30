import React, { useState, useEffect } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const HeaderEnlacesRedondos = () => {

  const navigate = useNavigate();

  const [active, setActive] = useState(null);

  const handleEscuelaDePadresClick = () => {
    setActive('escuelaDePadres');
    navigate('/escuelaDePadresPage');
  };

  const handleZonaPrivadaClick = () => {
    setActive('zonaPrivada');
    navigate('/zonaPrivadaPage');
  };

  const handleContactoClick = () => {
    setActive('contacto');
    navigate('/contactoPage');
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.logoRedondoHeader')) {
      setActive(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='Header-enlaces-redondos-container'>
      <div
        className={`header-escuelaDePadres logoRedondoHeader ${active === 'escuelaDePadres' ? 'header-enlaces-redondos-active' : ''}`}
        onClick={handleEscuelaDePadresClick}
      />
      <div
        className={`header-zonaPrivada logoRedondoHeader ${active === 'zonaPrivada' ? 'header-enlaces-redondos-active' : ''}`}
        onClick={handleZonaPrivadaClick}
      />
      <div
        className={`header-contacto logoRedondoHeader ${active === 'contacto' ? 'header-enlaces-redondos-active' : ''}`}
        onClick={handleContactoClick}
      />
    </div>
  );
};