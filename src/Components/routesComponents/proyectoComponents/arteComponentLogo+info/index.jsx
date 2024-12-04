import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { InfoProyecto } from '../proyectos+info';





export const ArteComponentLogoInfo = () => {


    const navigate = useNavigate();

    const handleExploradoresPage = () => {
        window.scrollTo({ top: 0 });
        navigate('/proyectoPage/arte');
    };


    return (
        <>


            <div className="ArteComponentLogoInfo-Principal-Container ArteComponentLogoInfo-diplay-flex-column">
                    

                    <div className="ArteComponentLogoInfo-nube-Container">

                            <div className="ArteComponentLogoInfo-nube ArteComponentLogoInfo-imagenRepeatPositionSize" />

                    </div>

                    <div onClick={handleExploradoresPage}>

                            <InfoProyecto />
                            
                    </div>

                    <div className="ArteComponentLogoInfo-titulo ArteComponentLogoInfo-imagenRepeatPositionSize" onClick={handleExploradoresPage}/>


            </div>


        </>
  );
};

