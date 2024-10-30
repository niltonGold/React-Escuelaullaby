import './App.css';
import { Header } from './Components/PrincipalComponents/Header';
// import { Main } from './Components/PrincipalComponents/Main';
import { Footer } from './Components/PrincipalComponents/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EscuelaDePadresPage } from './pages/header/escuelaDePadresPage';
import { ZonaPrivadaPage } from './pages/header/zonaPrivadaPage';
import { ContactoPage } from './pages/header/contactoPage';
import { InicioPage } from './pages/main/inicioPage';
import { QuienesSomosPage } from './pages/main/quienesSomosPage';
import { ProyectoPage } from './pages/main/proyectoPage';
import { InstalacionesPage } from './pages/main/instalacionesPage';
import { InglesPage } from './pages/main/inglesPage';
import { EquipoPage } from './pages/main/equipoPage';

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
