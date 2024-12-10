import React, { useState, useEffect }  from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAinstalacionesYsiguiente } from '../../../Components/componentsConstantes/volverAInstalacionesYSiguiente';
import { Siguiente } from '../../../Components/componentsConstantes/siguiente';
import PatiosTitulo from '../../../Images/instalaciones/patios/patiosTitulo.png';
import { TituloCabecera } from '../../../Components/componentsConstantes/tituloCabecera';
import { Parrafo } from '../../../Components/componentsConstantes/parrafo';
import { PatiosImagenesCambiantes } from '../../../Components/routesComponents/instalacionesComponents/patios/patiosImagenesCambiantes';





export const Patios = ( props ) => {


	const IrAhuertoEinvernadero = 'instalacionesPage/huertoEinvernadero';

	const PatiosTituloImagen = PatiosTitulo;

	const [PatiosTituloImagenAnchura, setPatiosTituloImagenAnchura] = useState(0);

	const [PatiosTituloImagenAltura, setPatiosTituloImagenAltura] = useState(0);

	const PatiosTexto1 = `La escuela cuenta con dos grandes zonas exteriores, 
						con acceso directo desde las aulas. `

	const PatiosTexto2 = `El patio de juegos, con más de 350 metros cuadrados, dispone de césped 
						artificial, suelo de caucho, arenero y columpios adaptados a las edades 
						de los niños. Los niños de 0 a 1 año juegan y disfrutan al aire libre 
						en un área exclusiva dentro de este espacio. `

	const PatiosTexto3 = `El patio de actividades, al que se accede desde el aula de psicomotricidad, 
						con más de 500 metros cuadrados, es de césped natural destinado a actividades 
						dirigidas y donde se sitúa un huerto e invernadero y el Circuito de Educación 
						Vial.`

	useEffect(() => {
	// Función para actualizar los valores de ancho y alto según el tamaño de la pantalla
	const updateDimensions = () => {
		const width = window.innerWidth;
		if (width <= 480) {

				setPatiosTituloImagenAnchura(49); // Ancho y alto para pantallas pequeñas
				setPatiosTituloImagenAltura(28);

		} else if (width >= 481 && width <= 767) {

				setPatiosTituloImagenAnchura(74); // Ancho y alto para pantallas medianas
				setPatiosTituloImagenAltura(42);

		} else if (width >= 768 && width <= 959) {

				setPatiosTituloImagenAnchura(120); // Ancho y alto para pantallas grandes
				setPatiosTituloImagenAltura(68);

		} else if (width >= 960 && width <= 1199) {

				setPatiosTituloImagenAnchura(150); // Ancho y alto para pantallas extra grandes
				setPatiosTituloImagenAltura(85);

		} else {
				setPatiosTituloImagenAnchura(187); // Ancho y alto para pantallas muy grandes
				setPatiosTituloImagenAltura(106);
		}
	};

		// Llama a updateDimensions al montar el componente y cuando se redimensiona la pantalla
		updateDimensions();
		window.addEventListener('resize', updateDimensions);

		// Limpia el evento al desmontar el componente
		return () => window.removeEventListener('resize', updateDimensions);

	}, []);


  return (
	<>


		<Box  sx={{     
				//   backgroundColor: 'rgb(250, 235, 215)',
				  '@media (max-width: 480px)': {
						width: `${props.anchuraPatios480px}rem`,
						height: `${props.alturaPatiosPage480px}rem`,
						marginTop: '1rem',
				  },
				  '@media (min-width: 481px) and (max-width: 767px)': {
						width: `${props.anchuraPatios481px_a_767px}rem`,
						height: `${props.alturaPatiosPage481px_a_767px}rem`,
						marginTop: '1.5rem',
				  },
				  '@media (min-width: 768px) and (max-width: 959px)': {
						width: `${props.anchuraPatios768px_a_959px}rem`,
						height: `${props.alturaPatiosPage768px_a_959px}rem`,
						marginTop: '2rem',
				  },
				  '@media (min-width: 960px) and (max-width: 1199px)': {
						width: `${props.anchuraPatios960px_a_1199px}rem`,
						height: `${props.alturaPatiosPage960px_a_1199px}rem`,
						marginTop: '2.5rem',
				  },
				  '@media (min-width: 1200px)': {
						width: `${props.anchuraPatios1200px}rem`,
						height: `${props.alturaPatiosPage1200px}rem`,
						marginTop: '3rem',
				  }  
		}}>
		  

				  <VolverAinstalacionesYsiguiente enlace={IrAhuertoEinvernadero} />


				  <div  className='patiosPage-subContainer'>

						<div className='patiosPage-titulo_parrafo-container'>
							  
							  <TituloCabecera imagenBackgroundUbicacion={PatiosTituloImagen}
													  anchuraTitulo={PatiosTituloImagenAnchura}
													  alturaTitulo={PatiosTituloImagenAltura} />

							  <div className='patiosPage-titulo_parrafo-container'>
									<Parrafo parrafoTexto={PatiosTexto1} />

									<Parrafo parrafoTexto={PatiosTexto2} />

									<Parrafo parrafoTexto={PatiosTexto3} />
							  </div>

						</div>

							  <PatiosImagenesCambiantes />

							  <Siguiente enlace={IrAhuertoEinvernadero} />
				  </div>
		  

		  </Box>


	</>
  )
}
