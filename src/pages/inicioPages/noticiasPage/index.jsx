import React, { useEffect, useState } from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import imagenCambianteNoticias1 from '../../../Images/inicio/noticia/noticias_1.jpg';
import imagenCambianteNoticias2 from '../../../Images/inicio/noticia/noticias_2.jpg';
import imagenCambianteNoticias3 from '../../../Images/inicio/noticia/noticias_3.jpg';
import imagenCambianteNoticias4 from '../../../Images/inicio/noticia/noticias_4.jpg';
import { VolverAinicio } from '../../../Components/componentsConstantes/volverAInicio';





export const NoticiasPage = ( props ) => {


	  const navigate = useNavigate();

	  const handleReturnInicio = () => {
		window.scrollTo({ top: 0 });
		  navigate('/inicioPage');
	  }

	  const images = [
			imagenCambianteNoticias1,
			imagenCambianteNoticias2,
			imagenCambianteNoticias3,
			imagenCambianteNoticias4,
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
						width: `${props.anchuraNoticiasPage480px}rem`,
						height: `${props.alturaNoticiasPage480px}rem`,
						marginTop: '1rem',
				},
				'@media (min-width: 481px) and (max-width: 767px)': {
						width: `${props.anchuraNoticiasPage481px_a_767px}rem`,
						height: `${props.alturaNoticiasPage481px_a_767px}rem`,
						marginTop: '1.5rem',
				},
				'@media (min-width: 768px) and (max-width: 959px)': {
						width: `${props.anchuraNoticiasPage768px_a_959px}rem`,
						height: `${props.alturaNoticiasPage768px_a_959px}rem`,
						marginTop: '2rem',
				},
				'@media (min-width: 960px) and (max-width: 1199px)': {
						width: `${props.anchuraNoticiasPage960px_a_1199px}rem`,
						height: `${props.alturaNoticiasPage960px_a_1199px}rem`,
						marginTop: '2.5rem',
				},
				'@media (min-width: 1200px)': {
						width: `${props.anchuraNoticiasPage1200px}rem`,
						height: `${props.alturaNoticiasPage1200px}rem`,
						marginTop: '3rem',
				}  
		}}>


				  <VolverAinicio />


				  <div className='noticiasPage-subContainer'>


							  <div className='noticiasPage-noticiasLogo-container'>

									<div className='noticiasPage-noticiasLogo' onClick={handleReturnInicio}/>

							  </div>


							  <div className='noticiasPage-parrafo-container'>

										  <div className='noticiasPage-parrafo'>
												
												<div className='noticiasPage-titulo'>
													  Modernas instalaciones
												</div>

												<div>
													  La Escuela Infantil Lullaby ofrece las mejores instalaciones para tus 
													  hijos. Lullaby es una escuela de nueva construcción de 300 metros
													  cuadrados en una sola planta con grandes espacios iluminados con
													  luz natural todo el año y dotada con los mejores equipamientos.
													  Además, disponemos de más de 1000 metros cuadrados de jardines
													  y patios al aire libre, diferenciados por edades.
												</div>

												<div>
													  Lullaby dispone de un equipo profesional altamente 
													  cualificado y con experiencia y un Proyecto Educativo 
													  propio basado en el arte, la música, el inglés y la 
													  naturaleza. Nuestros niños y niñas tienen una alimentación 
													  de alta calidad basada en una cocina mediterránea, rica y 
													  tradicional, y cuentan con un comedor de uso exclusivo. 
												</div>

												<div>
													  Además circuito de educación vial, huerto e invernadero, 
													  clases de psicomotricidad y yoga, horario extensivo,
													  Noticias, nutricionista… ¿Te lo vas a perder?.
												</div>

												<div className='noticiasPage-lineaFinal'>
													  Ven a conocernos
												</div>

										  </div>
										  

												<div className='noticiasPage-lineaDivisora'/>


										  <div className='noticiasPage-parrafo'>
												
												<div className='noticiasPage-titulo'>
													  Exploradores, Aventureros y Descubridores
												</div>

												<div>
													  ¿Eres un pequeño explorador, un trepidante aventurero 
													  o un curioso descubridor? En Lullaby, nuestros niños 
													  aprenden y conocen su entorno, sorprendiéndose con cada 
													  pequeño descubrimiento, aventurándose en caminos que 
													  antes no habían transitado, explorando cada centímetro 
													  del mundo que les rodea. Pero, sobre todo, en Lullaby 
													  nuestros niños son felices porque experimentan ese 
													  mundo en un ambiente de cariño y seguridad.
												</div>

												<div>
													  La Escuela Infantil Lullaby dispone de tres aulas: los pequeños 
													  de 0-1 año son nuestros Exploradores, los niños y niñas de 1-2 
													  años son nuestros Aventureros y los “mayores” de 2-3 años son 
													  nuestros grandes Descubridores.
												</div>

												<div className='noticiasPage-lineaFinal'>
													  ¿Quién eres tú en Lullaby?
												</div>
												
										  </div>

							  </div>


							  <div className='noticiasPage-imagenes-container'>
							  
									
										  <div
												className={`noticiasImages ${isFading ? 'noticias-fade-in' : 'noticias-fade-out'}`}
												style={{ backgroundImage: `url(${images[currentImage]})` }}
										  />
							  
									
							  </div>


				  </div>


		</Box>


	</>
  )
}
