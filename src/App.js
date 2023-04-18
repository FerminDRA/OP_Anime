import './App.css';
import imageRickMorty from './img/rick_y_morty.png';
import credencial from './img/imgId.jpg';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const restapi =  async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterapi = await api.json();
    setCharacters(characterapi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>

        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : ( 
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className='img-home'></img>
            <button onClick={restapi} className='btn-search'>Buscar Personajes</button>
          </>
        )}

        <h1 className='datos'>Fermin Del Rosario Antonio</h1>
        <h1 className='datos'>S19004879</h1>
        <img src={credencial} alt="Credencial" className='img-cred'></img>
      </header>
    </div>
  );
}

export default App;
