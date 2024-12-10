import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { Parrafo } from '../../../../Components/componentsConstantes/parrafo';





export const ZonaPrivadaPage = ( props ) => {


	const ZonaPrivadaParrafo = `Esta plataforma sustituye a las tradicionales agendas 
								de papel. Mensajes instantáneos a los profesores, los 
								menús de comidas, las circulares, los documentos del 
								centro, fotografías del día a día y de eventos especiales, 
								etc. Nuestra Escuela Infantil se convierte en un centro más 
								ecológico y las familias pueden ver la información 
								personalizada de sus hijos de forma instantánea desde 
								cualquier ordenador, tablet o móvil.`;
			
	return (
		<>


			<Box  sx={{     
						// backgroundColor: `rgb(250, 235, 215)`,
						'@media (max-width: 480px)': {
								width: `${props.anchuraZonaPrivadaPage480px}rem`,
								height: `${props.alturaZonaPrivadaPage480px}rem`,
								marginTop: '1rem',
						},
						'@media (min-width: 481px) and (max-width: 767px)': {
								width: `${props.anchuraZonaPrivadaPage481px_a_767px}rem`, 
								height: `${props.alturaZonaPrivadaPage481px_a_767px}rem`,
								marginTop: '1.5rem',
						},
						'@media (min-width: 768px) and (max-width: 959px)': {
								width: `${props.anchuraZonaPrivadaPage768px_a_959px}rem`,
								height: `${props.alturaZonaPrivadaPage768px_a_959px}rem`,
								marginTop: '2rem',
						},
						'@media (min-width: 960px) and (max-width: 1199px)': {
								width: `${props.anchuraZonaPrivadaPage960px_a_1199px}rem`,
								height: `${props.alturaZonaPrivadaPage960px_a_1199px}rem`,
								marginTop: '2.5rem',
						},
						'@media (min-width: 1200px)': {
								width: `${props.anchuraZonaPrivadaPage1200px}rem`,
								height: `${props.alturaZonaPrivadaPage1200px}rem`,
								marginTop: '3rem',
						}  
			}}>


					<div className='ZonaPrivadaPage-Parrafos-Container'>


								<div className='ZonaPrivadaPage-Parrafo1'>
										La Escuela Infantil Lullaby trabaja con 
										<span className='ZonaPrivadaPage-letraResaltada'> AGENDA ELECTRÓNICA</span>, 
										una nueva plataforma 
										de comunicación innovadora entre el centro y las familias y , sin duda, un 
										importante valor añadido que mejora el vínculo diario entre la Escuela y los 
										padres.
								</div>

								<Parrafo parrafoTexto={ZonaPrivadaParrafo} />

								
					</div>


			</Box>  


		</>
	)
}
