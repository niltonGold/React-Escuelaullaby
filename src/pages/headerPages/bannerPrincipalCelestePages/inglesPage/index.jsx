import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { Parrafo } from '../../../../Components/componentsConstantes/parrafo';
import { InglesImagenesCambiantes } from '../../../../Components/routesComponents/inglesComponents/inglesImagenesCambiantes';





export const InglesPage = (  ) => {


      const InglesPageParrafo1 = `Hoy en día, el inglés supone una parte vital de la educación de 
                                  nuestros hijos, ya que su formación ofrece mayores oportunidades 
                                  profesionales y personales. En Lullaby representa uno de los 
                                  pilares fundamentales de la escuela.`;

      const InglesPageParrafo2 = `Un profesor especializado y bilingüe se encargará de iniciarles 
                                  en el inglés, en una etapa de crecimiento propicia para el aprendizaje 
                                  de este segundo idioma. Cada semana se realizan entre una y dos sesiones 
                                  de inmersión en el inglés, donde únicamente se les habla en este idioma. `;

      const InglesPageParrafo3 = `Una de ellas contará con una metodología destinada a adquirir 
                                  conceptos básicos: colores, formas, y todos aquellos que conforman 
                                  expresiones habituales de la vida cotidiana de los niños (saludos y 
                                  despedidas, alimentos, etc.). En otra de las sesiones, el inglés estará 
                                  presente en las actividades semanales de la escuela: psicomotricidad, 
                                  música, arte.`;


  return (
    <>


            <Box  sx={{   
                        // backgroundColor: 'rgb(242, 186, 113)',
                        display: 'flex',
                        justifyContent: 'center',
                        '@media (max-width: 480px)': {
                                width: `20rem`,
                                marginTop: '1rem',
                                marginBottom: '0rem', 
                        },
                        '@media (min-width: 481px) and (max-width: 767px)': {
                                width: `30rem`,
                                marginTop: '1.5rem',
                                marginBottom: '0rem',  
                        },
                        '@media (min-width: 768px) and (max-width: 959px)': {
                                width: `48rem`, 
                                marginTop: '2rem',
                                marginBottom: '5rem', 
                        },
                        '@media (min-width: 960px) and (max-width: 1199px)': {
                                width: `58rem`,
                                marginTop: '2.5rem',
                                marginBottom: '5rem',
                        },
                        '@media (min-width: 1200px)': {
                                width: `73rem`,
                                marginTop: '3rem',
                                marginBottom: '5rem',  
                        }  
            }}>


                    <div className='InglesPage-Parrafos-Imagenes-Container'>
                        
                    
                        <div className='InglesPage-Parrafos-Container'>

                                    <Parrafo parrafoTexto={InglesPageParrafo1} />

                                    <Parrafo parrafoTexto={InglesPageParrafo2} />

                                    <Parrafo parrafoTexto={InglesPageParrafo3} />

                        </div>

                        <InglesImagenesCambiantes />
                        
                    </div>


            </Box>


    </>
  )
}
