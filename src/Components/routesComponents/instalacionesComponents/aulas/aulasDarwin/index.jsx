import React from 'react';
import './styles.css';
import { Info } from '../aulas+info';
import { useNavigate } from 'react-router-dom';

export const AulasDarwin = () => {

        const navigate = useNavigate();

        const handleDarwinPage = () => {
                navigate('/instalacionesPage/darwin');
        };

  return (
    <>
        <div className="AulasDarwin-Principal-Big-Container">
        <div className="AulasDarwin-Principal-Container AulasDarwin-diplay-flex-column">
                
                <div className="AulasDarwin-nube AulasDarwin-imagenRepeatPositionSize AulasDarwin-positionAbsolute" />

                <div className="AulasDarwin-titulo AulasDarwin-imagenRepeatPositionSize AulasDarwin-positionAbsolute" />
                
                <div className="AulasDarwin-edad AulasDarwin-positionAbsolute" >
                        (Psicomotricidad)
                </div>

                <div className="AulasDarwin-imagen-info AulasDarwin-diplay-flex-column AulasDarwin-positionAbsolute" >
                    
                        <div className="AulasDarwin-imagen AulasDarwin-imagenRepeatPositionSize" onClick={handleDarwinPage} />

                        <div onClick={handleDarwinPage}>
                                <Info/>
                        </div>

                </div>
        </div>
        </div>
    </>
  );
};

