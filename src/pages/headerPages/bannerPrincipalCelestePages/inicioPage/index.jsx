import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
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


export const InicioPage = ( props ) => {


      // Enlaces de las imagenes redondas fotos, pediatra, noticias, decalogo, nutricionista, excursiones
      const FotosEnlace = 'fotos';
      const PediatraEnlace = 'pediatra';
      const NoticiasEnlace = 'noticias';

      const DecalogoEnlace = 'decalogo';
      const NutricionistaEnlace = 'nutricionista';
      const ExcursionesEnlace = 'excursiones';


  return (
    <>
        <div className='InicioPage-Principal-Container'>
            
            
              <Box  sx={{       '@media (max-width: 480px)': {
                                                      width: `${ props.anchuraInicio480px }rem`, 
                                                },
                                                '@media (min-width: 481px) and (max-width: 767px)': {
                                                      width: `${ props.anchuraInicio481px_a_767px }rem`, 
                                                },
                                                '@media (min-width: 768px) and (max-width: 959px)': {
                                                      width: `${ props.anchuraInicio768px_a_959px }rem`, 
                                                },
                                                '@media (min-width: 960px) and (max-width: 1199px)': {
                                                      width: `${ props.anchuraInicio960px_a_1199px }rem`, 
                                                },
                                                '@media (min-width: 1200px)': {
                                                      width: `${ props.anchuraInicio1200px }rem`, 
                                                }  
              }}>
                      {/* inicio */}
                      
                      <div className='inicioPage-parte1-enlacesRedondos-e-imagenes' >
                      
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


              </Box>
              
                                     
               <BannerCelesteCentral anchuraBannerCelesteCentral480px={ props.anchuraInicio480px }
                                    anchuraBannerCelesteCentral481px_a_767px={ props.anchuraInicio481px_a_767px}
                                    anchuraBannerCelesteCentral768px_a_959px={ props.anchuraInicio768px_a_959px }
                                    anchuraBannerCelesteCentral960px_a_1199px={ props.anchuraInicio960px_a_1199px }
                                    anchuraBannerCelesteCentral1200px={ props.anchuraInicio1200px } />
              





              
             
              <CuadernoNotas  anchuraCuadernoNotas480px={ props.anchuraInicio480px }
                              anchuraCuadernoNotas481px_a_767px={ props.anchuraInicio481px_a_767px }
                              anchuraCuadernoNotas768px_a_959px={ props.anchuraInicio768px_a_959px }
                              anchuraCuadernoNotas960px_a_1199px={ props.anchuraInicio960px_a_1199px }
                              anchuraCuadernoNotas1200px={ props.anchuraInicio1200px } /> 
                              
                              
        </div>
    </>
  )
}
