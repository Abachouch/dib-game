import './App.css';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Guide from './components/Guide/Guide';
import Game from './components/Game/Game';

function App() {

  const { t } = useTranslation()
  return (
    <div className="app">
      <Header></Header>
      <main>
        <Guide></Guide>
        <Game></Game>
      </main>
      <footer>
        <p className='copy' >
          Abachouch Youssouf - React Js and i18next
        </p>
      </footer>
    </div>
  );
}

export default App;
