import "./pokedex.css";

import { Link } from "react-router-dom";

import db from "../db/db.json";

export default function pokedex() {
  /* console.log("Try: " + db.pokes[0].id) */
  return (
    <div className="Pokedex">
      <h2>Pokedex Page!</h2>
      {db.pokes.map((item,id) => {
        return (
          <div className="Pokemon">
            <div className="PokemonPic">
              <Link to="/Pokemon">
                <img src={item.PokePic} alt={item.Name} />
              </Link>
            </div>
            <div className="PokemonInfo">
              <p>
                # {db.pokes[id].id} 
                {db.pokes[id].Name}
              </p>
            </div>
            <div>
              <p>Tipos</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
