import React from 'react';
import './styles.css';
import { Info } from '../aulas+info';
import { useNavigate } from 'react-router-dom';

export const AulasAventureros = () => {

        const navigate = useNavigate();

        const handleAventurerosPage = () => {
                navigate('/instalacionesPage/aventureros');
        };

  
  return (
    <>
        <div className="AulasAventureros-Principal-Container AulasAventureros-diplay-flex-column">
                
                <div className="AulasAventureros-nube AulasAventureros-imagenRepeatPositionSize AulasAventureros-positionAbsolute" />

                <div className="AulasAventureros-titulo AulasAventureros-imagenRepeatPositionSize AulasAventureros-positionAbsolute" />
                
                <div className="AulasAventureros-edad AulasAventureros-positionAbsolute" >
                        (1-2 años) 
                </div>

                <div className="AulasAventureros-imagen-info AulasAventureros-diplay-flex-column AulasAventureros-positionAbsolute" >
                    
                        <div className="AulasAventureros-imagen AulasAventureros-imagenRepeatPositionSize" onClick={handleAventurerosPage} />

                        <div onClick={handleAventurerosPage}>
                                <Info/>
                        </div>

                </div>
        </div>
    </>
  );
};

