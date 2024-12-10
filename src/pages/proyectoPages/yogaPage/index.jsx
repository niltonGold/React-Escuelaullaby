import React, { useState, useEffect } from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAProyectoYsiguiente } from '../../../Components/componentsConstantes/volverAProyectoYSiguiente';
import YogaTitulo from '../../../Images/proyecto/yoga/yoga.png';
import { TituloCabecera } from '../../../Components/componentsConstantes/tituloCabecera';
import { Parrafo } from '../../../Components/componentsConstantes/parrafo';
import { YogaComponentImagen } from '../../../Components/routesComponents/proyectoComponents/yogaComponentImagen';





export const YogaPage = ( props ) => {


	const IrANaturalezaPage = 'proyectoPage/naturaleza';

	const YogaTituloImagen = YogaTitulo;

	const [YogaTituloImagenAnchura, setYogaTituloImagenAnchura] = useState(0);
	
	const [YogaTituloImagenAltura, setYogaTituloImagenAltura] = useState(0);

	const YogaTexto1 = `Al finalizar cada clase de psicomotricidad, y en aquellos momentos 
						del día que así se requiera (siesta, cambio de actividad, etc.), se 
						realizará una pequeña sesión de yoga infantil, a través de la cual 
						aprenderán a relajarse, mejorar su atención para la siguiente actividad, 
						canalizar su energía, así como mejorar hábitos posturales.`;

	useEffect(() => {
	  // Función para actualizar los valores de ancho y alto según el tamaño de la pantalla
	  const updateDimensions = () => {
		  const width = window.innerWidth;
		  if (width <= 480) {
			  setYogaTituloImagenAnchura(101);
			  setYogaTituloImagenAltura(78);

		  } else if (width >= 481 && width <= 767) {
			  setYogaTituloImagenAnchura(152);
			  setYogaTituloImagenAltura(117);

		  } else if (width >= 768 && width <= 959) {
			  setYogaTituloImagenAnchura(242);
			  setYogaTituloImagenAltura(186);

		  } else if (width >= 960 && width <= 1199) {
			  setYogaTituloImagenAnchura(303);
			  setYogaTituloImagenAltura(233);

		  } else {
			  setYogaTituloImagenAnchura(379);
			  setYogaTituloImagenAltura(291);

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
								width: `${props.anchuraYogaPage480px}rem`, 
								height: `${props.alturaYogaPage480px}rem`,
								marginTop: '1rem',
						},
						'@media (min-width: 481px) and (max-width: 767px)': {
								width: `${props.anchuraYogaPage481px_a_767px}rem`,
								height: `${props.alturaYogaPage481px_a_767px}rem`,
								marginTop: '1.5rem',
						},
						'@media (min-width: 768px) and (max-width: 959px)': {
								width: `${props.anchuraYogaPage768px_a_959px}rem`, 
								height: `${props.alturaYogaPage768px_a_959px}rem`,
								marginTop: '2rem',
						},
						'@media (min-width: 960px) and (max-width: 1199px)': {
								width: `${props.anchuraYogaPage960px_a_1199px}rem`,
								height: `${props.alturaYogaPage960px_a_1199px}rem`,
								marginTop: '2.5rem',
						},
						'@media (min-width: 1200px)': {
								width: `${props.anchuraYogaPage1200px}rem`,
								height: `${props.alturaYogaPage1200px}rem`,
								marginTop: '3rem', 
						}  
			}}>


					<VolverAProyectoYsiguiente enlace={IrANaturalezaPage} />


					<div className='YogaLogoTituloEfecto'>

								<TituloCabecera imagenBackgroundUbicacion={YogaTituloImagen}
												anchuraTitulo={YogaTituloImagenAnchura}
												alturaTitulo={YogaTituloImagenAltura} 
								/>

					</div>


					<div className='YogaPage-parrafos-imagenes-container'>

							<div className='YogaPage-parrafos-container'>

									<Parrafo parrafoTexto={YogaTexto1} />

							</div>

							<YogaComponentImagen />

					</div>


			</Box>


	</>
  )
}
