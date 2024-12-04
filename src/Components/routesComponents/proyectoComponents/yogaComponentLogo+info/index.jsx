import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { InfoProyecto } from '../proyectos+info';





export const YogaComponentLogoInfo = () => {


    const navigate = useNavigate();

    const handleExploradoresPage = () => {
        window.scrollTo({ top: 0 });
        navigate('/proyectoPage/yoga');
    };


    return (
        <>


            <div className="YogaComponentLogoInfo-Principal-Container YogaComponentLogoInfo-diplay-flex-column">
                    
                    <div className="YogaComponentLogoInfo-nube-Container">

                            <div className="YogaComponentLogoInfo-nube YogaComponentLogoInfo-imagenRepeatPositionSize" />

                    </div>

                    <div onClick={handleExploradoresPage}>

                            <InfoProyecto />
                            
                    </div>

                    <div className="YogaComponentLogoInfo-titulo YogaComponentLogoInfo-imagenRepeatPositionSize" onClick={handleExploradoresPage}/>

            </div>


        </>
    );
};

