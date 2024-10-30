import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const HeaderPaginasNavegacion = () => {

    const navigate = useNavigate();

    const [active, setActive] = useState(null);
  
    const handleInicioClick = () => {
      setActive('inicio');
      navigate('/inicioPage');
    };
  
    const handleQuienesSomosClick = () => {
    //   setActive('zonaPrivada');
    //   navigate('/zonaPrivadaPage');
    };
  
    const handleInstalacionesClick = () => {
    //   setActive('contacto');
    //   navigate('/contactoPage');
    };

    const handleProyectoClick = () => {
        // setActive('inicio');
        // navigate('/inicioPage');
      };
    
    const handleInglesClick = () => {
    // setActive('zonaPrivada');
    // navigate('/zonaPrivadaPage');
    };

    const handleEquipoClick = () => {
    // setActive('contacto');
    // navigate('/contactoPage');
    };    

    // const handleClickOutside = (event) => {
    //   if (!event.target.closest('.logoRedondoHeader')) {
    //     setActive(null);
    //   }
    // };
  
    // useEffect(() => {
    //   document.addEventListener('click', handleClickOutside);
  
    //   return () => {
    //     document.removeEventListener('click', handleClickOutside);
    //   };
    // }, []);

return (
    <>
        <div className='HeaderPaginasNavegacion-principal-container'>
            
    
                <div className='HeaderPaginasNavegacion-sub-container'>
                
                
                        <div  className={`headerPaginasNavegacion-inicioCasaLogo-texto-container headerPaginaNavegacion
                              ${active === 'inicio' ? 'headerPaginasNavegacion-active' : ''}`}
                              onClick={handleInicioClick} >
                                    <div className='headerPaginasNavegacion-inicioCasaLogo' />
                                    <div className='headerPaginasNavegacion-texto'>
                                        
                                        Inicio

                                    </div>
                        </div>
                        


                        <div>
                                    <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
                                    <div className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
                                                     headerPaginasNavegacion-texto 
                                                     headerPaginaNavegacion
                                                     ${active === 'quienesSomos' ? 'headerPaginasNavegacion-active' : ''}`}
                                         onClick={handleQuienesSomosClick} > 
                                    
                                        Quiénes Somos

                                    </div>
                        </div>
                        


                        <div>
                                    <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
                                    <div className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
                                                        headerPaginasNavegacion-texto
                                                        headerPaginaNavegacion
                                                        ${active === 'instalaciones' ? 'headerPaginasNavegacion-active' : ''}`}
                                         onClick={handleInstalacionesClick} >
                                        
                                        Instalaciones

                                    </div>
                        </div>
                        


                        <div>
                                    <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
                                    <div className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
                                                        headerPaginasNavegacion-texto
                                                        headerPaginaNavegacion
                                                        ${active === 'proyecto' ? 'headerPaginasNavegacion-active' : ''}`}
                                         onClick={handleProyectoClick} >

                                        Proyecto

                                    </div>
                        </div>
                        


                        <div>
                                    <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
                                    <div className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
                                                        headerPaginasNavegacion-texto
                                                        headerPaginaNavegacion
                                                        ${active === 'ingles' ? 'headerPaginasNavegacion-active' : ''}`}
                                            onClick={handleInglesClick} > 
                                        
                                        Inglés
                                        
                                    </div>
                        </div>
                        


                        <div>
                                    <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
                                    <div className={`headerPaginasNavegacion-inicioCasaLogo-texto-container
                                                        headerPaginasNavegacion-texto 
                                                        headerPaginaNavegacion
                                                        ${active === 'equipo' ? 'headerPaginasNavegacion-active' : ''}`}
                                            onClick={handleEquipoClick} >
                                        
                                        Equipo
                                    
                                    </div>
                        </div>
                        
                        
                </div>
                
    
        </div>
    </>
)

}
