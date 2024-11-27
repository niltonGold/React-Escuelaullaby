import React from 'react';
import './styles.css';
import { Box } from '@mui/material';
import { VolverAinicio } from '../../../Components/componentsConstantes/volverAInicio';


export const DecalogoPage = ( props ) => {

  return (
    <>
        <Box  sx={{     
            // backgroundColor: 'rgb(242, 186, 113)',
              '@media (max-width: 480px)': {
                    width: `${props.anchuraDecalogoPage480px}rem`,
                    marginTop: '1rem',
                    marginBottom: '0rem',
              },
              '@media (min-width: 481px) and (max-width: 767px)': {
                    width: `${props.anchuraDecalogoPage481px_a_767px}rem`,
                    marginTop: '1.5rem',
                    marginBottom: '0rem',  
              },
              '@media (min-width: 768px) and (max-width: 959px)': {
                    width: `${props.anchuraDecalogoPage768px_a_959px}rem`,
                    marginTop: '2rem',
                    marginBottom: '5rem', 
              },
              '@media (min-width: 960px) and (max-width: 1199px)': {
                    width: `${props.anchuraDecalogoPage960px_a_1199px}rem`,
                    marginTop: '2.5rem',
                    marginBottom: '5rem', 
              },
              '@media (min-width: 1200px)': {
                    width: `${props.anchuraDecalogoPage1200px}rem`, 
                    marginTop: '3rem',
                    marginBottom: '5rem',
              }  
        }}>
                  <VolverAinicio />


                  <div className='decalogoPage-subContainer'>
                        

                        <div className='decalogoPage-decalogoLogo-container'>
                                    <div className='decalogoPage-decalogoLogo' />
                        </div>
                        
                        <div className='decalogoPage-parrafo decalogoPage-parrafo_1'>
                              Nunca tendremos en las aulas más niños del máximo permitido por la 
                              normativa de la Comunidad de Madrid (8 alumnos en el aula de 0-1 año; 
                              14 alumnos en el aula de 1-2 años y 20 alumnos en el aula de 2-3 años). 
                              Somos una de las escuelas de la Comunidad de Madrid con mayor superficie 
                              disponible por niño, tanto interiores (aulas, salón de usos múltiples, comedor) 
                              como exteriores (patios y jardines). Lo que significa que los 42 niños de la 
                              Escuela Infantil Lullaby disfrutan de <span className='decalogo-letraResaltada'>ESPACIOS ÚNICOS</span> y de los más exclusivos 
                              de Madrid.
                        </div>

                        <div className='decalogoPage-parrafo decalogoPage-parrafo_2'>
                              Los niños más pequeños (0-1 año), nuestros <span className='decalogo-letraResaltada'>EXPLORADORES</span>, siempre 
                              dispondrán de su <span className='decalogo-letraResaltada'>PROPIO ESPACIO</span>, separados de los niños mayores, 
                              tanto en el aula como en el patio y jardín.
                        </div>

                        <div className='decalogoPage-parrafo decalogoPage-parrafo_3'>
                              Nunca se trabajará con “fichas”. El papel en Lullaby 
                              será destinado únicamente para la <span className='decalogo-letraResaltada'>EXPRESIÓN EMOCIONAL y ARTÍSTICA</span> 
                              de los niños (huellas de las manos, proceso de evolución de la 
                              psicomotricidad fina...).
                        </div>

                        <div className='decalogoPage-parrafo decalogoPage-parrafo_4'>
                              En Lullaby se trabaja por <span className='decalogo-letraResaltada'>PROYECTOS</span>. Esto significa que la enseñanza-aprendizaje
                              es a través del <span className='decalogo-letraResaltada'>CONTACTO DIRECTO CON LA REALIDAD</span>. En nuestras aulas nunca
                              utilizaremos representaciones del mundo (dibujos, fotografías, pantallas
                              de tablets, ordenadores, etc.). 
                        </div>

                        <div className='decalogoPage-parrafo decalogoPage-parrafo_5'>
                              La Escuela Infantil Lullaby es un <span className='decalogo-letraResaltada'>CENTRO ECOLÓGICO</span>, con Calificación 
                              Energética A, construido con la más minuciosa concienciación 
                              medioambiental y siempre velaremos por mantenerlo: suelo radiante 
                              con energía geotérmica, materiales de construcción de la más alta 
                              calidad, filtración de aire equivalente al de hospitales y áreas 
                              quirúrgicas, sistema anti-incendios conectado a central de alarma,
                              equipamientos con certificados europeos que verifican el respeto por 
                              el Medio Ambiente y específicamente fabricados para su uso en escuelas
                               infantiles, orientación de la edificación cuidadosamente estudiada 
                               para obtener una de las mejores iluminaciones naturales...
                        </div>

                        <div className='decalogoPage-parrafo decalogoPage-parrafo_6'>
                              Siempre primará el <span className='decalogo-letraResaltada'>CARIÑO</span>, la <span className='decalogo-letraResaltada'>CONFIANZA</span> y la 
                              <span className='decalogo-letraResaltada'>SEGURIDAD EMOCIONAL</span>
                              en la relación tutor/a-alumno/a, respetando la <span className='decalogo-letraResaltada'>INVIDIDUALIDAD</span>
                              de cada niño/a.
                        </div>
                        
                        <div className='decalogoPage-parrafo decalogoPage-parrafo_7'>
                              Las <span className='decalogo-letraResaltada'>FAMILIAS</span> son parte esencial en la Comunidad Educativa
                              de Lullaby. Su voz SÍ que cuenta, a través de su
                              participación en la actividad diaria y su 
                              colaboración en todos los eventos organizados 
                              por el centro.
                        </div>

                        <div className='decalogoPage-parrafo decalogoPage-parrafo_8'>
                              <span className='decalogo-letraResaltada'>El PROYECTO EDUCATIVO LULLABY</span> se basa en tres pilares
                              esenciales: la Música, el Arte y el Inglés. Cada uno 
                              de ellos es una disciplina que se enseña de manera 
                              <span className='decalogo-letraResaltada'>TRANSVERSAL</span> 
                              y <span className='decalogo-letraResaltada'>GLOBALIZADA</span> dentro de la programación 
                              anual.
                        </div>

                        <div className='decalogoPage-parrafo decalogoPage-parrafo_9'>
                              La Escuela Infantil Lullaby es un lugar de 
                              experimentación, de descubrimiento, de 
                              socialización, de <span className='decalogo-letraResaltada'>CRECIMIENTO</span> y 
                              de <span className='decalogo-letraResaltada'>VIDA</span>.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>

                        <div className='decalogoPage-parrafo decalogoPage-parrafo_10'>
                              Nuestro principal objetivo es ayudar y 
                              acompañar a las familias en la educación de sus 
                              hijos. Y, por encima de todo, nuestra meta es 
                              que sean <span className='decalogo-letraResaltada'>FELICES</span>.
                        </div>


                  </div>


        </Box>
    </>
  )
}
