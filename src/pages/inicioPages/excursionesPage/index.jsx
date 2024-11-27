import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAinicio } from '../../../Components/componentsConstantes/volverAInicio';

export const ExcursionesPage = ( props ) => {

  return (
    <>
        <Box  sx={{     
                  // backgroundColor: 'rgb(242, 186, 113)',
              '@media (max-width: 480px)': {
                    width: `${props.anchuraExcursionesPage480px}rem`,
                    marginTop: '1rem',
                    marginBottom: '0rem', 
              },
              '@media (min-width: 481px) and (max-width: 767px)': {
                    width: `${props.anchuraExcursionesPage481px_a_767px}rem`,
                    marginTop: '1.5rem',
                    marginBottom: '0rem',  
              },
              '@media (min-width: 768px) and (max-width: 959px)': {
                    width: `${props.anchuraExcursionesPage768px_a_959px}rem`,
                    marginTop: '2rem',
                    marginBottom: '5rem', 
              },
              '@media (min-width: 960px) and (max-width: 1199px)': {
                    width: `${props.anchuraExcursionesPage960px_a_1199px}rem`,
                    marginTop: '2.5rem',
                    marginBottom: '5rem' 
              },
              '@media (min-width: 1200px)': {
                    width: `${props.anchuraExcursionesPage1200px}rem`,
                    marginTop: '3rem',
                    marginBottom: '5rem', 
              }  
        }}>



                  <VolverAinicio />


                  <div className='excursionesPage-subContainer'>

                              <div className='excursionesPage-excursionesLogo-container'>
                                    <div className='excursionesPage-excursionesLogo' />
                              </div>

                              <div className='excursionesPage-parrafo-container'>
                              
                                    <div className='excursionesPage-parragoLado'>

                                          <div className='excursionesPage-subParrafo'>
                                                <div className='excursionesPage-parrafoTitulo'>
                                                      ¡Vamos de excursión!
                                                </div>
                                                <div className='excursionesPage-parrafoTexto'>
                                                      La metodología del Proyecto Educativo Lullaby se basa en el contacto 
                                                      directo con la realidad y el entorno natural del niño para alcanzar 
                                                      un mayor conocimiento y asimilación de los conceptos del currículo. 
                                                      Por ello, realizamos salidas programadas del centro: al parque, al 
                                                      mercado, a la granja-escuela..
                                                </div>
                                          </div>

                                          <div className='excursionesPage-subParrafo'>
                                                <div className='excursionesPage-parrafoTitulo'>
                                                      Al parque en otoño
                                                </div>
                                                <div className='excursionesPage-parrafoTexto'>
                                                      Nos encanta ir al parque en cualquier época del año pero en otoño 
                                                      mucho más. Recogemos las hojas de los árboles que se han caído, 
                                                      nos las llevamos a la escuela y realizamos actividades educativas 
                                                      relacionadas con el proyecto del Otoño.
                                                </div>
                                          </div>

                                    </div>

                                                <div className='excursionesPage-lineaDivisora'/>
                                    
                                    <div className='excursionesPage-parragoLado'>

                                          <div className='excursionesPage-subParrafo'>
                                                <div className='excursionesPage-parrafoTitulo'>
                                                      Talleres educativos
                                                </div>
                                                <div className='excursionesPage-parrafoTexto'>
                                                      Y no sólo conocemos nuestro mundo saliendo de excursión. También nos 
                                                      visitan en la escuela profesionales y expertos en diversas áreas de 
                                                      conocimiento especializados en educación infantil. Así, en nuestras 
                                                      aulas se desarrollan talleres de temáticas relacionadas con el entorno 
                                                      del niño: cocina, ciencia, profesiones...
                                                </div>
                                          </div>

                                          <div className='excursionesPage-subParrafo'>
                                                <div className='excursionesPage-parrafoTitulo'>
                                                      Y en la granja-escuela...
                                                </div>
                                                <div className='excursionesPage-parrafoTexto'>
                                                      Es una de las salidas más esperadas del curso. Allí damos de 
                                                      comer a las gallinas, acariciamos a las ovejas y nos montamos en pony... Nos lo 
                                                      pasamos tan bien que al llegar a casa les pedimos a papá y a mamá si nos 
                                                      dejan tener un conejo, un caballo o un cerdito. ¡A ver si nos dejan!
                                                </div>
                                          </div>

                                    </div>

                              </div>

                              <div className='excursionesPage-imagen-container'>
                                    <div className='excursionesPage-imagen'/>
                              </div>

                  </div>


        </Box>
    </>
  )
}
