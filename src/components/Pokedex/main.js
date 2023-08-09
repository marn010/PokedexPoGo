import "./pokedex.css";

import { Link } from "react-router-dom";

import db from "../db/db.json";

export default function pokedex() {
  /* console.log("Try: " + db.pokes[0].id) */
  return (
    <div className="Pokedex">
      <h2>Pokedex Page!</h2>
      {db.pokes.map((item, id) => {
        return (
          <div className="Pokemon" key={id}>
            <div className="PokemonPic">
              <Link
                to="/Pokemon"
                state={{
                  id: db.pokes[id].id,
                  db: db,
                }}
              >
                <img src={item.PokePic} alt={item.Name} />
              </Link>
            </div>
            <div className="PokemonInfo">
              <text># {db.pokes[id].PokeNumber + " " + db.pokes[id].Name}</text>
              <p>Tipos: </p>
              {db.pokes[id].Types.map((item, idx) => {
                return <text>{item.Type} </text>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
