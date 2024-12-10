import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';

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

	  // Altura de todas las paginas
	  const Altura_480px = 27;
	  const Altura_481px_a_767px = 39;
	  const Altura_768px_a_959px = 61.5;
	  const Altura_960px_a_1199px = 77;
	  const Altura_1200px = 95;


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
				  
							  <Route path="/" element={<Navigate to="/inicioPage" />} />


							  {/* Enlaces del Header, escuelaDePadres, ZonaPrivada, Contacto */}
							  <Route path='/escuelaDePadresPage' element={ <EscuelaDePadresPage  	anchuraEscuelaDePadresPage480px={ Anchura_3_480px }
																									anchuraEscuelaDePadresPage481px_a_767px={ Anchura_3_481px_a_767px }
																									anchuraEscuelaDePadresPage768px_a_959px={ Anchura_3_768px_a_959px }
																									anchuraEscuelaDePadresPage960px_a_1199px={ Anchura_3_960px_a_1199px }
																									anchuraEscuelaDePadresPage1200px={ Anchura_3_1200px }

																									alturaEscuelaDePadresPage480px={ Altura_480px }
																									alturaEscuelaDePadresPage481px_a_767px={ Altura_481px_a_767px }
																									alturaEscuelaDePadresPage768px_a_959px={ Altura_768px_a_959px }
																									alturaEscuelaDePadresPage960px_a_1199px={ Altura_960px_a_1199px }
																									alturaEscuelaDePadresPage1200px={ Altura_1200px }
																			  /> } />
							  <Route path='/zonaPrivadaPage' element={ <ZonaPrivadaPage anchuraZonaPrivadaPage480px={ Anchura_3_480px }
																						anchuraZonaPrivadaPage481px_a_767px={ Anchura_3_481px_a_767px }
																						anchuraZonaPrivadaPage768px_a_959px={ Anchura_3_768px_a_959px }
																						anchuraZonaPrivadaPage960px_a_1199px={ Anchura_3_960px_a_1199px }
																						anchuraZonaPrivadaPage1200px={ Anchura_3_1200px }

																						alturaZonaPrivadaPage480px={ Altura_480px }
																						alturaZonaPrivadaPage481px_a_767px={ Altura_481px_a_767px }
																						alturaZonaPrivadaPage768px_a_959px={ Altura_768px_a_959px }
																						alturaZonaPrivadaPage960px_a_1199px={ Altura_960px_a_1199px }
																						alturaZonaPrivadaPage1200px={ Altura_1200px }
																			  /> } />
							  <Route path='/contactoPage' element={ <ContactoPage  	anchuraContactoPage480px={ Anchura_3_480px }
																					anchuraContactoPage481px_a_767px={ Anchura_3_481px_a_767px }
																					anchuraContactoPage768px_a_959px={ Anchura_3_768px_a_959px }
																					anchuraContactoPage960px_a_1199px={ Anchura_3_960px_a_1199px }
																					anchuraContactoPage1200px={ Anchura_3_1200px }

																					alturaContactoPage480px={ Altura_480px }
																					alturaContactoPage481px_a_767px={ Altura_481px_a_767px }
																					alturaContactoPage768px_a_959px={ Altura_768px_a_959px }
																					alturaContactoPage960px_a_1199px={ Altura_960px_a_1199px }
																					alturaContactoPage1200px={ Altura_1200px }
																			  /> } />
				  
	  

							  {/* Enlaces del Header, inicio, quienesSomos, Instalaciones, Proyecto, Ingles, Equipo */}
							  <Route path='/inicioPage' element={ <InicioPage anchuraInicio480px={ Anchura_2_480px }
																			  anchuraInicio481px_a_767px={ Anchura_2_481px_a_767px }
																			  anchuraInicio768px_a_959px={ Anchura_2_768px_a_959px }
																			  anchuraInicio960px_a_1199px={ Anchura_2_960px_a_1199px }
																			  anchuraInicio1200px={ Anchura_2_1200px }
																			  
																			  alturaInicio480px={ Altura_480px }
																			  alturaInicio481px_a_767px={ Altura_481px_a_767px }
																			  alturaInicio768px_a_959px={ Altura_768px_a_959px }
																			  alturaInicio960px_a_1199px={ Altura_960px_a_1199px }
																			  alturaInicio1200px={ Altura_1200px } 
																  />} />
							  <Route path='/quienesSomosPage' element={ <QuienesSomosPage anchuraQuienesSomosPage480px={ Anchura_4_480px }
																						  anchuraQuienesSomosPage481px_a_767px={ Anchura_4_481px_a_767px }
																						  anchuraQuienesSomosPage768px_a_959px={ Anchura_4_768px_a_959px }
																						  anchuraQuienesSomosPage960px_a_1199px={ Anchura_4_960px_a_1199px }
																						  anchuraQuienesSomosPage1200px={ Anchura_4_1200px }
																						  
																						  alturaQuienesSomosPage480px={ Altura_480px }
																						  alturaQuienesSomosPage481px_a_767px={ Altura_481px_a_767px }
																						  alturaQuienesSomosPage768px_a_959px={ Altura_768px_a_959px }
																						  alturaQuienesSomosPage960px_a_1199px={ Altura_960px_a_1199px }
																						  alturaQuienesSomosPage1200px={ Altura_1200px } 
																			  />} />
							  <Route path='/instalacionesPage' element={ <InstalacionesPage anchuraInstalacionesPage480px={ Anchura_4_480px }
																						  	anchuraInstalacionesPage481px_a_767px={ Anchura_4_481px_a_767px }
																						  	anchuraInstalacionesPage768px_a_959px={ Anchura_4_768px_a_959px }
																						  	anchuraInstalacionesPage960px_a_1199px={ Anchura_4_960px_a_1199px }
																						  	anchuraInstalacionesPage1200px={ Anchura_4_1200px }

																						  	alturaInstalacionesPage480px={ Altura_480px }
																						  	alturaInstalacionesPage481px_a_767px={ Altura_481px_a_767px }
																						  	alturaInstalacionesPage768px_a_959px={ Altura_768px_a_959px }
																						  	alturaInstalacionesPage960px_a_1199px={ Altura_960px_a_1199px }
																						  	alturaInstalacionesPage1200px={ Altura_1200px } 
																			  />} />
							  <Route path='/proyectoPage' element={ <ProyectoPage 	anchuraProyectoPage480px={ Anchura_4_480px }
																			  		anchuraProyectoPage481px_a_767px={ Anchura_4_481px_a_767px }
																			  		anchuraProyectoPage768px_a_959px={ Anchura_4_768px_a_959px }
																			  		anchuraProyectoPage960px_a_1199px={ Anchura_4_960px_a_1199px }
																			  		anchuraProyectoPage1200px={ Anchura_4_1200px } 

																			  		alturaProyectoPage480px={ Altura_480px }
																					alturaProyectoPage481px_a_767px={ Altura_481px_a_767px }
																					alturaProyectoPage768px_a_959px={ Altura_768px_a_959px }
																					alturaProyectoPage960px_a_1199px={ Altura_960px_a_1199px }
																					alturaProyectoPage1200px={ Altura_1200px } 
																			  />} />

							  <Route path='/inglesPage' element={ <InglesPage />} />

							  <Route path='/equipoPage' element={ <EquipoPage 	anchuraEquipoPage480px={ Anchura_4_480px }
																			  	anchuraEquipoPage481px_a_767px={ Anchura_4_481px_a_767px }
																			  	anchuraEquipoPage768px_a_959px={ Anchura_4_768px_a_959px }
																			  	anchuraEquipoPage960px_a_1199px={ Anchura_4_960px_a_1199px }
																			  	anchuraEquipoPage1200px={ Anchura_4_1200px } 

																			  	alturaEquipoPage480px={ Altura_480px }
																				alturaEquipoPage481px_a_767px={ Altura_481px_a_767px }
																				alturaEquipoPage768px_a_959px={ Altura_768px_a_959px }
																				alturaEquipoPage960px_a_1199px={ Altura_960px_a_1199px }
																				alturaEquipoPage1200px={ Altura_1200px } 
																			  />} />



							  {/* Enlaces del Header, inicio, quienesSomos, Instalaciones, Proyecto, Ingles, Equipo */}
							  <Route path='/inicioPage/fotos' element={ <FotosPage 	anchuraFotosPage480px={ Anchura_5_480px }
																					anchuraFotosPage481px_a_767px={ Anchura_5_481px_a_767px }
																					anchuraFotosPage768px_a_959px={ Anchura_5_768px_a_959px }
																					anchuraFotosPage960px_a_1199px={ Anchura_5_960px_a_1199px }
																					anchuraFotosPage1200px={ Anchura_5_1200px }
																		
																					alturaFotosPage480px={ Altura_480px }
																					alturaFotosPage481px_a_767px={ Altura_481px_a_767px }
																					alturaFotosPage768px_a_959px={ Altura_768px_a_959px }
																					alturaFotosPage960px_a_1199px={ Altura_960px_a_1199px }
																					alturaFotosPage1200px={ Altura_1200px } 
																			  />} />
							  <Route path='/inicioPage/pediatra' element={ <PediatraPage 	anchuraPediatraPage480px={ Anchura_5_480px }
																			  				anchuraPediatraPage481px_a_767px={ Anchura_5_481px_a_767px }
																			  				anchuraPediatraPage768px_a_959px={ Anchura_5_768px_a_959px }
																			  				anchuraPediatraPage960px_a_1199px={ Anchura_5_960px_a_1199px }
																			  				anchuraPediatraPage1200px={ Anchura_5_1200px }
																			  
																			  				alturaPediatraPage480px={ Altura_480px }
																							alturaPediatraPage481px_a_767px={ Altura_481px_a_767px }
																							alturaPediatraPage768px_a_959px={ Altura_768px_a_959px }
																							alturaPediatraPage960px_a_1199px={ Altura_960px_a_1199px }
																							alturaPediatraPage1200px={ Altura_1200px } 
																			  />} />
							  <Route path='/inicioPage/noticias' element={ <NoticiasPage 	anchuraNoticiasPage480px={ Anchura_5_480px }
																			  				anchuraNoticiasPage481px_a_767px={ Anchura_5_481px_a_767px }
																			  				anchuraNoticiasPage768px_a_959px={ Anchura_5_768px_a_959px }
																			  				anchuraNoticiasPage960px_a_1199px={ Anchura_5_960px_a_1199px }
																			  				anchuraNoticiasPage1200px={ Anchura_5_1200px } 

																			  				alturaNoticiasPage480px={ Altura_480px }
																							alturaNoticiasPage481px_a_767px={ Altura_481px_a_767px }
																							alturaNoticiasPage768px_a_959px={ Altura_768px_a_959px }
																							alturaNoticiasPage960px_a_1199px={ Altura_960px_a_1199px }
																							alturaNoticiasPage1200px={ Altura_1200px } 
																			  />} />
							  <Route path='/inicioPage/decalogo' element={ <DecalogoPage 	anchuraDecalogoPage480px={ Anchura_5_480px }
																			  				anchuraDecalogoPage481px_a_767px={ Anchura_5_481px_a_767px }
																			  				anchuraDecalogoPage768px_a_959px={ Anchura_5_768px_a_959px }
																			  				anchuraDecalogoPage960px_a_1199px={ Anchura_5_960px_a_1199px }
																			  				anchuraDecalogoPage1200px={ Anchura_5_1200px } 

																			  				alturaDecalogoPage480px={ Altura_480px }
																							alturaDecalogoPage481px_a_767px={ Altura_481px_a_767px }
																							alturaDecalogoPage768px_a_959px={ Altura_768px_a_959px }
																							alturaDecalogoPage960px_a_1199px={ Altura_960px_a_1199px }
																							alturaDecalogoPage1200px={ Altura_1200px } 
																			  />} />
							  <Route path='/inicioPage/nutricionista' element={ <NutricionistaPage 	anchuraNutricionistaPage480px={ Anchura_5_480px }
																									anchuraNutricionistaPage481px_a_767px={ Anchura_5_481px_a_767px }
																									anchuraNutricionistaPage768px_a_959px={ Anchura_5_768px_a_959px }
																									anchuraNutricionistaPage960px_a_1199px={ Anchura_5_960px_a_1199px }
																									anchuraNutricionistaPage1200px={ Anchura_5_1200px }

																									alturaNutricionistaPage480px={ Altura_480px }
																									alturaNutricionistaPage481px_a_767px={ Altura_481px_a_767px }
																									alturaNutricionistaPage768px_a_959px={ Altura_768px_a_959px }
																									alturaNutricionistaPage960px_a_1199px={ Altura_960px_a_1199px }
																									alturaNutricionistaPage1200px={ Altura_1200px } 
																			  />} />
							  <Route path='/inicioPage/excursiones' element={ <ExcursionesPage 	anchuraExcursionesPage480px={ Anchura_5_480px }
																								anchuraExcursionesPage481px_a_767px={ Anchura_5_481px_a_767px }
																								anchuraExcursionesPage768px_a_959px={ Anchura_5_768px_a_959px }
																								anchuraExcursionesPage960px_a_1199px={ Anchura_5_960px_a_1199px }
																								anchuraExcursionesPage1200px={ Anchura_5_1200px } 

																								alturaExcursionesPage480px={ Altura_480px }
																								alturaExcursionesPage481px_a_767px={ Altura_481px_a_767px }
																								alturaExcursionesPage768px_a_959px={ Altura_768px_a_959px }
																								alturaExcursionesPage960px_a_1199px={ Altura_960px_a_1199px }
																								alturaExcursionesPage1200px={ Altura_1200px } 
																			  />} />
							  


							  {/* Enlaces que estan en la pagina de instalaciones (Aulas, Hall y Despacho, Comedor, Cocina y Lavanderia, Patios, Huerto e Invernadero, Salón de Actos)  */}
							  <Route path='/instalacionesPage/aulas' element={ <AulasEnlacePrincipalPage 	anchuraAulasEnlacePrincipalPage480px={ Anchura_6_480px }
																					   						anchuraAulasEnlacePrincipalPage481px_a_767px={ Anchura_6_481px_a_767px }
																					   						anchuraAulasEnlacePrincipalPage768px_a_959px={ Anchura_6_768px_a_959px }
																					   						anchuraAulasEnlacePrincipalPage960px_a_1199px={ Anchura_6_960px_a_1199px }
																					   						anchuraAulasEnlacePrincipalPage1200px={ Anchura_6_1200px }

																					   						alturaAulasEnlacePrincipalPage480px={ Altura_480px }
																											alturaAulasEnlacePrincipalPage481px_a_767px={ Altura_481px_a_767px }
																											alturaAulasEnlacePrincipalPage768px_a_959px={ Altura_768px_a_959px }
																											alturaAulasEnlacePrincipalPage960px_a_1199px={ Altura_960px_a_1199px }
																											alturaAulasEnlacePrincipalPage1200px={ Altura_1200px } 
																		/> } />
							  <Route path='/instalacionesPage/hallYdespacho' element={ <HallYdespacho 	anchuraHallYdespacho480px={ Anchura_6_480px }
																										anchuraHallYdespacho481px_a_767px={ Anchura_6_481px_a_767px }
																										anchuraHallYdespacho768px_a_959px={ Anchura_6_768px_a_959px }
																										anchuraHallYdespacho960px_a_1199px={ Anchura_6_960px_a_1199px }
																										anchuraHallYdespacho1200px={ Anchura_6_1200px }

																										alturaHallYdespachoPage480px={ Altura_480px }
																										alturaHallYdespachoPage481px_a_767px={ Altura_481px_a_767px }
																										alturaHallYdespachoPage768px_a_959px={ Altura_768px_a_959px }
																										alturaHallYdespachoPage960px_a_1199px={ Altura_960px_a_1199px }
																										alturaHallYdespachoPage1200px={ Altura_1200px } 
																		/> } />
							  <Route path='/instalacionesPage/comedor' element={ <Comedor 	anchuraComedor480px={ Anchura_6_480px }
																							anchuraComedor481px_a_767px={ Anchura_6_481px_a_767px }
																							anchuraComedor768px_a_959px={ Anchura_6_768px_a_959px }
																							anchuraComedor960px_a_1199px={ Anchura_6_960px_a_1199px }
																							anchuraComedor1200px={ Anchura_6_1200px }

																							alturaComedorPage480px={ Altura_480px }
																							alturaComedorPage481px_a_767px={ Altura_481px_a_767px }
																							alturaComedorPage768px_a_959px={ Altura_768px_a_959px }
																							alturaComedorPage960px_a_1199px={ Altura_960px_a_1199px }
																							alturaComedorPage1200px={ Altura_1200px } 
																		/> } />
							  <Route path='/instalacionesPage/cocinaYlavanderia' element={ <CocinaYlavanderia 	anchuraCocinaYlavanderia480px={ Anchura_6_480px }
																												anchuraCocinaYlavanderia481px_a_767px={ Anchura_6_481px_a_767px }
																												anchuraCocinaYlavanderia768px_a_959px={ Anchura_6_768px_a_959px }
																												anchuraCocinaYlavanderia960px_a_1199px={ Anchura_6_960px_a_1199px }
																												anchuraCocinaYlavanderia1200px={ Anchura_6_1200px } 

																												alturaCocinaYlavanderiaPage480px={ Altura_480px }
																												alturaCocinaYlavanderiaPage481px_a_767px={ Altura_481px_a_767px }
																												alturaCocinaYlavanderiaPage768px_a_959px={ Altura_768px_a_959px }
																												alturaCocinaYlavanderiaPage960px_a_1199px={ Altura_960px_a_1199px }
																												alturaCocinaYlavanderiaPage1200px={ Altura_1200px } 
																			   /> } />
							  <Route path='/instalacionesPage/patios' element={ <Patios anchuraPatios480px={ Anchura_6_480px }
																	  					anchuraPatios481px_a_767px={ Anchura_6_481px_a_767px }
																	  					anchuraPatios768px_a_959px={ Anchura_6_768px_a_959px }
																	  					anchuraPatios960px_a_1199px={ Anchura_6_960px_a_1199px }
																	  					anchuraPatios1200px={ Anchura_6_1200px }

																	  					alturaPatiosPage480px={ Altura_480px }
																						alturaPatiosPage481px_a_767px={ Altura_481px_a_767px }
																						alturaPatiosPage768px_a_959px={ Altura_768px_a_959px }
																						alturaPatiosPage960px_a_1199px={ Altura_960px_a_1199px }
																						alturaPatiosPage1200px={ Altura_1200px } 
																			  /> } />
							  <Route path='/instalacionesPage/huertoEinvernadero' element={ <HuertoEinvernadero anchuraHuertoEinvernadero480px={ Anchura_6_480px }
																							  					anchuraHuertoEinvernadero481px_a_767px={ Anchura_6_481px_a_767px }
																							  					anchuraHuertoEinvernadero768px_a_959px={ Anchura_6_768px_a_959px }
																							  					anchuraHuertoEinvernadero960px_a_1199px={ Anchura_6_960px_a_1199px }
																							  					anchuraHuertoEinvernadero1200px={ Anchura_6_1200px }
																							  
																												alturaHuertoEinvernaderoPage480px={ Altura_480px }
																												alturaHuertoEinvernaderoPage481px_a_767px={ Altura_481px_a_767px }
																												alturaHuertoEinvernaderoPage768px_a_959px={ Altura_768px_a_959px }
																												alturaHuertoEinvernaderoPage960px_a_1199px={ Altura_960px_a_1199px }
																												alturaHuertoEinvernaderoPage1200px={ Altura_1200px } 
																			  /> } />
							  <Route path='/instalacionesPage/salonDeActos' element={ <SalonDeActos anchuraSalonDeActos480px={ Anchura_6_480px }
																				  					anchuraSalonDeActos481px_a_767px={ Anchura_6_481px_a_767px }
																				  					anchuraSalonDeActos768px_a_959px={ Anchura_6_768px_a_959px }
																				  					anchuraSalonDeActos960px_a_1199px={ Anchura_6_960px_a_1199px }
																				  					anchuraSalonDeActos1200px={ Anchura_6_1200px } 

																				  					alturaSalonDeActosPage480px={ Altura_480px }
																									alturaSalonDeActosPage481px_a_767px={ Altura_481px_a_767px }
																									alturaSalonDeActosPage768px_a_959px={ Altura_768px_a_959px }
																									alturaSalonDeActosPage960px_a_1199px={ Altura_960px_a_1199px }
																									alturaSalonDeActosPage1200px={ Altura_1200px } 
																			  /> } />    



							  {/* Enlaces que estan en la pagina de proyectos (Exploradores, Aventureros, Descubridores, Darwin)  */}
							  <Route path='/instalacionesPage/exploradores' element={ <ExploradoresPage anchuraExploradoresPage480px={ Anchura_6_480px }
																										anchuraExploradoresPage481px_a_767px={ Anchura_6_481px_a_767px }
																										anchuraExploradoresPage768px_a_959px={ Anchura_6_768px_a_959px }
																										anchuraExploradoresPage960px_a_1199px={ Anchura_6_960px_a_1199px }
																										anchuraExploradoresPage1200px={ Anchura_6_1200px } 

																										alturaExploradoresPage480px={ Altura_480px }
																										alturaExploradoresPage481px_a_767px={ Altura_481px_a_767px }
																										alturaExploradoresPage768px_a_959px={ Altura_768px_a_959px }
																										alturaExploradoresPage960px_a_1199px={ Altura_960px_a_1199px }
																										alturaExploradoresPage1200px={ Altura_1200px } 
																								/> } /> 

							  <Route path='/instalacionesPage/aventureros' element={ <AventurerosPage 	anchuraAventurerosPage480px={ Anchura_6_480px }
																									  	anchuraAventurerosPage481px_a_767px={ Anchura_6_481px_a_767px }
																									  	anchuraAventurerosPage768px_a_959px={ Anchura_6_768px_a_959px }
																									  	anchuraAventurerosPage960px_a_1199px={ Anchura_6_960px_a_1199px }
																									  	anchuraAventurerosPage1200px={ Anchura_6_1200px } 

																									  	alturaAventurerosPage480px={ Altura_480px }
																										alturaAventurerosPage481px_a_767px={ Altura_481px_a_767px }
																										alturaAventurerosPage768px_a_959px={ Altura_768px_a_959px }
																										alturaAventurerosPage960px_a_1199px={ Altura_960px_a_1199px }
																										alturaAventurerosPage1200px={ Altura_1200px } 
																								/> } /> 
							  <Route path='/instalacionesPage/descubridores' element={ <DescubridoresPage 	anchuraDescubridoresPage480px={ Anchura_6_480px }
																										  	anchuraDescubridoresPage481px_a_767px={ Anchura_6_481px_a_767px }
																										  	anchuraDescubridoresPage768px_a_959px={ Anchura_6_768px_a_959px }
																										  	anchuraDescubridoresPage960px_a_1199px={ Anchura_6_960px_a_1199px }
																										  	anchuraDescubridoresPage1200px={ Anchura_6_1200px } 

																										  	alturaDescubridoresPage480px={ Altura_480px }
																											alturaDescubridoresPage481px_a_767px={ Altura_481px_a_767px }
																											alturaDescubridoresPage768px_a_959px={ Altura_768px_a_959px }
																											alturaDescubridoresPage960px_a_1199px={ Altura_960px_a_1199px }
																											alturaDescubridoresPage1200px={ Altura_1200px } 
																								/> } /> 
							  <Route path='/instalacionesPage/darwin' element={ <DarwinPage anchuraDarwinPage480px={ Anchura_6_480px }
																							anchuraDarwinPage481px_a_767px={ Anchura_6_481px_a_767px }
																							anchuraDarwinPage768px_a_959px={ Anchura_6_768px_a_959px }
																							anchuraDarwinPage960px_a_1199px={ Anchura_6_960px_a_1199px }
																							anchuraDarwinPage1200px={ Anchura_6_1200px } 

																							alturaDarwinPage480px={ Altura_480px }
																							alturaDarwinPage481px_a_767px={ Altura_481px_a_767px }
																							alturaDarwinPage768px_a_959px={ Altura_768px_a_959px }
																							alturaDarwinPage960px_a_1199px={ Altura_960px_a_1199px }
																							alturaDarwinPage1200px={ Altura_1200px } 
																						  /> } />        



							  {/* Enlaces que estan en la pagina de proyectos (Arte, Música, Psicomotricidad, Juego, Yoga, Naturaleza)  */}
							  <Route path='/proyectoPage/arte' element={ <ArtePage 	anchuraArtePage480px={ Anchura_6_480px }
																	  				anchuraArtePage481px_a_767px={ Anchura_6_481px_a_767px }
																	  				anchuraArtePage768px_a_959px={ Anchura_6_768px_a_959px }
																	  				anchuraArtePage960px_a_1199px={ Anchura_6_960px_a_1199px }
																	  				anchuraArtePage1200px={ Anchura_6_1200px }

																	  				alturaArtePage480px={ Altura_480px }
																					alturaArtePage481px_a_767px={ Altura_481px_a_767px }
																					alturaArtePage768px_a_959px={ Altura_768px_a_959px }
																					alturaArtePage960px_a_1199px={ Altura_960px_a_1199px }
																					alturaArtePage1200px={ Altura_1200px } 
																  /> } />
							  <Route path='/proyectoPage/musica' element={ <MusicaPage 	anchuraMusicaPage480px={ Anchura_6_480px }
																		  				anchuraMusicaPage481px_a_767px={ Anchura_6_481px_a_767px }
																		  				anchuraMusicaPage768px_a_959px={ Anchura_6_768px_a_959px }
																		  				anchuraMusicaPage960px_a_1199px={ Anchura_6_960px_a_1199px }
																		  				anchuraMusicaPage1200px={ Anchura_6_1200px }
																		  
																		  				alturaMusicaPage480px={ Altura_480px }
																						alturaMusicaPage481px_a_767px={ Altura_481px_a_767px }
																						alturaMusicaPage768px_a_959px={ Altura_768px_a_959px }
																						alturaMusicaPage960px_a_1199px={ Altura_960px_a_1199px }
																						alturaMusicaPage1200px={ Altura_1200px } 
																  /> } />
							  <Route path='/proyectoPage/psicomotricidad' element={ <PsicomotricidadPage 	anchuraPsicomotricidadPage480px={ Anchura_6_480px }
																											anchuraPsicomotricidadPage481px_a_767px={ Anchura_6_481px_a_767px }
																											anchuraPsicomotricidadPage768px_a_959px={ Anchura_6_768px_a_959px }
																											anchuraPsicomotricidadPage960px_a_1199px={ Anchura_6_960px_a_1199px }
																											anchuraPsicomotricidadPage1200px={ Anchura_6_1200px }
																							
																											alturaPsicomotricidadPage480px={ Altura_480px }
																											alturaPsicomotricidadPage481px_a_767px={ Altura_481px_a_767px }
																											alturaPsicomotricidadPage768px_a_959px={ Altura_768px_a_959px }
																											alturaPsicomotricidadPage960px_a_1199px={ Altura_960px_a_1199px }
																											alturaPsicomotricidadPage1200px={ Altura_1200px } 
																					/> } />
							  
							  <Route path='/proyectoPage/juego' element={ <JuegoPage /> } /> 

							  <Route path='/proyectoPage/yoga' element={ <YogaPage 	anchuraYogaPage480px={ Anchura_6_480px }
																	  				anchuraYogaPage481px_a_767px={ Anchura_6_481px_a_767px }
																	  				anchuraYogaPage768px_a_959px={ Anchura_6_768px_a_959px }
																	  				anchuraYogaPage960px_a_1199px={ Anchura_6_960px_a_1199px }
																	  				anchuraYogaPage1200px={ Anchura_6_1200px } 

																	  				alturaYogaPage480px={ Altura_480px }
																					alturaYogaPage481px_a_767px={ Altura_481px_a_767px }
																					alturaYogaPage768px_a_959px={ Altura_768px_a_959px }
																					alturaYogaPage960px_a_1199px={ Altura_960px_a_1199px }
																					alturaYogaPage1200px={ Altura_1200px } 
																  /> } />
							  <Route path='/proyectoPage/naturaleza' element={ <NaturalezaPage 	anchuraNaturalezaPage480px={ Anchura_6_480px }
																				  				anchuraNaturalezaPage481px_a_767px={ Anchura_6_481px_a_767px }
																				  				anchuraNaturalezaPage768px_a_959px={ Anchura_6_768px_a_959px }
																				  				anchuraNaturalezaPage960px_a_1199px={ Anchura_6_960px_a_1199px }
																				  				anchuraNaturalezaPage1200px={ Anchura_6_1200px } 

																				  				alturaNaturalezaPage480px={ Altura_480px }
																								alturaNaturalezaPage481px_a_767px={ Altura_481px_a_767px }
																								alturaNaturalezaPage768px_a_959px={ Altura_768px_a_959px }
																								alturaNaturalezaPage960px_a_1199px={ Altura_960px_a_1199px }
																								alturaNaturalezaPage1200px={ Altura_1200px } 
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
