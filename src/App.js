import logo from './logo.svg';
import './App.css';
import { Header } from './Components/PrincipalComponents/Header';
import { Main } from './Components/PrincipalComponents/Main';
import { Footer } from './Components/PrincipalComponents/Footer';

function App() {
  return (
    <div className="App-container">

        <Header />
        <Main />
        <Footer />

    </div>
  );
}

export default App;
