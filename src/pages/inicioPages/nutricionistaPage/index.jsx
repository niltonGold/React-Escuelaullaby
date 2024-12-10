import React, { useEffect, useState } from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import imagenCambianteNoticia1 from '../../../Images/inicio/noticia/noticias_1.jpg';
import imagenCambianteNoticia2 from '../../../Images/inicio/noticia/noticias_2.jpg';
import imagenCambianteNoticia3 from '../../../Images/inicio/noticia/noticias_3.jpg';
import imagenCambianteNoticia4 from '../../../Images/inicio/noticia/noticias_4.jpg';
import { VolverAinicio } from '../../../Components/componentsConstantes/volverAInicio';





export const NutricionistaPage = ( props ) => {


	  const navigate = useNavigate();

	  const handleReturnInicio = () => {
			window.scrollTo({ top: 0 });
		  	navigate('/inicioPage');
	  }

	  const images = [
			imagenCambianteNoticia1,
			imagenCambianteNoticia2,
			imagenCambianteNoticia3,
			imagenCambianteNoticia4,
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
						width: `${props.anchuraNutricionistaPage480px}rem`, 
						height: `${props.alturaNutricionistaPage480px}rem`,
						marginTop: '1rem',
				},
				'@media (min-width: 481px) and (max-width: 767px)': {
						width: `${props.anchuraNutricionistaPage481px_a_767px}rem`,
						height: `${props.alturaNutricionistaPage481px_a_767px}rem`,
						marginTop: '1.5rem',
				},
				'@media (min-width: 768px) and (max-width: 959px)': {
						width: `${props.anchuraNutricionistaPage768px_a_959px}rem`, 
						height: `${props.alturaNutricionistaPage768px_a_959px}rem`,
						marginTop: '2rem',
				},
				'@media (min-width: 960px) and (max-width: 1199px)': {
						width: `${props.anchuraNutricionistaPage960px_a_1199px}rem`,
						height: `${props.alturaNutricionistaPage960px_a_1199px}rem`,
						marginTop: '2.5rem', 
				},
				'@media (min-width: 1200px)': {
						width: `${props.anchuraNutricionistaPage1200px}rem`,
						height: `${props.alturaNutricionistaPage1200px}rem`,
						marginTop: '3rem',
				}  
		}}>


				  <VolverAinicio />


				  <div className='nutricionPage-subContainer'>
						

						<div className='nutricionPage-nutricionLogo-container'>

									<div className='nutricionPage-nutricionLogo' onClick={handleReturnInicio} />

						</div>
						
						<div className='nutricionPage-parrafo'>
							  La Escuela Infantil Lullaby trabaja conjuntamente con una especialista
							  en nutrición. Todos los meses, el equipo educativo de nuestro 
							  centro se reúne con Natalia para diseñar el menú de los niños, 
							  teniendo siempre en cuenta los puntos esenciales relacionados 
							  con la alimentación y nutrición infantil:
						</div>

						<div className='nutricionPage-parrafo-conSangria-container'>
							  
							  <div className='nutricionPage-parrafoSangria'>
									Ofrecer una dieta saludable para favorecer un crecimiento óptimo, 
									basada en una cocina tradicional y rica.
							  </div>
							  <div className='nutricionPage-parrafoSangria'>
									Fomentar la adquisición de buenos hábitos en relación a la 
									variedad de alimentos y sabores de las comidas.
							  </div>
							  <div className='nutricionPage-parrafoSangria'>
									Introducir gradualmente los diferentes alimentos y texturas hasta 
									llegar a un menú completo, adaptándose así a las etapas evolutivas
									de los niños de 0 a 3 años. 
							  </div>
							  <div className='nutricionPage-parrafoSangria'>
									Prestar especial atención a las diversas adaptaciones de 
									la dieta: alergias, intolerancias…
							  </div>
							  
						</div>

						<div className='nutricionPage-parrafo'>
									Nuestra nutricionista está a disposición de todos los padres 
									para cualquier sugerencia o duda que les pueda surgir en 
									relación con la alimentación de sus hijos.
						</div>

						<div className='nutricionPage-imagenes-container'>
							  
									<div
										  className={`nutricionImages ${isFading ? 'nutricion-fade-in' : 'nutricion-fade-out'}`}
										  style={{ backgroundImage: `url(${images[currentImage]})` }}
									/>
						
						</div>

				  </div>

		</Box>


	</>
  )
}
