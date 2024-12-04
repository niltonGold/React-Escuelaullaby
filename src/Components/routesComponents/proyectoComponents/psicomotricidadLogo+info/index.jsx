import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { InfoProyecto } from '../proyectos+info';





export const PsicomotricidadComponentLogoInfo = () => {


    const navigate = useNavigate();

    const handleExploradoresPage = () => {
        window.scrollTo({ top: 0 });
        navigate('/proyectoPage/psicomotricidad');
    };


    return (
        <>


            <div className="PsicomotricidadComponentLogoInfo-Principal-Container PsicomotricidadComponentLogoInfo-diplay-flex-column">
                    
                    <div className="PsicomotricidadComponentLogoInfo-nube-Container">

                            <div className="PsicomotricidadComponentLogoInfo-nube PsicomotricidadComponentLogoInfo-imagenRepeatPositionSize" />

                    </div>

                    <div onClick={handleExploradoresPage}>

                            <InfoProyecto />
                            
                    </div>

                    <div className="PsicomotricidadComponentLogoInfo-titulo PsicomotricidadComponentLogoInfo-imagenRepeatPositionSize" onClick={handleExploradoresPage}/>

            </div>


        </>
    );
};

