import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { VolverAinicio } from '../../../Components/componentsConstantes/volverAInicio';





export const FotosPage = ( props ) => {

	  
  const navigate = useNavigate();

  const handleReturnInicio = () => {
		window.scrollTo({ top: 0 });
	  	navigate('/inicioPage');
  }


  return (
	<>
		<Box  sx={{     
					// backgroundColor: 'rgb(250, 235, 215)',
					'@media (max-width: 480px)': {
							width: `${props.anchuraFotosPage480px}rem`,
							height: `${props.alturaFotosPage480px}rem`,
							marginTop: '1rem',
					},
					'@media (min-width: 481px) and (max-width: 767px)': {
							width: `${props.anchuraFotosPage481px_a_767px}rem`,
							height: `${props.alturaFotosPage481px_a_767px}rem`,
							marginTop: '1.5rem',
					},
					'@media (min-width: 768px) and (max-width: 959px)': {
							width: `${props.anchuraFotosPage768px_a_959px}rem`,
							height: `${props.alturaFotosPage768px_a_959px}rem`,
							marginTop: '2rem',
					},
					'@media (min-width: 960px) and (max-width: 1199px)': {
							width: `${props.anchuraFotosPage960px_a_1199px}rem`,
							height: `${props.alturaFotosPage960px_a_1199px}rem`,
							marginTop: '2.5rem',
					},
					'@media (min-width: 1200px)': {
							width: `${props.anchuraFotosPage1200px}rem`,
							height: `${props.alturaFotosPage1200px}rem`,
							marginTop: '3rem',
					}  
		}}>


				  <VolverAinicio/>


				  <div className='fotosPage-fotosLogo-container'>
						

							  <div className='fotosPage-fotosLogo' onClick={handleReturnInicio}/>


				  </div>
				

				  <div className='fotosPage-imagenes-container'>
				  

							  <div className='fotosPage-imagenesContainer'>
									<div className='fotosPage-imagen fotosPage-imagen1'/>
									<div className='fotosPage-imagen fotosPage-imagen2'/>
							  </div>

							  
							  <div className='fotosPage-imagenesContainer'>
									<div className='fotosPage-imagen fotosPage-imagen3'/>
									<div className='fotosPage-imagen fotosPage-imagen4'/>
							  </div>
						

				  </div>


		</Box>
	</>
  )
}
