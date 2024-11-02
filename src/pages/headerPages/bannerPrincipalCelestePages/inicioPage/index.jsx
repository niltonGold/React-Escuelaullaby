import React from 'react';
import './styles.css';
import { EnlacesRedondos } from '../../../../Components/routesComponents/inicioComponents/enlacesRedondos';
import { ImagenesCambiantes } from '../../../../Components/routesComponents/inicioComponents/imagenesCambiantes';

// Enlaces redondos de la iquierda
import fotos from '../../../../Images/inicio/enlacesRedondos/fotos.png'
import pediatra from '../../../../Images/inicio/enlacesRedondos/pediatra.png'
import noticias from '../../../../Images/inicio/enlacesRedondos/noticias.png'

// Enlaces redondos de la derecha
import decalogo from '../../../../Images/inicio/enlacesRedondos/decalogo.png'
import nutricionista from '../../../../Images/inicio/enlacesRedondos/nutricionista.png'
import excursiones from '../../../../Images/inicio/enlacesRedondos/excursiones.png'
import { BannerCelesteCentral } from '../../../../Components/routesComponents/inicioComponents/bannerCelesteleCentral';
import { CuadernoNotas } from '../../../../Components/routesComponents/inicioComponents/cuadernoNotas';


export const InicioPage = () => {
  return (
    <>
        <div className='InicioPage-Principal-Container'>
            <div className='inicioPage-parte1-enlacesRedondos-e-imagenes'>
            <EnlacesRedondos imgBarckGround1={fotos} imgBarckGround2={pediatra} imgBarckGround3={noticias} />

            <ImagenesCambiantes />

            <EnlacesRedondos imgBarckGround1={decalogo} imgBarckGround2={nutricionista} imgBarckGround3={excursiones} />
            </div>

            <BannerCelesteCentral/>
            
            <CuadernoNotas/>

        </div>
    </>
  )
}
