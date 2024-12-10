import React, { useState, useEffect }   from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAProyectoYsiguiente } from '../../../Components/componentsConstantes/volverAProyectoYSiguiente';
import { TituloCabecera } from '../../../Components/componentsConstantes/tituloCabecera';
import PsicomotricidadPageTitulo from '../../../Images/proyecto/psicomotricidad/psicomotricidad.png';
import { Parrafo } from '../../../Components/componentsConstantes/parrafo';
import { PsicomotricidadImagenesCambiantes } from '../../../Components/routesComponents/proyectoComponents/psicomotricidadImagenesCambiantes';





export const PsicomotricidadPage = ( props ) => {


  const IrAJuegoPage = 'proyectoPage/juego';

  const PsicomotricidadPageTituloImagen = PsicomotricidadPageTitulo;

  const [PsicomotricidadPageTituloImagenAnchura, setPsicomotricidadPageTituloImagenAnchura] = useState(0);
  
  const [PsicomotricidadPageTituloImagenAltura, setPsicomotricidadPageTituloImagenAltura] = useState(0);

  const PsicomotricidadPagesTexto1 = `El desarrollo cognitivo está ligado al motor en todos los aspectos 
									  durante los primeros años de la infancia y es por ello que el niño 
									  en su movimiento descubre el mundo que le rodea. `;

  const PsicomotricidadPagesTexto2 = `Al menos una vez a la semana, los alumnos de las aulas de 1-2 años 
									  y 2-3 años tendrán una sesión de psicomotricidad en el espacio dedicado 
									  expresamente a esta actividad, dotado con los elementos fijos y móviles 
									  (módulos, rampas, aros, telas, colchonetas…) necesario para el correcto 
									  desarrollo. `;

  const PsicomotricidadPagesTexto3 = `Los niños de 0-1 año también tendrán sesiones de psicomotricidad, 
									  adaptadas a su edad, en su propia aula.`;

  useEffect(() => {
	  // Función para actualizar los valores de ancho y alto según el tamaño de la pantalla
	  const updateDimensions = () => {
		  const width = window.innerWidth;
		  if (width <= 480) {
			  setPsicomotricidadPageTituloImagenAnchura(157);
			  setPsicomotricidadPageTituloImagenAltura(65);

		  } else if (width >= 481 && width <= 767) {
			  setPsicomotricidadPageTituloImagenAnchura(236);
			  setPsicomotricidadPageTituloImagenAltura(97);

		  } else if (width >= 768 && width <= 959) {
			  setPsicomotricidadPageTituloImagenAnchura(377);
			  setPsicomotricidadPageTituloImagenAltura(155);

		  } else if (width >= 960 && width <= 1199) {
			  setPsicomotricidadPageTituloImagenAnchura(471);
			  setPsicomotricidadPageTituloImagenAltura(194);

		  } else {
			  setPsicomotricidadPageTituloImagenAnchura(588);
			  setPsicomotricidadPageTituloImagenAltura(242);

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
									width: `${props.anchuraPsicomotricidadPage480px}rem`,
									height: `${props.alturaPsicomotricidadPage480px}rem`,
									marginTop: '1rem',
							},
							'@media (min-width: 481px) and (max-width: 767px)': {
									width: `${props.anchuraPsicomotricidadPage481px_a_767px}rem`,
									height: `${props.alturaPsicomotricidadPage481px_a_767px}rem`,
									marginTop: '1.5rem',
							},
							'@media (min-width: 768px) and (max-width: 959px)': {
									width: `${props.anchuraPsicomotricidadPage768px_a_959px}rem`, 
									height: `${props.alturaPsicomotricidadPage768px_a_959px}rem`,
									marginTop: '2rem',
							},
							'@media (min-width: 960px) and (max-width: 1199px)': {
									width: `${props.anchuraPsicomotricidadPage960px_a_1199px}rem`,
									height: `${props.alturaPsicomotricidadPage960px_a_1199px}rem`,
									marginTop: '2.5rem',
							},
							'@media (min-width: 1200px)': {
									width: `${props.anchuraPsicomotricidadPage1200px}rem`,
									height: `${props.alturaPsicomotricidadPage1200px}rem`,
									marginTop: '3rem',
							}  
			}}>


					<VolverAProyectoYsiguiente enlace={IrAJuegoPage} />
					

					<div className='PsicomotricidadPageLogoTituloEfecto'>

							<TituloCabecera imagenBackgroundUbicacion={PsicomotricidadPageTituloImagen}
												anchuraTitulo={PsicomotricidadPageTituloImagenAnchura}
												alturaTitulo={PsicomotricidadPageTituloImagenAltura} 
							/>

					</div>


					<div className='PsicomotricidadPage-parrafos-imagenes-container'>

								<div className='PsicomotricidadPage-parrafos-container'>

										<Parrafo parrafoTexto={PsicomotricidadPagesTexto1} />

										<Parrafo parrafoTexto={PsicomotricidadPagesTexto2} />

										<Parrafo parrafoTexto={PsicomotricidadPagesTexto3} />

								</div>

								<PsicomotricidadImagenesCambiantes />
								
					</div>
				

			</Box>
	</>
  )
}
