// import React, { useEffect, useState } from 'react';
// import './styles.css';
// import { useNavigate, useLocation } from 'react-router-dom';

// export const HeaderPaginasNavegacion = () => {

//     const navigate = useNavigate();

//     const location = useLocation();

//     const [active, setActive] = useState(null);
  
//     const handleInicioClick = () => {
//       setActive('inicio');
//       navigate('/inicioPage');
//     };
  
//     const handleQuienesSomosClick = () => {
//       setActive('quienesSomos');
//       navigate('/quienesSomosPage');
//     };
  
//     const handleInstalacionesClick = () => {
//       setActive('instalaciones');
//       navigate('/instalacionesPage');
//     };

//     const handleProyectoClick = () => {
//         setActive('proyecto');
//         navigate('/proyectoPage');
//       };
    
//     const handleInglesClick = () => {
//     setActive('ingles');
//     navigate('/inglesPage');
//     };

//     const handleEquipoClick = () => {
//     setActive('equipo');
//     navigate('/equipoPage');
//     };    

//     const handleClickOutside = (event) => {
//       if (!event.target.closest('.headerPaginaNavegacion')) {
//         setActive(null);
//       }
//     };
  

    
//     useEffect(() => {
//       document.addEventListener('click', handleClickOutside);
  
//       return () => {
//         document.removeEventListener('click', handleClickOutside);
//       };
//     }, []);

// return (
//     <>
//         <div className='HeaderPaginasNavegacion-principal-container'>
            
    
//                 <div className='HeaderPaginasNavegacion-sub-container'>
                
                
//                         <div  className={`headerPaginasNavegacion-inicioCasaLogo-texto-container
//                                           headerPaginasNavegacion-inicioCasaLogo-texto-container-noHide 
//                                           headerPaginaNavegacion
//                                           ${active === 'inicio' ? 'headerPaginasNavegacion-active' : ''}`}
//                               onClick={handleInicioClick} >
//                                     <div className='headerPaginasNavegacion-inicioCasaLogo' />
                                    
//                                     <div className='headerPaginasNavegacion-texto headerPaginasNavegacion-texto-inicio'>
                                        
//                                         Inicio

//                                     </div>
//                         </div>
                        


//                         <div>
//                                     <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
//                                     <div className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
//                                                      headerPaginaNavegacion
//                                                      headerPaginasNavegacion-texto 
//                                                      ${active === 'quienesSomos' ? 'headerPaginasNavegacion-active' : ''}`}
//                                          onClick={handleQuienesSomosClick} > 
                                    
//                                         Quiénes Somos

//                                     </div>
//                         </div>
                        


//                         <div>
//                                     <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
//                                     <div className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
//                                                      headerPaginaNavegacion
//                                                      headerPaginasNavegacion-texto   
//                                                      ${active === 'instalaciones' ? 'headerPaginasNavegacion-active' : ''}`}
//                                          onClick={handleInstalacionesClick} >
                                        
//                                         Instalaciones

//                                     </div>
//                         </div>
                        


//                         <div>
//                                     <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
//                                     <div className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
//                                                      headerPaginaNavegacion
//                                                      headerPaginasNavegacion-texto 
//                                                      ${active === 'proyecto' ? 'headerPaginasNavegacion-active' : ''}`}
//                                          onClick={handleProyectoClick} >

//                                         Proyecto

//                                     </div>
//                         </div>
                        


//                         <div>
//                                     <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
//                                     <div className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
//                                                      headerPaginaNavegacion
//                                                      headerPaginasNavegacion-texto   
//                                                      ${active === 'ingles' ? 'headerPaginasNavegacion-active' : ''}`}
//                                             onClick={handleInglesClick} > 
                                        
//                                         Inglés
                                        
//                                     </div>
//                         </div>
                        


//                         <div>
//                                     <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
//                                     <div className={`headerPaginasNavegacion-inicioCasaLogo-texto-container
//                                                      headerPaginaNavegacion
//                                                      headerPaginasNavegacion-texto    
//                                                      ${active === 'equipo' ? 'headerPaginasNavegacion-active' : ''}`}
//                                             onClick={handleEquipoClick} >
                                        
//                                         Equipo
                                    
//                                     </div>
//                         </div>
                        
                        
//                 </div>
                
    
//         </div>
//     </>
// )

// }
import React, { useEffect, useState } from 'react';
import './styles.css';
import { useNavigate, useLocation } from 'react-router-dom';

export const HeaderPaginasNavegacion = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const [active, setActive] = useState(location.pathname); // Estado inicial en la ruta actual

    const handleClick = (page, path) => {
        if (active !== path) {
            setActive(path); // Actualizar el estado `active` a la ruta seleccionada
            navigate(path);  // Navegar a la página correspondiente
        }
    };

    useEffect(() => {
        // Cambia `active` solo si la ruta cambia manualmente
        setActive(location.pathname);
    }, [location.pathname]);

    return (
        <div className='HeaderPaginasNavegacion-principal-container'>
            <div className='HeaderPaginasNavegacion-sub-container'>
                <div
                    className={`headerPaginasNavegacion-inicioCasaLogo-texto-container
                                  headerPaginasNavegacion-inicioCasaLogo-texto-container-noHide 
                                  headerPaginaNavegacion
                                  ${active === '/inicioPage' ? 'headerPaginasNavegacion-active' : ''}`}
                    onClick={() => handleClick('inicio', '/inicioPage')}>
                    <div className='headerPaginasNavegacion-inicioCasaLogo' />
                    <div className='headerPaginasNavegacion-texto headerPaginasNavegacion-texto-inicio'>
                        Inicio
                    </div>
                </div>

                <div>
                    <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
                    <div
                        className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
                                     headerPaginaNavegacion
                                     headerPaginasNavegacion-texto 
                                     ${active === '/quienesSomosPage' ? 'headerPaginasNavegacion-active' : ''}`}
                        onClick={() => handleClick('quienesSomos', '/quienesSomosPage')}>
                        Quiénes Somos
                    </div>
                </div>

                <div>
                    <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
                    <div
                        className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
                                     headerPaginaNavegacion
                                     headerPaginasNavegacion-texto   
                                     ${active === '/instalacionesPage' ? 'headerPaginasNavegacion-active' : ''}`}
                        onClick={() => handleClick('instalaciones', '/instalacionesPage')}>
                        Instalaciones
                    </div>
                </div>

                <div>
                    <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
                    <div
                        className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
                                     headerPaginaNavegacion
                                     headerPaginasNavegacion-texto 
                                     ${active === '/proyectoPage' ? 'headerPaginasNavegacion-active' : ''}`}
                        onClick={() => handleClick('proyecto', '/proyectoPage')}>
                        Proyecto
                    </div>
                </div>

                <div>
                    <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
                    <div
                        className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
                                     headerPaginaNavegacion
                                     headerPaginasNavegacion-texto   
                                     ${active === '/inglesPage' ? 'headerPaginasNavegacion-active' : ''}`}
                        onClick={() => handleClick('ingles', '/inglesPage')}>
                        Inglés
                    </div>
                </div>

                <div>
                    <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
                    <div
                        className={`headerPaginasNavegacion-inicioCasaLogo-texto-container
                                     headerPaginaNavegacion
                                     headerPaginasNavegacion-texto    
                                     ${active === '/equipoPage' ? 'headerPaginasNavegacion-active' : ''}`}
                        onClick={() => handleClick('equipo', '/equipoPage')}>
                        Equipo
                    </div>
                </div>
            </div>
        </div>
    );
};