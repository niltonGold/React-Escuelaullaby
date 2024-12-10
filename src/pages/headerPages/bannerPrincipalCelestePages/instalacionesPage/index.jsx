import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { InstalacionesParrafo } from '../../../../Components/routesComponents/instalacionesComponents/instalacionesPrincipalComponents/instalacionesParrafos';
import { InstalacionesImagenesCambiantes } from '../../../../Components/routesComponents/instalacionesComponents/instalacionesPrincipalComponents/instalacionesImagnesCambiantes';
import { InstalacionesEnlacesRedondos } from '../../../../Components/routesComponents/instalacionesComponents/instalacionesPrincipalComponents/instalacionesEnlacesRedondos';

export const InstalacionesPage = ( props ) => {

  return (

	<>
		<Box  sx={{
						// backgroundColor: 'rgb(250, 235, 215)',
						'@media (max-width: 480px)': {
							  width: `${props.anchuraInstalacionesPage480px}rem`,
							  height: `${props.alturaInstalacionesPage480px}rem`,
							  marginTop: '1rem',
						},
						'@media (min-width: 481px) and (max-width: 767px)': {
							  width: `${props.anchuraInstalacionesPage481px_a_767px}rem`,
							  height: `${props.alturaInstalacionesPage481px_a_767px}rem`,
							  marginTop: '1.5rem',
						},
						'@media (min-width: 768px) and (max-width: 959px)': {
							  width: `${props.anchuraInstalacionesPage768px_a_959px}rem`,
							  height: `${props.alturaInstalacionesPage768px_a_959px}rem`,
							  marginTop: '2rem',
						},
						'@media (min-width: 960px) and (max-width: 1199px)': {
							  width: `${props.anchuraInstalacionesPage960px_a_1199px}rem`,
							  height: `${props.alturaInstalacionesPage960px_a_1199px}rem`,
							  marginTop: '2.5rem',
						},
						'@media (min-width: 1200px)': {
							  width: `${props.anchuraInstalacionesPage1200px}rem`,
							  height: `${props.alturaInstalacionesPage1200px}rem`,
							  marginTop: '3rem',
						}
		}}>


						<div className='InstalacionesPage-PrincipalContainer'>

							  <InstalacionesParrafo/>

							  <InstalacionesImagenesCambiantes />

							  <InstalacionesEnlacesRedondos />

						</div>


		</Box>
</>
  )
}
