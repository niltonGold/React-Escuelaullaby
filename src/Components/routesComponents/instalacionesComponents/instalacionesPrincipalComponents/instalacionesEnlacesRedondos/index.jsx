import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';





export const InstalacionesEnlacesRedondos = (  ) => {


    const navigate = useNavigate();

    const scrollToTopAndNavigate = (path) => {
        window.scrollTo({ top: 0 }); // Desplaza al inicio con suavidad
        navigate(path);
    };
  

    return (
        <>


            <div className='InstalacionesEnlacesRedondos-Principal-Container'>
                
                    <div className="instalacionesEnlacesRedondos-subContainer">

                            <div  className="instalacionesEnlacesRedondos-Logo instalacionesEnlacesRedondos-aulasLogo"
                                onClick={() => scrollToTopAndNavigate('/instalacionesPage/aulas')}
                            />

                            <div  className="instalacionesEnlacesRedondos-Logo instalacionesEnlacesRedondos-hallYdespachoLogo"
                                onClick={() => scrollToTopAndNavigate('/instalacionesPage/hallYdespacho')}
                            />

                            <div  className="instalacionesEnlacesRedondos-Logo instalacionesEnlacesRedondos-comedorLogo"
                                onClick={() => scrollToTopAndNavigate('/instalacionesPage/comedor')}
                            />

                    </div>



                    <div className="instalacionesEnlacesRedondos-subContainer">

                            <div  className="instalacionesEnlacesRedondos-Logo instalacionesEnlacesRedondos-cocinaYlavanderiaLogo"
                                onClick={() => scrollToTopAndNavigate('/instalacionesPage/cocinaYlavanderia')}
                            />

                            <div  className="instalacionesEnlacesRedondos-Logo instalacionesEnlacesRedondos-patiosLogo"
                                onClick={() => scrollToTopAndNavigate('/instalacionesPage/patios')}
                            />

                            <div  className="instalacionesEnlacesRedondos-Logo instalacionesEnlacesRedondos-huertoEinvernaderoLogo"
                                onClick={() => scrollToTopAndNavigate('/instalacionesPage/huertoEinvernadero')}
                            />

                            <div className="instalacionesEnlacesRedondos-Logo instalacionesEnlacesRedondos-salonDeActosLogo"
                                onClick={() => scrollToTopAndNavigate('/instalacionesPage/salonDeActos')}
                            />

                    </div>
                    
            </div>


        </>
  )
}
