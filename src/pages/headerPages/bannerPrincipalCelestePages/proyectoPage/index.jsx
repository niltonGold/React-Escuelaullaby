import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { Parrafo } from '../../../../Components/componentsConstantes/parrafo';
import { ArteComponentLogoInfo } from '../../../../Components/routesComponents/proyectoComponents/arteComponentLogo+info';
import { MusicaComponentLogoInfo } from '../../../../Components/routesComponents/proyectoComponents/musicaComponentLogo+info';
import { PsicomotricidadComponentLogoInfo } from '../../../../Components/routesComponents/proyectoComponents/psicomotricidadLogo+info';
import { JuegoComponentLogoInfo } from '../../../../Components/routesComponents/proyectoComponents/juegoComponentLogo+info';
import { YogaComponentLogoInfo } from '../../../../Components/routesComponents/proyectoComponents/yogaComponentLogo+info';
import { NaturalezaComponentLogoInfo } from '../../../../Components/routesComponents/proyectoComponents/naturalezaComponentLogo+info';


export const ProyectoPage = ( props ) => {

  const ProyectoPageTexto1 = `El PROYECTO EDUCATIVO Lullaby plantea un sistema 
                              pedagógico moderno y de calidad diseñado y creado 
                              específicamente para la escuela por la dirección y 
                              personal docente del mismo, basado en el aprendizaje 
                              por proyectos.`

  const ProyectoPageTexto2 = `Tiene sus cimientos en tres pilares fundamentales: el arte, 
                              la música y el inglés. Cada uno de ellos es una disciplina 
                              que se enseña de manera transversal y globalizada dentro 
                              de la programación anual. `

  const ProyectoPageTexto3 = `La psicomotricidad infantil y el yoga representan 
                              dos aspectos relevantes dentro del proyecto para un 
                              óptimo desarrollo del equilibrio del cuerpo y la mente. 
                              El aprendizaje a través del juego se convierte en la 
                              metodología básica y esencial para su desarrollo.`

  return (
    <Box  sx={{     backgroundColor: 'rgb(242, 186, 113)',
                    '@media (max-width: 480px)': {
                              width: `${props.anchuraProyectoPage480px}rem`, 
                              marginTop: '1rem',
                              marginBottom: '0rem', 
                    },
                    '@media (min-width: 481px) and (max-width: 767px)': {
                              width: `${props.anchuraProyectoPage481px_a_767px}rem`,
                              marginTop: '1.5rem',
                              marginBottom: '0rem',   
                    },
                    '@media (min-width: 768px) and (max-width: 959px)': {
                              width: `${props.anchuraProyectoPage768px_a_959px}rem`,
                              marginTop: '2rem',
                              marginBottom: '5rem', 
                    },
                    '@media (min-width: 960px) and (max-width: 1199px)': {
                              width: `${props.anchuraProyectoPage960px_a_1199px}rem`,
                              marginTop: '2.5rem',
                              marginBottom: '5rem',  
                    },
                    '@media (min-width: 1200px)': {
                              width: `${props.anchuraProyectoPage1200px}rem`, 
                              marginTop: '3rem',
                              marginBottom: '5rem', 
                    }  
    }}>


              <div  className='ProyectoPage-subContainer'>

                    <div className='ProyectoPage-titulo_parrafo-container'>
          
                          <Parrafo parrafoTexto={ProyectoPageTexto1} />

                          <Parrafo parrafoTexto={ProyectoPageTexto2} />

                          <Parrafo parrafoTexto={ProyectoPageTexto3} />

                    </div>

                    <div className='ProyectoPage-Enlaces-Big-Container'>
                          
                          <div className='ProyectoPage-Enlaces-Sub-Container'>

                                  <ArteComponentLogoInfo />
                                  
                                  <MusicaComponentLogoInfo />

                          </div>

                          <div className='ProyectoPage-Enlaces-Sub-Container'>
                              
                                  <PsicomotricidadComponentLogoInfo />

                                  <JuegoComponentLogoInfo />

                          </div>

                          <div className='ProyectoPage-Enlaces-Sub-Container'>

                                  <YogaComponentLogoInfo />

                                  <NaturalezaComponentLogoInfo />

                          </div>

                    </div>
              </div>



    </Box>
  )
}
