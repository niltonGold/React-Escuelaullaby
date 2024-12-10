import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { Formulario } from '../../../../Components/headerComponents/ContactoComponents/formulario';
import Mapa from '../../../../Components/headerComponents/ContactoComponents/mapa';
import { ParrafoCentrado } from '../../../../Components/componentsConstantes/parrafoCentrado';





export const ContactoPage = ( props ) => {

	const ContactoParrafo1 = `La escuela permanece abierta de 7:00 a 19:00 horas, siendo su jornada escolar de 9:00 
								a 17:00 horas. Lullaby ofrece diferentes posibilidades horarias. Pregúntanos y os 
								informaremos sobre las que mejor se adaptan a vuestras necesidades laborales y personales.`


	return (
		<>


			<Box  sx={{     
						// backgroundColor: `rgb(250, 235, 215)`,
						'@media (max-width: 480px)': {
								width: `${props.anchuraContactoPage480px}rem`,
								height: `${props.alturaContactoPage480px}rem`,
								marginTop: '1rem',
						},
						'@media (min-width: 481px) and (max-width: 767px)': {
								width: `${props.anchuraContactoPage481px_a_767px}rem`,
								height: `${props.alturaContactoPage481px_a_767px}rem`,
								marginTop: '1.5rem',
						},
						'@media (min-width: 768px) and (max-width: 959px)': {
								width: `${props.anchuraContactoPage768px_a_959px}rem`,
								height: `${props.alturaContactoPage768px_a_959px}rem`,
								marginTop: '2rem',
						},
						'@media (min-width: 960px) and (max-width: 1199px)': {
								width: `${props.anchuraContactoPage960px_a_1199px}rem`,
								height: `${props.alturaContactoPage960px_a_1199px}rem`,
								marginTop: '2.5rem',
						},
						'@media (min-width: 1200px)': {
								width: `${props.anchuraContactoPage1200px}rem`,
								height: `${props.alturaContactoPage1200px}rem`,
								marginTop: '3rem',
						}  
			}}>


					<div className='Contacto-Big-Container'>


							<div className='Contacto-SubContainer-1'>
									
									<div className='Contacto-Titulo'>
											Escuela Infantil Lullaby
									</div>

									<ParrafoCentrado ParrafoCentradoTexto={ContactoParrafo1} />

									<div className='Contacto-descripcion-dato-container'>
											<div className='Contacto-descripcion'>Teléfono:</div>
											<div className='Contacto-numero-de-telefono'>681 285 932</div>
									</div>

									<div className='Contacto-descripcion-dato-container'>
											<div className='Contacto-descripcion'>Dirección:</div>
											<a 
											className='Contacto-dato' 
											href="https://maps.app.goo.gl/EcS8YjMz5svUHAn3A" 
											target="_blank" 
											rel="noopener noreferrer"
											>
													C/ Salónica, 43. 28232 Las Rozas de Madrid (Madrid)
											</a>
									</div>

									<div className='Contacto-descripcion-dato-container'>
											<div className='Contacto-descripcion'>Email:</div>
											<a 
											className='Contacto-dato' 
											href="mailto:info@escuelalullaby.es?subject=Consulta desde la web&body=Hola, me gustaría obtener más información sobre..."
											>
													info@escuelalullaby.es
											</a>
									</div>

							</div>

							<div className='Contacto-SubContainer-2'>
									
									<Mapa />

									<Formulario />
									
							</div>


					</div>


			</Box>


		</> 
	)
}
