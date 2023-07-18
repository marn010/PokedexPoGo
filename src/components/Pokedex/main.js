import "./pokedex.css";

import { Link } from "react-router-dom";

import Pokemon from "./Pokemon/main";

import db from '../db/db.json';

export default function pokedex() {
  /* console.log("Try: " + db.pokes[0].id) */
  return (
    <div className="Pokedex">
      <h2>Pokedex Page!</h2>
      <div className="Pokemon">
        <div className="PokemonPic">
          <Link to="/Pokemon">
            <img src="/assets/001.png" alt="Pokemon" />
          </Link>
        </div>
        <div className="PokemonInfo">
          
          <p># {db.pokes[0].id}{db.pokes[0].Name}</p>
        </div>
        <div>
          <p>Tipos</p>
        </div>
      </div>
      {/* <Pokemon/> */}
    </div>
  );
}
