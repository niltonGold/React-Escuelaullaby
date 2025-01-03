import React, { useEffect, useState } from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import imagenCambiantePediatra1 from '../../../Images/inicio/pediatra/pediatra_1.jpg';
import imagenCambiantePediatra2 from '../../../Images/inicio/pediatra/pediatra_2.jpg';
import { VolverAinicio } from '../../../Components/componentsConstantes/volverAInicio';






export const PediatraPage = ( props ) => {


	const navigate = useNavigate();

	const handleReturnInicio = () => {
		window.scrollTo({ top: 0 });
		navigate('/inicioPage');
	}
	
	const images = [
		imagenCambiantePediatra1,
		imagenCambiantePediatra2,
	  ];

	const [currentImage, setCurrentImage] = useState(0);

	const [isFading, setIsFading] = useState(true);

   useEffect(() => {
	  const intervalId = setInterval(() => {
		setIsFading(false); // Desvanece la imagen actual
		setTimeout(() => {
			setCurrentImage((prev) => (prev + 1) % images.length); // Cambia la imagen
			setIsFading(true); // Activa el desvanecimiento de la nueva imagen
		}, 1000); // Duración de fade-out antes de cambiar la imagen
	  }, 4000); // Intervalo total para la transición y visualización

	  return () => clearInterval(intervalId);
	}, [images.length]);


  return (
	<>


		<Box  sx={{     
				// backgroundColor: 'rgb(250, 235, 215)',
				'@media (max-width: 480px)': {
					width: `${props.anchuraPediatraPage480px}rem`,
					height: `${props.alturaPediatraPage480px}rem`,
					marginTop: '1rem',
				},
				'@media (min-width: 481px) and (max-width: 767px)': {
					width: `${props.anchuraPediatraPage481px_a_767px}rem`,
					height: `${props.alturaPediatraPage481px_a_767px}rem`,
					marginTop: '1.5rem',

				},
				'@media (min-width: 768px) and (max-width: 959px)': {
					width: `${props.anchuraPediatraPage768px_a_959px}rem`,
					height: `${props.alturaPediatraPage768px_a_959px}rem`,
					marginTop: '2rem',
				},
				'@media (min-width: 960px) and (max-width: 1199px)': {
					width: `${props.anchuraPediatraPage960px_a_1199px}rem`,
					height: `${props.alturaPediatraPage960px_a_1199px}rem`,
					marginTop: '2.5rem',
				},
				'@media (min-width: 1200px)': {
					width: `${props.anchuraPediatraPage1200px}rem`,
					height: `${props.alturaPediatraPage1200px}rem`,
					marginTop: '3rem',
				}  
		}}>


			<VolverAinicio />


			<div className='pediatraPage-subContainer'>


					<div className='pediatraPage-pediatraLogo-container'>

						<div className='pediatraPage-pediatraLogo' onClick={handleReturnInicio} />

					</div>

					<div className='pediatraPage-parrafo'>
							Lullaby dispone de un servicio de pediatría dirigido a todos los alumnos matriculados en la 
							escuela. Se trata de una atención preventiva, considerando todas aquellas enfermedades 
							o afecciones más habituales de los niños que están escolarizados, por ejemplo, 
							catarros comunes, problemas digestivos o algún accidente leve. En estos casos, 
							el pediatra de nuestro centro ofrecerá a los padres algunos consejos concretos. 
							Si detectase alguna enfermedad o problema mayor, les remitirá a su pediatra de 
							cabecera para que realice un estudio más exhaustivo, ya que es quién lleva a 
							cabo el seguimiento y evolución del niño desde su nacimiento.
					</div>

					<div className='pediatraPage-imagenes-container'>
					
						
							<div
								className={`pediatraImages ${isFading ? 'pediatra-fade-in' : 'pediatra-fade-out'}`}
								style={{ backgroundImage: `url(${images[currentImage]})` }}
							/>
					
						
					</div>


			</div>


	  	</Box>


	</>
  )
}
