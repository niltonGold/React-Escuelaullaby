import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAaulasYsiguiente } from '../../../Components/componentsConstantes/volverAaulasYsiguiente';
import { AulasExploradoresTituloEncabezado } from '../../../Components/routesComponents/instalacionesComponents/aulas/aulasExploradoresTituloEncabezado';
import { Parrafo } from '../../../Components/componentsConstantes/parrafo';
import { AulasExploradoresImagenes } from '../../../Components/routesComponents/instalacionesComponents/aulas/aulasExploradoresImagenes';





export const ExploradoresPage = ( props ) => {


    const IrAventureros = 'instalacionesPage/aventureros';

    const parrafo1 = `Aula de los Exploradores (0-1 año).`

    const parrafo2 = `Amplio espacio dedicado a los más pequeños de la escuela, distribuido 
                      en diferentes áreas: zona de aseo, juegos y actividades, descanso, lactancia y alimentación 
                      adaptada. Los exploradores cuentan con su propio patio de juegos al aire libre separado del 
                      resto de alumnos de la escuela. Además, los niños de 0-1 año contarán con dos responsables 
                      de aula.`
    

  return (
    <>


        <Box sx={{
                // backgroundColor: 'rgb(250, 235, 215)',
                '@media (max-width: 480px)': {
                    width: `${props.anchuraExploradoresPage480px}rem`,
                    height: `${props.alturaExploradoresPage480px}rem`,
                    marginTop: '1rem',
                },
                '@media (min-width: 481px) and (max-width: 767px)': {
                    width: `${props.anchuraExploradoresPage481px_a_767px}rem`,
                    height: `${props.alturaExploradoresPage481px_a_767px}rem`,
                    marginTop: '1.5rem',
                },
                '@media (min-width: 768px) and (max-width: 959px)': {
                    width: `${props.anchuraExploradoresPage768px_a_959px}rem`,
                    height: `${props.alturaExploradoresPage768px_a_959px}rem`,
                    marginTop: '2rem',
                },
                '@media (min-width: 960px) and (max-width: 1199px)': {
                    width: `${props.anchuraExploradoresPage960px_a_1199px}rem`,
                    height: `${props.alturaExploradoresPage960px_a_1199px}rem`,
                    marginTop: '2.5rem',
                },
                '@media (min-width: 1200px)': {
                    width: `${props.anchuraExploradoresPage1200px}rem`,
                    height: `${props.alturaExploradoresPage1200px}rem`,
                    marginTop: '3rem',
                }
        }}>


            <VolverAaulasYsiguiente enlace={IrAventureros} />
            

            <AulasExploradoresTituloEncabezado />


            <div className='ExploradoresPage-Subcontainer'>

                <div>
                        <Parrafo parrafoTexto={parrafo1} />

                        <Parrafo parrafoTexto={parrafo2} />
                </div>

                <AulasExploradoresImagenes />

            </div>


        </Box>


    </>
  )
}
