import { useLocation } from "react-router-dom";
import "./pokemon.css";

export default function Pokemon() {
  let id = useLocation();
  let idx = id.state.id;
  let Poke = id.state.db.pokes[idx];
  /* console.log(JSON.stringify(id.state.db.pokes[idx])) */
  console.log("Try: " + id.state.id);

  return (
    <div className="PokeDetail">
      <h3>{Poke.Name}</h3>
      <div className="PokeResume">
        <div className="PokePic">
          <img src={Poke.PokePic} alt="Pokemon" />
        </div>
        <div className="PokeInfo">
          <div className="PokeType">
            <p>Tipos:</p>
            {Poke.Types.map((item, id) => {
              return <text key={id}>{item.Type + " "}</text>;
            })}
          </div>
          <div className="PokeFast">
            <p>Ataques Rapidos:</p>
            {Poke.FastMove.map((item, id) => {
              return <text key={id}>{item.FastMove + " "}</text>;
            })}
          </div>
          <div className="PokeCharge">
            <p>Ataques Cargados:</p>
            {Poke.ChargedMove.map((item, id) => {
              return <text key={id}>{item.ChargedMove + " "}</text>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
