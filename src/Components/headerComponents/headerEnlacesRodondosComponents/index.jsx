import React, { useEffect } from 'react';
import './styles.css';
import { useNavigate, useLocation } from 'react-router-dom';





export const HeaderEnlacesRedondos = () => {


  const navigate = useNavigate();

  const location = useLocation();

  const handleEscuelaDePadresClick = () => {
    navigate('/escuelaDePadresPage');
  };

  const handleZonaPrivadaClick = () => {
    navigate('/zonaPrivadaPage');
  };

  const handleContactoClick = () => {
    navigate('/contactoPage');
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.logoRedondoHeader')) {
      // Si quieres que se "desactive" al hacer clic fuera, podrías usar un estado aquí.
    }
  };

  useEffect(() => {

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };

  }, []);



  return (
    <>


        <div className='Header-enlaces-redondos-container'>


                <div  className={`header-escuelaDePadres logoRedondoHeader 
                                  ${ 

                                    location.pathname === '/escuelaDePadresPage' ? 'header-enlaces-redondos-active' : ''

                                  }`}
                      onClick={handleEscuelaDePadresClick}
                />


                <div  className={`header-zonaPrivada logoRedondoHeader 
                                  ${

                                    location.pathname === '/zonaPrivadaPage' ? 'header-enlaces-redondos-active' : ''
                                  
                                  }`}
                      onClick={handleZonaPrivadaClick}
                />


                <div  className={`header-contacto logoRedondoHeader 
                                  ${

                                    location.pathname === '/contactoPage' ? 'header-enlaces-redondos-active' : ''
                                  
                                  }`}
                      onClick={handleContactoClick}
                />


        </div>


    </>
  );
};