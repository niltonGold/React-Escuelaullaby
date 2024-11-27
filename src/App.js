import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './Components/PrincipalComponents/Header';
import { Footer } from './Components/PrincipalComponents/Footer';


import { EscuelaDePadresPage } from './pages/headerPages/enlacesRodondosPages/escuelaDePadresPage';
import { ZonaPrivadaPage } from './pages/headerPages/enlacesRodondosPages/zonaPrivadaPage';
import { ContactoPage } from './pages/headerPages/enlacesRodondosPages/contactoPage';


import { InicioPage } from './pages/headerPages/bannerPrincipalCelestePages/inicioPage';
import { QuienesSomosPage } from './pages/headerPages/bannerPrincipalCelestePages/quienesSomosPage';
import { InstalacionesPage } from './pages/headerPages/bannerPrincipalCelestePages/instalacionesPage';
import { ProyectoPage } from './pages/headerPages/bannerPrincipalCelestePages/proyectoPage';
import { InglesPage } from './pages/headerPages/bannerPrincipalCelestePages/inglesPage';
import { EquipoPage } from './pages/headerPages/bannerPrincipalCelestePages/equipoPage';


import { FotosPage } from './pages/inicioPages/fotosPage';
import { PediatraPage } from './pages/inicioPages/pediatraPage';
import { NoticiasPage } from './pages/inicioPages/noticiasPage';
import { DecalogoPage } from './pages/inicioPages/decalogoPage';
import { NutricionistaPage } from './pages/inicioPages/nutricionistaPage';
import { ExcursionesPage } from './pages/inicioPages/excursionesPage';


import { AulasEnlacePrincipalPage } from './pages/instalacionesPages/aulas';
import { HallYdespacho } from './pages/instalacionesPages/hallYdespacho';
import { Comedor } from './pages/instalacionesPages/comedor';
import { CocinaYlavanderia } from './pages/instalacionesPages/cocinaYlavanderia';
import { Patios } from './pages/instalacionesPages/patios';
import { HuertoEinvernadero } from './pages/instalacionesPages/huertoEinvernadero';
import { SalonDeActos } from './pages/instalacionesPages/salonDeActos';






import { ArtePage } from './pages/proyectoPages/artePage';
import { MusicaPage } from './pages/proyectoPages/musicaPage';
import { PsicomotricidadPage } from './pages/proyectoPages/psicomotricidadPage';
import { JuegoPage } from './pages/proyectoPages/juegoPage';
import { YogaPage } from './pages/proyectoPages/yogaPage';
import { NaturalezaPage } from './pages/proyectoPages/naturalezaPage';
import { ExploradoresPage } from './pages/aulasPages/exploradoresPage';
import { AventurerosPage } from './pages/aulasPages/aventurerosPage';
import { DescubridoresPage } from './pages/aulasPages/descubridoresPage';
import { DarwinPage } from './pages/aulasPages/darwinPage';

