import './App.css';
import { Header } from './Components/PrincipalComponents/Header';
// import { Main } from './Components/PrincipalComponents/Main';
import { Footer } from './Components/PrincipalComponents/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EscuelaDePadresPage } from './pages/header/enlacesRodondosPages/escuelaDePadresPage';
import { ZonaPrivadaPage } from './pages/header/enlacesRodondosPages/zonaPrivadaPage';
import { ContactoPage } from './pages/header/enlacesRodondosPages/contactoPage';
import { InicioPage } from './pages/header/bannerPrincipalCelestePages/inicioPage';
import { QuienesSomosPage } from './pages/header/bannerPrincipalCelestePages/quienesSomosPage';
import { ProyectoPage } from './pages/header/bannerPrincipalCelestePages/proyectoPage';
import { InstalacionesPage } from './pages/header/bannerPrincipalCelestePages/instalacionesPage';
import { InglesPage } from './pages/header/bannerPrincipalCelestePages/inglesPage';
import { EquipoPage } from './pages/header/bannerPrincipalCelestePages/equipoPage';

function App() {
  return (
    <Router>
          <div className="App-container">

              <Header />
              <main className='Main-Principal-Container'>
                    <Routes>
                      
                              {/* Enlace raiz */}
                              <Route path='/' element={ <InicioPage /> } />


                              {/* Enlaces del Header, escuelaDePadres, ZonaPrivada, Contacto */}
                              <Route path='/escuelaDePadresPage' element={ <EscuelaDePadresPage /> } />
                              <Route path='/zonaPrivadaPage' element={ <ZonaPrivadaPage /> } />
                              <Route path='/contactoPage' element={ <ContactoPage /> } />


                              {/* Enlaces del Header, inicio, quienesSomos, Instalaciones, Proyecto, Ingles, Equipo */}
                              <Route path='/inicioPage' element={ <InicioPage /> } />
                              <Route path='/quienesSomosPage' element={ <QuienesSomosPage /> } />
                              <Route path='/instalacionesPage' element={ <InstalacionesPage /> } />
                              <Route path='/proyectoPage' element={ <ProyectoPage /> } />
                              <Route path='/inglesPage' element={ <InglesPage /> } />
                              <Route path='/equipoPage' element={ <EquipoPage /> } />
                    </Routes>
              </main>
              <Footer />

          </div>
    </Router>
  );
}

export default App;
