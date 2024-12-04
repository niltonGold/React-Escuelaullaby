import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { InfoProyecto } from '../proyectos+info';





export const MusicaComponentLogoInfo = () => {


    const navigate = useNavigate();

    const handleExploradoresPage = () => {
        window.scrollTo({ top: 0 });
        navigate('/proyectoPage/musica');
    };


    return (
        <>


            <div className="MusicaComponentLogoInfo-Principal-Container MusicaComponentLogoInfo-diplay-flex-column">
                    
                    <div className="MusicaComponentLogoInfo-nube-Container">

                            <div className="MusicaComponentLogoInfo-nube MusicaComponentLogoInfo-imagenRepeatPositionSize" />

                    </div>

                    <div onClick={handleExploradoresPage}>

                            <InfoProyecto />
                            
                    </div>

                    <div className="MusicaComponentLogoInfo-titulo MusicaComponentLogoInfo-imagenRepeatPositionSize" onClick={handleExploradoresPage}/>

            </div>


        </>
    );
};

