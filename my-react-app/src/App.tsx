import "./App.css";
import DataDisplay from "./components/DataDisplay";
import DataDisplay_pok from "./components/DataDisplay_pok";
// import PokemonTable from "./components/PokemonTable";
import PokemonBackground from "./components/PokemonBackground"; 

function App() {
  return (
    <div className="app-container">
      <PokemonBackground /> 
      <div className="grid-container">
        <div className="left-column">
          <h1>Pokémon Random</h1>
          <DataDisplay />
          {/* <PokemonTable /> */}
        </div>
        <div className="right-column">
          <h1>Pokémon Reset</h1>
          <DataDisplay_pok />
        </div>
      </div>
    </div>
  );
}

export default App;
