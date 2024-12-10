import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAaulasYsiguiente } from '../../../Components/componentsConstantes/volverAaulasYsiguiente';
import { AulasAventurerosTituloEncabezado } from '../../../Components/routesComponents/instalacionesComponents/aulas/aulasAventurerosTituloEncabezado';
import { Parrafo } from '../../../Components/componentsConstantes/parrafo';
import { AulasAventurerosImagenes } from '../../../Components/routesComponents/instalacionesComponents/aulas/aulasAventurerosImagenes';





export const AventurerosPage = ( props ) => {


    const IrDescubridores = 'instalacionesPage/descubridores';

    const parrafo1 = `Aula de los Aventureros (1-2 años).`;

    const parrafo2 = `Espaciosa y muy luminosa con salida directa al patio y aseo adaptado 
                      a los niños aventureros con acceso desde el aula. Se distribuye por 
                      rincones: juego simbólico, actividades, asamblea, biblioteca.`


  return (
    <>


        <Box sx={{
                // backgroundColor: 'rgb(250, 235, 215)',
                '@media (max-width: 480px)': {
                    width: `${props.anchuraAventurerosPage480px}rem`,
                    height: `${props.alturaAventurerosPage480px}rem`,
                    marginTop: '1rem',
                },
                '@media (min-width: 481px) and (max-width: 767px)': {
                    width: `${props.anchuraAventurerosPage481px_a_767px}rem`,
                    height: `${props.alturaAventurerosPage481px_a_767px}rem`,
                    marginTop: '1.5rem',
                },
                '@media (min-width: 768px) and (max-width: 959px)': {
                    width: `${props.anchuraAventurerosPage768px_a_959px}rem`,
                    height: `${props.alturaAventurerosPage768px_a_959px}rem`,
                    marginTop: '2rem',
                },
                '@media (min-width: 960px) and (max-width: 1199px)': {
                    width: `${props.anchuraAventurerosPage960px_a_1199px}rem`,
                    height: `${props.alturaAventurerosPage960px_a_1199px}rem`,
                    marginTop: '2.5rem',
                },
                '@media (min-width: 1200px)': {
                    width: `${props.anchuraAventurerosPage1200px}rem`,
                    height: `${props.alturaAventurerosPage1200px}rem`,
                    marginTop: '3rem',
                }
        }}>


            <VolverAaulasYsiguiente enlace={IrDescubridores} />
            

            <AulasAventurerosTituloEncabezado />


            <div className='AventurerosPage-Subcontainer'>

                    <div>
                        <Parrafo parrafoTexto={parrafo1} />

                        <Parrafo parrafoTexto={parrafo2} />
                    </div>

                    <AulasAventurerosImagenes />

            </div>

            
        </Box>


    </>
  )
}
