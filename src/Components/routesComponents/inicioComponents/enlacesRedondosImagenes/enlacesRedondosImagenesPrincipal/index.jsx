import React from 'react';
import './styles.css';
import { EnlacesRedondos } from '../enlacesRedondos';
import { ImagenesCambiantes } from '../imagenesCambiantes';

// Enlaces redondos de la iquierda
import fotos from '../../../../../Images/inicio/enlacesRedondos/fotos.png'
import pediatra from '../../../../../Images/inicio/enlacesRedondos/pediatra.png'
import noticias from '../../../../../Images/inicio/enlacesRedondos/noticias.png'

// Enlaces redondos de la derecha
import decalogo from '../../../../../Images/inicio/enlacesRedondos/decalogo.png'
import nutricionista from '../../../../../Images/inicio/enlacesRedondos/nutricionista.png'
import excursiones from '../../../../../Images/inicio/enlacesRedondos/excursiones.png'





export const EnlacesRedondosImagenesPrincipal = ( ) => {



  const FotosEnlace = 'fotos';
  const PediatraEnlace = 'pediatra';
  const NoticiasEnlace = 'noticias';

  const DecalogoEnlace = 'decalogo';
  const NutricionistaEnlace = 'nutricionista';
  const ExcursionesEnlace = 'excursiones';



  return (
    <>

        <div className='EnlacesRedondosImagenesPrincipal-enlacesRedondos-e-imagenes-container' >
        

                <EnlacesRedondos imgBarckGround1={fotos} 
                                 enlaceDeImagenRedonda1={FotosEnlace}
                    
                                 imgBarckGround2={pediatra} 
                                 enlaceDeImagenRedonda2={PediatraEnlace}
                                    
                                 imgBarckGround3={noticias} 
                                 enlaceDeImagenRedonda3={NoticiasEnlace}
                />



                <ImagenesCambiantes />



                <EnlacesRedondos imgBarckGround1={decalogo} 
                                 enlaceDeImagenRedonda1={DecalogoEnlace}
                                    
                                 imgBarckGround2={nutricionista} 
                                 enlaceDeImagenRedonda2={NutricionistaEnlace}
                                    
                                 imgBarckGround3={excursiones}
                                 enlaceDeImagenRedonda3={ExcursionesEnlace} 
                />
            
        </div>

    </>
  )
}