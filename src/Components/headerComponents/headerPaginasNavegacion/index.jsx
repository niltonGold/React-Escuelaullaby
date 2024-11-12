import React, { useEffect, useState } from 'react';
import './styles.css';
import { useNavigate, useLocation } from 'react-router-dom';

export const HeaderPaginasNavegacion = () => {

    const navigate = useNavigate();

    const location = useLocation();
    
    const [active, setActive] = useState(location.pathname); // Estado inicial en la ruta actual

    const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Estado para controlar la visibilidad del menú desplegable

    const handleClick = (path) => {
        if (active !== path) {
            setActive(path); // Actualizar el estado `active` a la ruta seleccionada
            navigate(path);  // Navegar a la página correspondiente
        }
    };

    const handleMouseEnter = () => {
        setIsDropdownVisible(true); // Muestra el menú desplegable
    };

    const handleMouseLeave = () => {
        setIsDropdownVisible(false); // Oculta el menú desplegable
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
                                  ${active === '/inicioPage' ? 'headerPaginasNavegacion-active' : ''}`}
                    onClick={() => handleClick('/inicioPage')}>
                    <div className='headerPaginasNavegacion-inicioCasaLogo' />
                    <div className='headerPaginasNavegacion-texto headerPaginasNavegacion-texto-inicio'>
                        Inicio
                    </div>
                </div>

                <div>
                    <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
                    <div
                        className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
                                     headerPaginasNavegacion-texto 
                                     ${active === '/quienesSomosPage' ? 'headerPaginasNavegacion-active' : ''}`}
                        onClick={() => handleClick('/quienesSomosPage')}>
                        Quiénes Somos
                    </div>
                </div>

                <div>
                    <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
                    <div
                        className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
                                     headerPaginasNavegacion-texto   
                                     ${active === '/instalacionesPage' ? 'headerPaginasNavegacion-active' : ''}`}
                        onClick={() => handleClick('/instalacionesPage')}>
                        Instalaciones
                    </div>
                </div>







                <div>
                    <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
                    <div className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
                                     headerPaginasNavegacion-texto
                                     headerPaginasNavegacion_MenuDesplegable 
                                     ${active === '/proyectoPage' ? 'headerPaginasNavegacion-active' : ''}`}
                         onClick={() => handleClick('/proyectoPage')}
                         onMouseEnter={handleMouseEnter}
                         onMouseLeave={handleMouseLeave}>

                            Proyecto

                            {/* Menú desplegable */}
                            <div className={`dropdown-menu ${isDropdownVisible ? 'show' : ''}`}>
                                <div className='subpagina' onClick={() => handleClick('/subpagina1')}>Arte</div>
                                <div className='subpagina' onClick={() => handleClick('/subpagina2')}>Música</div>
                                <div className='subpagina' onClick={() => handleClick('/subpagina3')}>Psicomotricidad</div>
                                <div className='subpagina' onClick={() => handleClick('/subpagina1')}>Juego</div>
                                <div className='subpagina' onClick={() => handleClick('/subpagina2')}>Yoga</div>
                                <div className='subpagina' onClick={() => handleClick('/subpagina3')}>Naturaleza</div>
                            </div>
                    </div>
                </div>








                <div>
                    <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
                    <div
                        className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
                                     headerPaginasNavegacion-texto   
                                     ${active === '/inglesPage' ? 'headerPaginasNavegacion-active' : ''}`}
                        onClick={() => handleClick('/inglesPage')}>
                        Inglés
                    </div>
                </div>

                <div>
                    <div className='headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide' />
                    <div
                        className={`headerPaginasNavegacion-inicioCasaLogo-texto-container
                                     headerPaginasNavegacion-texto    
                                     ${active === '/equipoPage' ? 'headerPaginasNavegacion-active' : ''}`}
                        onClick={() => handleClick('/equipoPage')}>
                        Equipo
                    </div>
                </div>
            </div>
        </div>
    );
};