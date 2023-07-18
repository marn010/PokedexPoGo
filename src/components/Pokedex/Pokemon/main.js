
import "./pokemon.css";

export default function Pokemon() {
  return (
    <div className="PokeDetail">
      <h3>Pokemon name</h3>
      <div className="PokeResume">
        <div className="PokePic">
          <img src="/001.jpg" alt="Pokemon" />
        </div>
        <div className="PokeInfo">
          <div className="PokeTipo">Tipos:</div>
          <div className="PokeFast">Ataques Rapidos:</div>
          <div className="PokeCharge">Ataques Cargados:</div>
        </div>
      </div>
    </div>
  );
}
