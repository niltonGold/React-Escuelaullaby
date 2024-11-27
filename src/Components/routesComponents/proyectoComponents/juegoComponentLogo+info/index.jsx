import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { InfoProyecto } from '../proyectos+info';

export const JuegoComponentLogoInfo = () => {

        const navigate = useNavigate();

        const handleExploradoresPage = () => {
                navigate('/proyecto/juego');
        };

  return (
    <>
        <div className="JuegoComponentLogoInfo-Principal-Container JuegoComponentLogoInfo-diplay-flex-column">
                
                <div className="JuegoComponentLogoInfo-nube-Container">
                        <div className="JuegoComponentLogoInfo-nube JuegoComponentLogoInfo-imagenRepeatPositionSize" />
                </div>

                <div onClick={handleExploradoresPage}>
                        <InfoProyecto />
                </div>

                <div className="JuegoComponentLogoInfo-titulo JuegoComponentLogoInfo-imagenRepeatPositionSize" onClick={handleExploradoresPage}/>

        </div>
    </>
  );
};

