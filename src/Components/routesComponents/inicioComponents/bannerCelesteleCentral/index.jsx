import React from 'react';
import './styles.css';


export const BannerCelesteCentral = () => {
  return (
        <>
            <div className='BannerCelesteCentral-Principal-Container'>


                    <div className='bannerCelesteCentral-subcontainer'>
                            
                                <div className='bannerCelesteCentral-titulo-texto-container'>
                                    <div className='bannerCelesteCentral-titulo'>Dirección :</div>
                                    <div className='bannerCelesteCentral-texto'>C/Salónica 43 Las Rozas de Madrid</div>
                                </div>
                                <div className='bannerCelesteCentral-titulo-texto-container'>
                                    <div className='bannerCelesteCentral-titulo'>Teléfono :</div>
                                    <div className='bannerCelesteCentral-texto bannerCelesteCentral-texto-telefono'>681 285 932</div>
                                </div>
                        
                                <div className='bannerCelesteCentral-titulo-texto-container'>
                                    <div className='bannerCelesteCentral-titulo'>Mail :</div>
                                    <div className='bannerCelesteCentral-texto'>info@escuelalullaby.es</div>
                                </div>
                                
                                <div className='bannerCelesteCentral-redesSociales-container'>
                                    <div className='bannerCelesteCentral-redSocial bannerCelesteCentral-instagram'/>
                                    <div className='bannerCelesteCentral-redSocial bannerCelesteCentral-facebook'/>
                                    <div className='bannerCelesteCentral-redSocial bannerCelesteCentral-x'/>
                                </div>
                    
                    </div>


            </div>
        </>
  )
}
