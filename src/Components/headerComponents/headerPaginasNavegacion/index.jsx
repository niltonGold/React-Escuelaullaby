import React, { useEffect, useState } from 'react';
import './styles.css';
import { useNavigate, useLocation } from 'react-router-dom';





export const HeaderPaginasNavegacion = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [active, setActive] = useState(location.pathname || '/inicioPage');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isDropdownVisibleInstalaciones, setIsDropdownVisibleInstalaciones] = useState(false);
    const [clickCountProyecto, setClickCountProyecto] = useState(0);
    const [clickCountInstalaciones, setClickCountInstalaciones] = useState(0);

    const handleClick = (path) => {
        if (active !== path) {
            setActive(path);
            navigate(path);
        }
        // Ocultar ambos menús si se selecciona una subpágina o se navega fuera
        setIsDropdownVisible(false);
        setIsDropdownVisibleInstalaciones(false);
        setClickCountProyecto(0);
        setClickCountInstalaciones(0);
    };

    // Funciones para el menú de "Proyecto"
    const handleProjectClick = () => {
        navigate('/proyectoPage');
        setClickCountProyecto((prev) => prev + 1);

        if (clickCountProyecto >= 1) {
            setIsDropdownVisible(!isDropdownVisible); // Alterna el menú en el segundo clic
        }
        setActive('/proyectoPage');
    };

    const handleMouseEnterProject = () => {
        if (clickCountProyecto >= 1) {
            setIsDropdownVisible(true);
        }
    };

    const handleMouseLeaveProject = () => {
        setIsDropdownVisible(false);
    };

    const handleMouseEnterMenu = () => {
        if (clickCountProyecto >= 1) {
            setIsDropdownVisible(true);
        }
    };

    const handleMouseLeaveMenu = () => {
        setIsDropdownVisible(false);
    };

    // Funciones para el menú de "Instalaciones"
    const handleInstalacionesClick = () => {
        navigate('/instalacionesPage');
        setClickCountInstalaciones((prev) => prev + 1);

        if (clickCountInstalaciones >= 1) {
            setIsDropdownVisibleInstalaciones(!isDropdownVisibleInstalaciones); // Alterna el menú en el segundo clic
        }
        setActive('/instalacionesPage');
    };

    const handleMouseEnterInstalaciones = () => {
        if (clickCountInstalaciones >= 1) {
            setIsDropdownVisibleInstalaciones(true);
        }
    };

    const handleMouseLeaveInstalaciones = () => {
        setIsDropdownVisibleInstalaciones(false);
    };

    const handleMouseEnterMenuInstalaciones = () => {
        if (clickCountInstalaciones >= 1) {
            setIsDropdownVisibleInstalaciones(true);
        }
    };

    const handleMouseLeaveMenuInstalaciones = () => {
        setIsDropdownVisibleInstalaciones(false);
    };

    useEffect(() => {
        setActive(location.pathname);
    }, [location.pathname]);



    return (
        <>


                <div className='HeaderPaginasNavegacion-principal-container'>

                            <div className='HeaderPaginasNavegacion-sub-container'>

                                {/* --------------------------------------------------------------------------------------- */}
                                    <div
                                        className={`headerPaginasNavegacion-inicioCasaLogo-texto-container
                                                    headerPaginasNavegacion-inicioCasaLogo-texto-container-noHide 
                                                    ${active.startsWith('/inicioPage') ? 'headerPaginasNavegacion-active' : ''}`}
                                        onClick={() => handleClick('/inicioPage')}>
                                        <div className='headerPaginasNavegacion-inicioCasaLogo' />
                                        <div className='headerPaginasNavegacion-texto headerPaginasNavegacion-texto-inicio'>
                                            Inicio
                                        </div>
                                    </div>

                                {/* --------------------------------------------------------------------------------------- */}

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

                                {/* --------------------------------------------------------------------------------------- */}

                                    <div    onMouseEnter={handleMouseEnterInstalaciones}
                                            onMouseLeave={handleMouseLeaveInstalaciones}
                                    >

                                        <div className="headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide" />

                                        <div   className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
                                                headerPaginasNavegacion-texto
                                                ${active.startsWith('/instalacionesPage') ? 'headerPaginasNavegacion-active' : ''}`}
                                            onClick={handleInstalacionesClick}
                                        >

                                            Instalaciones

                                        </div>

                                        <div    className="headerPaginasNavegacion_MenuDesplegable"
                                                onMouseEnter={handleMouseEnterMenuInstalaciones}
                                                onMouseLeave={handleMouseLeaveMenuInstalaciones}
                                        >

                                                <div className={`dropdown-menu-instalaciones ${isDropdownVisibleInstalaciones ? 'show-instalaciones' : ''}`}>

                                                            <div className="subpagina-instalaciones" onClick={() => handleClick('/instalacionesPage/aulas')}>
                                                                Aulas
                                                            </div>
                                                            <div className="subpagina-instalaciones" onClick={() => handleClick('/instalacionesPage/hallYdespacho')}>
                                                                Hall y Despacho
                                                            </div>
                                                            <div className="subpagina-instalaciones" onClick={() => handleClick('/instalacionesPage/comedor')}>
                                                                Comedor
                                                            </div>
                                                            <div className="subpagina-instalaciones" onClick={() => handleClick('/instalacionesPage/cocinaYlavanderia')}>
                                                                Cocina y Lavandería
                                                            </div>
                                                            <div className="subpagina-instalaciones" onClick={() => handleClick('/instalacionesPage/patios')}>
                                                                Patios
                                                            </div>
                                                            <div className="subpagina-instalaciones" onClick={() => handleClick('/instalacionesPage/huertoEinvernadero')}>
                                                                Huerto e Invernadero
                                                            </div>
                                                            <div className="subpagina-instalaciones" onClick={() => handleClick('/instalacionesPage/salonDeActos')}>
                                                                Salón de Actos
                                                            </div>

                                                </div>

                                        </div>

                                    </div>

                                {/* --------------------------------------------------------------------------------------- */}

                                    <div
                                        onMouseEnter={handleMouseEnterProject}
                                        onMouseLeave={handleMouseLeaveProject}
                                    >

                                        <div className="headerPaginasNavegacion-inicioCasaLogo inicioCasaLogo-hide" />

                                        <div
                                            className={`headerPaginasNavegacion-inicioCasaLogo-texto-container 
                                                headerPaginasNavegacion-texto
                                                ${active.startsWith('/proyectoPage') ? 'headerPaginasNavegacion-active' : ''}`}
                                            onClick={handleProjectClick}
                                        >

                                            Proyecto

                                        </div>

                                        <div
                                            className="headerPaginasNavegacion_MenuDesplegable"
                                            onMouseEnter={handleMouseEnterMenu}
                                            onMouseLeave={handleMouseLeaveMenu}
                                        >

                                                <div className={`dropdown-menu ${isDropdownVisible ? 'show' : ''}`}>

                                                            <div className="subpagina" onClick={() => handleClick('/proyectoPage/arte')}>
                                                                Arte
                                                            </div>
                                                            <div className="subpagina" onClick={() => handleClick('/proyectoPage/musica')}>
                                                                Música
                                                            </div>
                                                            <div className="subpagina" onClick={() => handleClick('/proyectoPage/psicomotricidad')}>
                                                                Psicomotricidad
                                                            </div>
                                                            <div className="subpagina" onClick={() => handleClick('/proyectoPage/juego')}>
                                                                Juego
                                                            </div>
                                                            <div className="subpagina" onClick={() => handleClick('/proyectoPage/yoga')}>
                                                                Yoga
                                                            </div>
                                                            <div className="subpagina" onClick={() => handleClick('/proyectoPage/naturaleza')}>
                                                                Naturaleza
                                                            </div>

                                                </div>

                                        </div>

                                    </div>
                                    
                                {/* --------------------------------------------------------------------------------------- */}
                                
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
                                
                                {/* --------------------------------------------------------------------------------------- */}

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

                                {/* --------------------------------------------------------------------------------------- */}
                                
                            </div>

                </div>


        </>
    );
};