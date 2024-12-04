import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAaulasYsiguiente } from '../../../Components/componentsConstantes/volverAaulasYsiguiente';
import { DescubridoresTituloEncabezado } from '../../../Components/routesComponents/instalacionesComponents/aulas/aulasDescubridoresTituloEncabezado';
import { Parrafo } from '../../../Components/componentsConstantes/parrafo';
import { AulasDescubridoresImagenes } from '../../../Components/routesComponents/instalacionesComponents/aulas/aulasDescubridoresImagenes';





export const DescubridoresPage = ( props ) => {


    const IrDarwin = 'instalacionesPage/darwin';

    const parrafo1 = `Aula de los Descubridores (2-3 años).`;

    const parrafo2 = `Con salida directa al patio, el amplio espacio que disponen 
                      los descubridores se organiza por áreas o rincones de trabajo: 
                      asamblea, juego simbólico, actividades, biblioteca. Dispone de 
                      baño adaptado a los niños con acceso directo desde el aula.`


  return (
    <>


        <Box sx={{
                // backgroundColor: 'yellow',
                '@media (max-width: 480px)': {
                    width: `${props.anchuraDescubridoresPage480px}rem`,
                    marginTop: '1rem',
                    marginBottom: '0rem',
                },
                '@media (min-width: 481px) and (max-width: 767px)': {
                    width: `${props.anchuraDescubridoresPage481px_a_767px}rem`,
                    marginTop: '1.5rem',
                    marginBottom: '0rem',
                },
                '@media (min-width: 768px) and (max-width: 959px)': {
                    width: `${props.anchuraDescubridoresPage768px_a_959px}rem`,
                    marginTop: '2rem',
                    marginBottom: '5rem',
                },
                '@media (min-width: 960px) and (max-width: 1199px)': {
                    width: `${props.anchuraDescubridoresPage960px_a_1199px}rem`,
                    marginTop: '2.5rem',
                    marginBottom: '5rem',
                },
                '@media (min-width: 1200px)': {
                    width: `${props.anchuraDescubridoresPage1200px}rem`,
                    marginTop: '3rem',
                    marginBottom: '5rem',
                }
        }}>


            <VolverAaulasYsiguiente enlace={IrDarwin} />
            
            <DescubridoresTituloEncabezado />
            
            <div className='DescubridoresPage-Subcontainer'>

                <div>
                    <Parrafo parrafoTexto={parrafo1} />

                    <Parrafo parrafoTexto={parrafo2} />
                </div>

                <AulasDescubridoresImagenes />

            </div>


        </Box>


    </>
  )
}
