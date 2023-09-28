import { useLocation } from "react-router-dom";

import "./pokemon.css";
import PokemonTypes from "./PokemonTypes";
import PokemonAtacks from "./PokemonAtacks";
import Goback from "../../GoBack/GoBackBtn";

export default function Pokemon() {
  let id = useLocation();
  let idx = id.state.id;
  let Poke = id.state.db.pokes[idx];
  let color = id.state.color;

  return (
    <div className="PokeDetail">
      <h3>{Poke.Name}</h3>
      <div className="PokeResume">
        <div className="PokePic">
          <img src={Poke.PokePic} alt="Pokemon" />
        </div>
        <div className="PokeInfo">
          <div className="PokeType">
            <PokemonTypes Poke={Poke} color={color} />
          </div>
          <PokemonAtacks Poke={Poke} />
          <Goback />
        </div>
      </div>
    </div>
  );
}
