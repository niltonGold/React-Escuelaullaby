import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { InfoProyecto } from '../proyectos+info';





export const NaturalezaComponentLogoInfo = () => {


    const navigate = useNavigate();

    const handleExploradoresPage = () => {
        window.scrollTo({ top: 0 });
        navigate('/proyectoPage/naturaleza');
    };


    return (
        <>


            <div className="NaturalezaComponentLogoInfo-Principal-Container NaturalezaComponentLogoInfo-diplay-flex-column">
                    
                    <div className="NaturalezaComponentLogoInfo-nube-Container">

                            <div className="NaturalezaComponentLogoInfo-nube NaturalezaComponentLogoInfo-imagenRepeatPositionSize" />

                    </div>

                    <div onClick={handleExploradoresPage}>

                            <InfoProyecto />
                            
                    </div>

                    <div className="NaturalezaComponentLogoInfo-titulo NaturalezaComponentLogoInfo-imagenRepeatPositionSize" onClick={handleExploradoresPage}/>

            </div>


        </>
    );
};

