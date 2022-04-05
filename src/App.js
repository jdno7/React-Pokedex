import logo from './logo.svg';
import './App.css';
import Pokecard from './Pokecard';
import Pokedex from './Pokedex';
import pokemon from './defaultPokemon'

function App() {
  console.log(pokemon)
  return (
    // <Pokecard values= {{id:4, name:'Charmander', type:'fire', base_experience:62}} />
    <>
      <Pokedex values={pokemon}/>
    </>
  );
}

export default App;
