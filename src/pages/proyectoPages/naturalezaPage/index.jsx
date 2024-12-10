import React, { useState, useEffect } from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAProyectos } from '../../../Components/componentsConstantes/volverAProyecto';
import NaturalezaTitulo from '../../../Images/proyecto/naturaleza/naturaleza.png';
import { TituloCabecera } from '../../../Components/componentsConstantes/tituloCabecera';
import { Parrafo } from '../../../Components/componentsConstantes/parrafo';
import { NaturalezaImagenesCambiantes } from '../../../Components/routesComponents/proyectoComponents/naturalezaImagenesCambiantes';





export const NaturalezaPage = ( props ) => {


  const NaturalezaTituloImagen = NaturalezaTitulo;

  const [NaturalezaTituloImagenAnchura, setNaturalezaTituloImagenAnchura] = useState(0);
  
  const [NaturalezaTituloImagenAltura, setNaturalezaTituloImagenAltura] = useState(0);

  const NaturalezaTexto1 = `La Escuela Lullaby se encuentra ubicada en un entorno natural, 
							 con numerosos árboles y parques al aire libre. Esta circunstancia 
							 es aprovechada por el centro para realizar pequeñas Naturaleza a 
							 los alrededores. Aprenden y conocen el entorno y cuidan de él. Por 
							 ejemplo, en otoño los niños visitan el parque para recoger las 
							 hojas de los árboles.`;

  useEffect(() => {
	// Función para actualizar los valores de ancho y alto según el tamaño de la pantalla
	  const updateDimensions = () => {
		  const width = window.innerWidth;
		  if (width <= 480) {
			  setNaturalezaTituloImagenAnchura(158);
			  setNaturalezaTituloImagenAltura(63);

		  } else if (width >= 481 && width <= 767) {
			  setNaturalezaTituloImagenAnchura(236);
			  setNaturalezaTituloImagenAltura(94);

		  } else if (width >= 768 && width <= 959) {
			  setNaturalezaTituloImagenAnchura(382);
			  setNaturalezaTituloImagenAltura(152);

		  } else if (width >= 960 && width <= 1199) {
			  setNaturalezaTituloImagenAnchura(477);
			  setNaturalezaTituloImagenAltura(190);

		  } else {
			  setNaturalezaTituloImagenAnchura(596);
			  setNaturalezaTituloImagenAltura(237);

		  }
	  };

	  updateDimensions();
	  window.addEventListener('resize', updateDimensions);

	  return () => window.removeEventListener('resize', updateDimensions);
  }, []);


  return (
	<>


			<Box  sx={{     
						// backgroundColor: 'rgb(250, 235, 215)',
						'@media (max-width: 480px)': {
								width: `${props.anchuraNaturalezaPage480px}rem`, 
								height: `${props.alturaNaturalezaPage480px}rem`,
								marginTop: '1rem', 
						},
						'@media (min-width: 481px) and (max-width: 767px)': {
								width: `${props.anchuraNaturalezaPage481px_a_767px}rem`,
								height: `${props.alturaNaturalezaPage481px_a_767px}rem`,
								marginTop: '1.5rem',
						},
						'@media (min-width: 768px) and (max-width: 959px)': {
								width: `${props.anchuraNaturalezaPage768px_a_959px}rem`,
								height: `${props.alturaNaturalezaPage768px_a_959px}rem`,
								marginTop: '2rem',
						},
						'@media (min-width: 960px) and (max-width: 1199px)': {
								width: `${props.anchuraNaturalezaPage960px_a_1199px}rem`, 
								height: `${props.alturaNaturalezaPage960px_a_1199px}rem`,
								marginTop: '2.5rem',
						},
						'@media (min-width: 1200px)': {
								width: `${props.anchuraNaturalezaPage1200px}rem`,
								height: `${props.alturaNaturalezaPage1200px}rem`,
								marginTop: '3rem',
						}  
			}}>


					<VolverAProyectos />


					<div className='NaturalezaLogoTituloEfecto'>

							<TituloCabecera imagenBackgroundUbicacion={NaturalezaTituloImagen}
												anchuraTitulo={NaturalezaTituloImagenAnchura}
												alturaTitulo={NaturalezaTituloImagenAltura} 
							/>

					</div>


					<div className='NaturalezaPage-parrafos-imagenes-container'>

							<div className='NaturalezaPage-parrafos-container'>

									<Parrafo parrafoTexto={NaturalezaTexto1} />

							</div>

							<NaturalezaImagenesCambiantes />

					</div>


			</Box>


	</>
  )
}