function App() {


      // Anchuras del header donde estan contenidos los enlaces redondos(escuela de padres, zona privada, contacto)
      const Anchura_1_480px = 17;
      const Anchura_1_481px_a_767px = 26;
      const Anchura_1_768px_a_959px = 43;
      const Anchura_1_960px_a_1199px = 52;
      const Anchura_1_1200px = 65;



      // Anchuras de los componentes del inicioPage y del footer
      const Anchura_2_480px = 18;
      const Anchura_2_481px_a_767px = 27;
      const Anchura_2_768px_a_959px = 44.5;
      const Anchura_2_960px_a_1199px = 53.5;
      const Anchura_2_1200px = 67;



      // Anchuras de las paginas a las que apuntan, Escuela de padres, zona privada y contacto y 
      // (aulas, hall y despacho, comedor, cocina y lavanderia, patios, huerto e invernadero, salon de actos)
      const Anchura_3_480px = 16;
      const Anchura_3_481px_a_767px = 24;
      const Anchura_3_768px_a_959px = 40;
      const Anchura_3_960px_a_1199px = 48;
      const Anchura_3_1200px = 60;



      // Anchuras de las paginas a las que lleva los enlaces del banner celese del Header, quienes somos, instalaciones, proyecto, ingles, y equipo
      const Anchura_4_480px = 17;
      const Anchura_4_481px_a_767px = 26;
      const Anchura_4_768px_a_959px = 43;
      const Anchura_4_960px_a_1199px = 52;
      const Anchura_4_1200px = 65;



      // Anchuras de las paginas a las que llevan los enlaces de fotos, pediatra, noticias, decalogo, nutricionistas, excursiones
      const Anchura_5_480px = 16.5;
      const Anchura_5_481px_a_767px = 25.5;
      const Anchura_5_768px_a_959px = 42.5;
      const Anchura_5_960px_a_1199px = 51.5;
      const Anchura_5_1200px = 64.5;


      
      // Anchuras de las paginas a las que llevan los enlaces de aulas, hall y despacho, comedor, cocina y lavanderia, patios, huerto e invernadero salon de actos
      // Anchuras de las paginas a las que llevan los enlaces de exploradore, avetureros, descubridores, darwin
      // Anchuras de las paginas a las que llevan los enlaces de arte, música, psicomotricidad, juego, yoga, naturaleza
      const Anchura_6_480px = 16.5;
      const Anchura_6_481px_a_767px = 25;
      const Anchura_6_768px_a_959px = 41;
      const Anchura_6_960px_a_1199px = 49;
      const Anchura_6_1200px = 61;


  return (
    

    <Router>


          <div className="App-container">

                  <div className='head'>
                  <Header anchuraHeader480px={ Anchura_1_480px }
                          anchuraHeader481px_a_767px={ Anchura_1_481px_a_767px }
                          anchuraHeader768px_a_959px={ Anchura_1_768px_a_959px }
                          anchuraHeader960px_a_1199px={ Anchura_1_960px_a_1199px }
                          anchuraHeader1200px={ Anchura_1_1200px }
                  />
                  </div>

                  <main className='main-container'>
                  
                        <Routes>
                  
                              {/* Enlace raiz */}
                              <Route path='/' element={ <InicioPage  anchuraInicio480px={ Anchura_2_480px }
                                                                  anchuraInicio481px_a_767px={ Anchura_2_481px_a_767px }
                                                                  anchuraInicio768px_a_959px={ Anchura_2_768px_a_959px }
                                                                  anchuraInicio960px_a_1199px={ Anchura_2_960px_a_1199px }
                                                                  anchuraInicio1200px={ Anchura_2_1200px } 
                                                            />} />



                              {/* Enlaces del Header, escuelaDePadres, ZonaPrivada, Contacto */}
                              <Route path='/escuelaDePadresPage' element={ <EscuelaDePadresPage  anchuraEscuelaDePadresPage480px={ Anchura_3_480px }
                                                                                                anchuraEscuelaDePadresPage481px_a_767px={ Anchura_3_481px_a_767px }
                                                                                                anchuraEscuelaDePadresPage768px_a_959px={ Anchura_3_768px_a_959px }
                                                                                                anchuraEscuelaDePadresPage960px_a_1199px={ Anchura_3_960px_a_1199px }
                                                                                                anchuraEscuelaDePadresPage1200px={ Anchura_3_1200px }
                                                                              /> } />
                              <Route path='/zonaPrivadaPage' element={ <ZonaPrivadaPage  anchuraZonaPrivadaPage480px={ Anchura_3_480px }
                                                                                          anchuraZonaPrivadaPage481px_a_767px={ Anchura_3_481px_a_767px }
                                                                                          anchuraZonaPrivadaPage768px_a_959px={ Anchura_3_768px_a_959px }
                                                                                          anchuraZonaPrivadaPage960px_a_1199px={ Anchura_3_960px_a_1199px }
                                                                                          anchuraZonaPrivadaPage1200px={ Anchura_3_1200px }
                                                                              /> } />
                              <Route path='/contactoPage' element={ <ContactoPage  anchuraContactoPage480px={ Anchura_3_480px }
                                                                                    anchuraContactoPage481px_a_767px={ Anchura_3_481px_a_767px }
                                                                                    anchuraContactoPage768px_a_959px={ Anchura_3_768px_a_959px }
                                                                                    anchuraContactoPage960px_a_1199px={ Anchura_3_960px_a_1199px }
                                                                                    anchuraContactoPage1200px={ Anchura_3_1200px }
                                                                              /> } />
                  
      

                              {/* Enlaces del Header, inicio, quienesSomos, Instalaciones, Proyecto, Ingles, Equipo */}
                              <Route path='/inicioPage' element={ <InicioPage anchuraInicio480px={ Anchura_2_480px }
                                                                              anchuraInicio481px_a_767px={ Anchura_2_481px_a_767px }
                                                                              anchuraInicio768px_a_959px={ Anchura_2_768px_a_959px }
                                                                              anchuraInicio960px_a_1199px={ Anchura_2_960px_a_1199px }
                                                                              anchuraInicio1200px={ Anchura_2_1200px } 
                                                                  />} />
                              <Route path='/quienesSomosPage' element={ <QuienesSomosPage anchuraQuienesSomosPage480px={ Anchura_4_480px }
                                                                                          anchuraQuienesSomosPage481px_a_767px={ Anchura_4_481px_a_767px }
                                                                                          anchuraQuienesSomosPage768px_a_959px={ Anchura_4_768px_a_959px }
                                                                                          anchuraQuienesSomosPage960px_a_1199px={ Anchura_4_960px_a_1199px }
                                                                                          anchuraQuienesSomosPage1200px={ Anchura_4_1200px } 
                                                                              />} />
                              <Route path='/instalacionesPage' element={ <InstalacionesPage anchuraInstalacionesPage480px={ Anchura_4_480px }
                                                                                          anchuraInstalacionesPage481px_a_767px={ Anchura_4_481px_a_767px }
                                                                                          anchuraInstalacionesPage768px_a_959px={ Anchura_4_768px_a_959px }
                                                                                          anchuraInstalacionesPage960px_a_1199px={ Anchura_4_960px_a_1199px }
                                                                                          anchuraInstalacionesPage1200px={ Anchura_4_1200px } 
                                                                              />} />
                              <Route path='/proyectoPage' element={ <ProyectoPage anchuraProyectoPage480px={ Anchura_4_480px }
                                                                              anchuraProyectoPage481px_a_767px={ Anchura_4_481px_a_767px }
                                                                              anchuraProyectoPage768px_a_959px={ Anchura_4_768px_a_959px }
                                                                              anchuraProyectoPage960px_a_1199px={ Anchura_4_960px_a_1199px }
                                                                              anchuraProyectoPage1200px={ Anchura_4_1200px } 
                                                                              />} />
                              <Route path='/inglesPage' element={ <InglesPage anchuraInglesPage480px={ Anchura_4_480px }
                                                                              anchuraInglesPage481px_a_767px={ Anchura_4_481px_a_767px }
                                                                              anchuraInglesPage768px_a_959px={ Anchura_4_768px_a_959px }
                                                                              anchuraInglesPage960px_a_1199px={ Anchura_4_960px_a_1199px }
                                                                              anchuraInglesPage1200px={ Anchura_4_1200px } 
                                                                              />} />
                              <Route path='/equipoPage' element={ <EquipoPage anchuraEquipoPage480px={ Anchura_4_480px }
                                                                              anchuraEquipoPage481px_a_767px={ Anchura_4_481px_a_767px }
                                                                              anchuraEquipoPage768px_a_959px={ Anchura_4_768px_a_959px }
                                                                              anchuraEquipoPage960px_a_1199px={ Anchura_4_960px_a_1199px }
                                                                              anchuraEquipoPage1200px={ Anchura_4_1200px } 
                                                                              />} />



                              {/* Enlaces del Header, inicio, quienesSomos, Instalaciones, Proyecto, Ingles, Equipo */}
                              <Route path='/fotos' element={ <FotosPage anchuraFotosPage480px={ Anchura_5_480px }
                                                                        anchuraFotosPage481px_a_767px={ Anchura_5_481px_a_767px }
                                                                        anchuraFotosPage768px_a_959px={ Anchura_5_768px_a_959px }
                                                                        anchuraFotosPage960px_a_1199px={ Anchura_5_960px_a_1199px }
                                                                        anchuraFotosPage1200px={ Anchura_5_1200px } 
                                                                              />} />
                              <Route path='/pediatra' element={ <PediatraPage anchuraPediatraPage480px={ Anchura_5_480px }
                                                                              anchuraPediatraPage481px_a_767px={ Anchura_5_481px_a_767px }
                                                                              anchuraPediatraPage768px_a_959px={ Anchura_5_768px_a_959px }
                                                                              anchuraPediatraPage960px_a_1199px={ Anchura_5_960px_a_1199px }
                                                                              anchuraPediatraPage1200px={ Anchura_5_1200px } 
                                                                              />} />
                              <Route path='/noticias' element={ <NoticiasPage anchuraNoticiasPage480px={ Anchura_5_480px }
                                                                              anchuraNoticiasPage481px_a_767px={ Anchura_5_481px_a_767px }
                                                                              anchuraNoticiasPage768px_a_959px={ Anchura_5_768px_a_959px }
                                                                              anchuraNoticiasPage960px_a_1199px={ Anchura_5_960px_a_1199px }
                                                                              anchuraNoticiasPage1200px={ Anchura_5_1200px } 
                                                                              />} />
                              <Route path='/decalogo' element={ <DecalogoPage anchuraDecalogoPage480px={ Anchura_5_480px }
                                                                              anchuraDecalogoPage481px_a_767px={ Anchura_5_481px_a_767px }
                                                                              anchuraDecalogoPage768px_a_959px={ Anchura_5_768px_a_959px }
                                                                              anchuraDecalogoPage960px_a_1199px={ Anchura_5_960px_a_1199px }
                                                                              anchuraDecalogoPage1200px={ Anchura_5_1200px } 
                                                                              />} />
                              <Route path='/nutricionista' element={ <NutricionistaPage anchuraNutricionistaPage480px={ Anchura_5_480px }
                                                                                    anchuraNutricionistaPage481px_a_767px={ Anchura_5_481px_a_767px }
                                                                                    anchuraNutricionistaPage768px_a_959px={ Anchura_5_768px_a_959px }
                                                                                    anchuraNutricionistaPage960px_a_1199px={ Anchura_5_960px_a_1199px }
                                                                                    anchuraNutricionistaPage1200px={ Anchura_5_1200px } 
                                                                              />} />
                              <Route path='/excursiones' element={ <ExcursionesPage anchuraExcursionesPage480px={ Anchura_5_480px }
                                                                                    anchuraExcursionesPage481px_a_767px={ Anchura_5_481px_a_767px }
                                                                                    anchuraExcursionesPage768px_a_959px={ Anchura_5_768px_a_959px }
                                                                                    anchuraExcursionesPage960px_a_1199px={ Anchura_5_960px_a_1199px }
                                                                                    anchuraExcursionesPage1200px={ Anchura_5_1200px } 
                                                                              />} />
                              


                              {/* Enlaces que estan en la pagina de instalaciones (Aulas, Hall y Despacho, Comedor, Cocina y Lavanderia, Patios, Huerto e Invernadero, Salón de Actos)  */}
                              <Route path='/instalacionesPage/aulas' element={ <AulasEnlacePrincipalPage anchuraAulasEnlacePrincipalPage480px={ Anchura_6_480px }
                                                                                       anchuraAulasEnlacePrincipalPage481px_a_767px={ Anchura_6_481px_a_767px }
                                                                                       anchuraAulasEnlacePrincipalPage768px_a_959px={ Anchura_6_768px_a_959px }
                                                                                       anchuraAulasEnlacePrincipalPage960px_a_1199px={ Anchura_6_960px_a_1199px }
                                                                                       anchuraAulasEnlacePrincipalPage1200px={ Anchura_6_1200px } 
                                                                        /> } />
                              <Route path='/instalacionesPage/hallYdespacho' element={ <HallYdespacho anchuraHallYdespacho480px={ Anchura_6_480px }
                                                                                    anchuraHallYdespacho481px_a_767px={ Anchura_6_481px_a_767px }
                                                                                    anchuraHallYdespacho768px_a_959px={ Anchura_6_768px_a_959px }
                                                                                    anchuraHallYdespacho960px_a_1199px={ Anchura_6_960px_a_1199px }
                                                                                    anchuraHallYdespacho1200px={ Anchura_6_1200px } 
                                                                        /> } />
                              <Route path='/instalacionesPage/comedor' element={ <Comedor anchuraComedor480px={ Anchura_6_480px }
                                                                        anchuraComedor481px_a_767px={ Anchura_6_481px_a_767px }
                                                                        anchuraComedor768px_a_959px={ Anchura_6_768px_a_959px }
                                                                        anchuraComedor960px_a_1199px={ Anchura_6_960px_a_1199px }
                                                                        anchuraComedor1200px={ Anchura_6_1200px } 
                                                                        /> } />
                              <Route path='/instalacionesPage/cocinaYlavanderia' element={ <CocinaYlavanderia anchuraCocinaYlavanderia480px={ Anchura_6_480px }
                                                                                            anchuraCocinaYlavanderia481px_a_767px={ Anchura_6_481px_a_767px }
                                                                                            anchuraCocinaYlavanderia768px_a_959px={ Anchura_6_768px_a_959px }
                                                                                            anchuraCocinaYlavanderia960px_a_1199px={ Anchura_6_960px_a_1199px }
                                                                                            anchuraCocinaYlavanderia1200px={ Anchura_6_1200px } 
                                                                               /> } />
                              <Route path='/instalacionesPage/patios' element={ <Patios anchuraPatios480px={ Anchura_6_480px }
                                                                      anchuraPatios481px_a_767px={ Anchura_6_481px_a_767px }
                                                                      anchuraPatios768px_a_959px={ Anchura_6_768px_a_959px }
                                                                      anchuraPatios960px_a_1199px={ Anchura_6_960px_a_1199px }
                                                                      anchuraPatios1200px={ Anchura_6_1200px } 
                                                                              /> } />
                              <Route path='/instalacionesPage/huertoEinvernadero' element={ <HuertoEinvernadero anchuraHuertoEinvernadero480px={ Anchura_6_480px }
                                                                                              anchuraHuertoEinvernadero481px_a_767px={ Anchura_6_481px_a_767px }
                                                                                              anchuraHuertoEinvernadero768px_a_959px={ Anchura_6_768px_a_959px }
                                                                                              anchuraHuertoEinvernadero960px_a_1199px={ Anchura_6_960px_a_1199px }
                                                                                              anchuraHuertoEinvernadero1200px={ Anchura_6_1200px } 
                                                                              /> } />
                              <Route path='/instalacionesPage/salonDeActos' element={ <SalonDeActos anchuraSalonDeActos480px={ Anchura_6_480px }
                                                                                  anchuraSalonDeActos481px_a_767px={ Anchura_6_481px_a_767px }
                                                                                  anchuraSalonDeActos768px_a_959px={ Anchura_6_768px_a_959px }
                                                                                  anchuraSalonDeActos960px_a_1199px={ Anchura_6_960px_a_1199px }
                                                                                  anchuraSalonDeActos1200px={ Anchura_6_1200px } 
                                                                              /> } />    



                              {/* Enlaces que estan en la pagina de proyectos (Exploradores, Aventureros, Descubridores, Darwin)  */}
                              <Route path='/instalacionesPage/exploradores' element={ <ExploradoresPage anchuraExploradoresPage480px={ Anchura_6_480px }
                                                                                                        anchuraExploradoresPage481px_a_767px={ Anchura_6_481px_a_767px }
                                                                                                        anchuraExploradoresPage768px_a_959px={ Anchura_6_768px_a_959px }
                                                                                                        anchuraExploradoresPage960px_a_1199px={ Anchura_6_960px_a_1199px }
                                                                                                        anchuraExploradoresPage1200px={ Anchura_6_1200px } 
                                                                                                /> } /> 

                              <Route path='/instalacionesPage/aventureros' element={ <AventurerosPage anchuraAventurerosPage480px={ Anchura_6_480px }
                                                                                                      anchuraAventurerosPage481px_a_767px={ Anchura_6_481px_a_767px }
                                                                                                      anchuraAventurerosPage768px_a_959px={ Anchura_6_768px_a_959px }
                                                                                                      anchuraAventurerosPage960px_a_1199px={ Anchura_6_960px_a_1199px }
                                                                                                      anchuraAventurerosPage1200px={ Anchura_6_1200px } 
                                                                                                /> } /> 
                              <Route path='/instalacionesPage/descubridores' element={ <DescubridoresPage anchuraDescubridoresPage480px={ Anchura_6_480px }
                                                                                                          anchuraDescubridoresPage481px_a_767px={ Anchura_6_481px_a_767px }
                                                                                                          anchuraDescubridoresPage768px_a_959px={ Anchura_6_768px_a_959px }
                                                                                                          anchuraDescubridoresPage960px_a_1199px={ Anchura_6_960px_a_1199px }
                                                                                                          anchuraDescubridoresPage1200px={ Anchura_6_1200px } 
                                                                                                /> } /> 
                              <Route path='/instalacionesPage/darwin' element={ <DarwinPage anchuraDarwinPage480px={ Anchura_6_480px }
                                                                                            anchuraDarwinPage481px_a_767px={ Anchura_6_481px_a_767px }
                                                                                            anchuraDarwinPage768px_a_959px={ Anchura_6_768px_a_959px }
                                                                                            anchuraDarwinPage960px_a_1199px={ Anchura_6_960px_a_1199px }
                                                                                            anchuraDarwinPage1200px={ Anchura_6_1200px } 
                                                                                          /> } />        



                              {/* Enlaces que estan en la pagina de proyectos (Arte, Música, Psicomotricidad, Juego, Yoga, Naturaleza)  */}
                              <Route path='/proyecto/arte' element={ <ArtePage anchuraArtePage480px={ Anchura_6_480px }
                                                                      anchuraArtePage481px_a_767px={ Anchura_6_481px_a_767px }
                                                                      anchuraArtePage768px_a_959px={ Anchura_6_768px_a_959px }
                                                                      anchuraArtePage960px_a_1199px={ Anchura_6_960px_a_1199px }
                                                                      anchuraArtePage1200px={ Anchura_6_1200px } 
                                                                  /> } />
                              <Route path='/proyecto/musica' element={ <MusicaPage anchuraMusicaPage480px={ Anchura_6_480px }
                                                                          anchuraMusicaPage481px_a_767px={ Anchura_6_481px_a_767px }
                                                                          anchuraMusicaPage768px_a_959px={ Anchura_6_768px_a_959px }
                                                                          anchuraMusicaPage960px_a_1199px={ Anchura_6_960px_a_1199px }
                                                                          anchuraMusicaPage1200px={ Anchura_6_1200px } 
                                                                  /> } />
                              <Route path='/proyecto/psicomotricidad' element={ <PsicomotricidadPage anchuraPsicomotricidadPage480px={ Anchura_6_480px }
                                                                                            anchuraPsicomotricidadPage481px_a_767px={ Anchura_6_481px_a_767px }
                                                                                            anchuraPsicomotricidadPage768px_a_959px={ Anchura_6_768px_a_959px }
                                                                                            anchuraPsicomotricidadPage960px_a_1199px={ Anchura_6_960px_a_1199px }
                                                                                            anchuraPsicomotricidadPage1200px={ Anchura_6_1200px } 
                                                                                    /> } />
                              
                              











                              
                              
                              
                              <Route path='/proyecto/juego' element={ <JuegoPage anchuraJuegoPage480px={ Anchura_6_480px }
                                                                        anchuraJuegoPage481px_a_767px={ Anchura_6_481px_a_767px }
                                                                        anchuraJuegoPage768px_a_959px={ Anchura_6_768px_a_959px }
                                                                        anchuraJuegoPage960px_a_1199px={ Anchura_6_960px_a_1199px }
                                                                        anchuraJuegoPage1200px={ Anchura_6_1200px } 
                                                                  /> } /> 















                              <Route path='/proyecto/yoga' element={ <YogaPage anchuraYogaPage480px={ Anchura_6_480px }
                                                                      anchuraYogaPage481px_a_767px={ Anchura_6_481px_a_767px }
                                                                      anchuraYogaPage768px_a_959px={ Anchura_6_768px_a_959px }
                                                                      anchuraYogaPage960px_a_1199px={ Anchura_6_960px_a_1199px }
                                                                      anchuraYogaPage1200px={ Anchura_6_1200px } 
                                                                  /> } />
                              <Route path='/proyecto/naturaleza' element={ <NaturalezaPage anchuraNaturalezaPage480px={ Anchura_6_480px }
                                                                                  anchuraNaturalezaPage481px_a_767px={ Anchura_6_481px_a_767px }
                                                                                  anchuraNaturalezaPage768px_a_959px={ Anchura_6_768px_a_959px }
                                                                                  anchuraNaturalezaPage960px_a_1199px={ Anchura_6_960px_a_1199px }
                                                                                  anchuraNaturalezaPage1200px={ Anchura_6_1200px } 
                                                                              /> } />    

                        </Routes>

                  </main>


                  <Footer   anchuraHeader480px={ Anchura_2_480px }
                            anchuraHeader481px_a_767px={ Anchura_2_481px_a_767px }
                            anchuraHeader768px_a_959px={ Anchura_2_768px_a_959px }
                            anchuraHeader960px_a_1199px={ Anchura_2_960px_a_1199px }
                            anchuraHeader1200px={ Anchura_2_1200px }
                  />


          </div>


    </Router>


  );
}

export default App;
