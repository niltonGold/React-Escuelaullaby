import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAaulas } from '../../../Components/componentsConstantes/volverAaulas';
import { DarwinTituloEncabezado } from '../../../Components/routesComponents/instalacionesComponents/aulas/aulasDarwinTituloEncabezado';
import { Parrafo } from '../../../Components/componentsConstantes/parrafo';
import { AulasDarwinImagenes } from '../../../Components/routesComponents/instalacionesComponents/aulas/aulasDarwinImagenes';





export const DarwinPage = ( props ) => {


    const parrafo1 = `Aula Darwin (Psicomotricidad).`;

    const parrafo2 = `Nuestros exploradores, aventureros y descubridores cuentan 
                      con un aula específica para desarrollar la psicomotricidad 
                      gruesa, con módulos, colchonetas, aros, y otros elementos 
                      adaptados para fomentar dicha actividad. Este espacio además 
                      se convierte en aula de audiovisuales y nuevas tecnologías.`


  return (
    <>


        <Box sx={{
                // backgroundColor: 'rgb(250, 235, 215)',
                '@media (max-width: 480px)': {
                    width: `${props.anchuraDarwinPage480px}rem`,
                    height: `${props.alturaDarwinPage480px}rem`,
                    marginTop: '1rem',
                },
                '@media (min-width: 481px) and (max-width: 767px)': {
                    width: `${props.anchuraDarwinPage481px_a_767px}rem`,
                    height: `${props.alturaDarwinPage481px_a_767px}rem`,
                    marginTop: '1.5rem',
                },
                '@media (min-width: 768px) and (max-width: 959px)': {
                    width: `${props.anchuraDarwinPage768px_a_959px}rem`,
                    height: `${props.alturaDarwinPage768px_a_959px}rem`,
                    marginTop: '2rem',
                },
                '@media (min-width: 960px) and (max-width: 1199px)': {
                    width: `${props.anchuraDarwinPage960px_a_1199px}rem`,
                    height: `${props.alturaDarwinPage960px_a_1199px}rem`,
                    marginTop: '2.5rem',
                },
                '@media (min-width: 1200px)': {
                    width: `${props.anchuraDarwinPage1200px}rem`,
                    height: `${props.alturaDarwinPage1200px}rem`,
                    marginTop: '3rem',
                }
        }}>


            <VolverAaulas />

            <DarwinTituloEncabezado />

            <div className='DarwinPage-Subcontainer'>

                    <div>
                            <Parrafo parrafoTexto={parrafo1} />

                            <Parrafo parrafoTexto={parrafo2} />
                    </div>

                    <AulasDarwinImagenes />
                    
            </div>


        </Box>


    </>
  )
}
