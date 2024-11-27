import React from 'react';
import './styles.css';
import { Info } from '../aulas+info';
import { useNavigate } from 'react-router-dom';

export const AulasExploradores = () => {

        const navigate = useNavigate();

        const handleExploradoresPage = () => {
                navigate('/instalacionesPage/exploradores');
        };

  return (
    <>
        <div className="AulasExploradores-Principal-Container AulasExploradores-diplay-flex-column">
                
                <div className="AulasExploradores-nube AulasExploradores-imagenRepeatPositionSize AulasExploradores-positionAbsolute" />

                <div className="AulasExploradores-titulo AulasExploradores-imagenRepeatPositionSize AulasExploradores-positionAbsolute" />
                
                <div className="AulasExploradores-edad AulasExploradores-positionAbsolute" >
                        (0-1 año)
                </div>

                <div className="AulasExploradores-imagen-info AulasExploradores-diplay-flex-column AulasExploradores-positionAbsolute" >
                    
                        <div className="AulasExploradores-imagen AulasExploradores-imagenRepeatPositionSize" onClick={handleExploradoresPage}/>
                        
                        <div onClick={handleExploradoresPage}>
                                <Info/>
                        </div>

                </div>
        </div>
    </>
  );
};

