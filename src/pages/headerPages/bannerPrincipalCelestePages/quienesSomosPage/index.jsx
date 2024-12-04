import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { Parrafo } from '../../../../Components/componentsConstantes/parrafo';
import { QuienesSomosImagenesCambiantes } from '../../../../Components/routesComponents/quienesSomosComponents/quienesSomosImagenesCambiantes';





export const QuienesSomosPage = ( props ) => {


      const QuienesSomosPageParrafo2 = `La idea de crear Lullaby surge de una familia residente en Las 
                                        Rozas de Madrid, con la finalidad de ofrecer un nuevo concepto de 
                                        escuelas infantiles (de 0 a 3 años), basadas en los siguientes 
                                        aspectos diferenciales:`;

      const QuienesSomosPageParrafo4 = `El centro está dirigido por dos hermanas con amplio bagaje profesional. 
                                        Ana Luz titulada universitaria en Magisterio de Infantil y Primaria, y Rosa 
                                        Luz, titulada universitaria en Periodismo y Comunicación y Grado Superior en 
                                        Educación Infantil. `;


      const QuienesSomosPageParrafo5 = `Ambas han desarrollado un Proyecto Educativo propio que integra el arte, 
                                        la música y el inglés, llamado Lullaby. La idea del nombre de la escuela, 
                                        (canción de cuna, en inglés) engloba los pilares fundamentales de este método, 
                                        así como los conceptos de transparencia, confianza, cariño y familiaridad.`;


      const QuienesSomosPageParrafo6 = `El lema de la escuela, “El arte de educar”, define cómo el Proyecto Lullaby 
                                        fomenta el desarrollo integral del niño y estimula sus habilidades motoras y 
                                        emocionales, a través de un método de enseñanza-aprendizaje donde el juego y 
                                        la creatividad son los ejes fundamentales.`;


  return (
    <>


        <Box  sx={{     
                        // backgroundColor: 'rgb(242, 186, 113)',
                        '@media (max-width: 480px)': {
                              width: `${props.anchuraQuienesSomosPage480px}rem`, 
                              marginTop: '1rem',
                              marginBottom: '0rem', 
                        },
                        '@media (min-width: 481px) and (max-width: 767px)': {
                              width: `${props.anchuraQuienesSomosPage481px_a_767px}rem`,
                              marginTop: '1.5rem',
                              marginBottom: '0rem',  
                        },
                        '@media (min-width: 768px) and (max-width: 959px)': {
                              width: `${props.anchuraQuienesSomosPage768px_a_959px}rem`, 
                              marginTop: '2rem',
                              marginBottom: '5rem',
                        },
                        '@media (min-width: 960px) and (max-width: 1199px)': {
                              width: `${props.anchuraQuienesSomosPage960px_a_1199px}rem`,
                              marginTop: '2.5rem',
                              marginBottom: '5rem', 
                        },
                        '@media (min-width: 1200px)': {
                              width: `${props.anchuraQuienesSomosPage1200px}rem`,
                              marginTop: '3rem',
                              marginBottom: '5rem', 
                        }  
        }}>


                  <div className='QuienesSomosPage-Parrafos-Container'>


                        <div className='QuienesSomosPage-Parrafo QuienesSomosPage-Parrafo1'>
                              La Escuela Infantil Lullaby, de primer ciclo (0-3 años), es un centro de 
                              nueva construcción diseñado desde cero para los niños y niñas residentes 
                              en todo el municipio de Las Rozas de Madrid. Cuenta con la autorización 
                              de la&nbsp; 
                              <a className='QuienesSomosPage-Enlace-Comunidad' 
                                 href="https://www.comunidad.madrid/" 
                                 target="_blank" rel="noopener noreferrer" 
                              >Comunidad de Madrid</a> (Código 28076216), por la que se certifica 
                              que se cumplen los máximos requisitos exigidos para apertura de 
                              nuevos centros escolares de 0 a 3 años, así como la normativa 
                              municipal del&nbsp;
                              <a className='QuienesSomosPage-Enlace-Ayuntamiento' 
                                 href="https://www.lasrozas.es/" 
                                 target="_blank" rel="noopener noreferrer" 
                              >Ayuntamiento de Las Rozas</a>
                              . Está situada en la zona 
                              de Monterrozas, calle Salónica 43, en un enclave privilegiado, 
                              con 1.200 metros cuadrados de terreno disponible y 300 metros 
                              cuadrados de edificación moderna y emblemática de alto nivel, en 
                              una sola planta, cuyo principal objetivo es la educación y 
                              bienestar de los niños.
                        </div>


                        <Parrafo parrafoTexto={QuienesSomosPageParrafo2} />


                        <div className='QuienesSomosPage-Parrafo3-Container'>

                              <div className='QuienesSomosPage-Parrafo QuienesSomosPage-parrafo3'>
                                    Escuelas infantiles con amplias y modernas instalaciones construidas y adaptadas 
                                    desde el inicio con un único y esencial punto de referencia: los niños.
                              </div>

                              <div className='QuienesSomosPage-Parrafo QuienesSomosPage-parrafo3'>
                                    En clave de naturaleza y tranquilidad, con buenas comunicaciones y cercano a 
                                    zonas destinadas a la educación primaria y secundaria.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              </div>

                              <div className='QuienesSomosPage-Parrafo QuienesSomosPage-parrafo3'>
                                    Método pedagógico libre, abierto y propio, desarrollado por maestras con 
                                    amplia experiencia, que permite una educación globalizada y un desarrollo 
                                    integral del niño. 
                              </div>

                              <div className='QuienesSomosPage-Parrafo QuienesSomosPage-parrafo3 QuienesSomosPage-parrafo3-final'>
                                    Máxima transparencia. 
                              </div>

                        </div>


                        <Parrafo parrafoTexto={QuienesSomosPageParrafo4} />


                        <Parrafo parrafoTexto={QuienesSomosPageParrafo5} />


                        <Parrafo parrafoTexto={QuienesSomosPageParrafo6} />


                        <div className='QuienesSomosPage-Imagenes-Container'>

                              <QuienesSomosImagenesCambiantes />

                        </div>


                  </div>


        </Box>


    </>
  )
}
