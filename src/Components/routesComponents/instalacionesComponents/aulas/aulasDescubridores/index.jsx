import React from 'react';
import './styles.css';
import { Info } from '../aulas+info';
import { useNavigate } from 'react-router-dom';

export const AulasDescubridores = () => {

        const navigate = useNavigate();

        const handleDescubridoresPage = () => {
                navigate('/instalacionesPage/descubridores');
        };

  return (
    <>
        <div className="AulasDescubridores-Principal-Container AulasDescubridores-diplay-flex-column">
                
                <div className="AulasDescubridores-nube AulasDescubridores-imagenRepeatPositionSize AulasDescubridores-positionAbsolute" />

                <div className="AulasDescubridores-titulo AulasDescubridores-imagenRepeatPositionSize AulasDescubridores-positionAbsolute" />
                
                <div className="AulasDescubridores-edad AulasDescubridores-positionAbsolute" >
                        (2-3 años)
                </div>

                <div className="AulasDescubridores-imagen-info AulasDescubridores-diplay-flex-column AulasDescubridores-positionAbsolute" >
                    
                        <div className="AulasDescubridores-imagen AulasDescubridores-imagenRepeatPositionSize" onClick={handleDescubridoresPage}  />

                        <div onClick={handleDescubridoresPage}>
                                <Info/>
                        </div>

                </div>
        </div>
    </>
  );
};

