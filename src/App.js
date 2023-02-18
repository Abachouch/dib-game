import './App.css';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Guide from './components/Guide/Guide';
import Game from './components/Game/Game';
import { useState } from 'react';
import Score from './utils/score';

function App() {

  const { t } = useTranslation()

  const [score , setScore] = useState( 0 )

  return (
    <div className="app">
      <Header score={score} ></Header>
      <main>
        <Guide></Guide>
        <Game setScore={setScore} ></Game>
      </main>
      <footer>
        <p className='copy' >
          built by: 
          <a rel="author" target="_blank" href='https://abachouch.github.io/'> Abachouch Youssouf </a>
           - using: React Js and i18next
        </p>
      </footer>
    </div>
  );
}

export default App;
