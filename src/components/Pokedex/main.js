import "./pokedex.css";

import { Link } from "react-router-dom";

import db from "../db/db.json";
import color from "../db/dbTypes.json";
import React, { useContext } from "react";
import GlobalState from "../../globalState";

const Pokedex = (props) => {
  const { state: globalState } = useContext(GlobalState);
  /* let url ="https://drive.google.com/uc?export=view&id="; */
  /* console.log("Try: " + db.pokes[0].id) */
  return (
    <div className="Pokedex">
      <h2>Pokedex Page!</h2>
      {db.pokes.filter((item) =>
          item.Name?.toLowerCase().includes
          (globalState.searchValue)).map((item) => {
            let id = item.id
          return (
            <div className="Pokemon" key={id}>
              <div className="PokemonPic">
                <Link
                  to="/Pokemon"
                  state={{
                    id: db.pokes[id].id,
                    db: db,
                    color: color,
                  }}
                >
                  <img src={item.PokePic} alt={item.Name} />
                </Link>
              </div>
              <div className="PokemonInfo">
                <text>
                  # {db.pokes[id].PokeNumber + " " + db.pokes[id].Name}
                </text>
                <p>Tipos: </p>
                {db.pokes[id].Types.map((item, idx) => {
                  let xpoke = item.Type;
                  return (
                    <text
                      key={idx}
                      className="PokeTypes"
                      style={{
                        background: color[xpoke].ColorType,
                        color: color[xpoke].ColorFont,
                      }}
                    >
                      {item.Type}{" "}
                    </text>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Pokedex;
/*
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
                    color: color,
                  }}
                >
                  <img src={item.PokePic} alt={item.Name} />
                </Link>
              </div>
              <div className="PokemonInfo">
                <text># {db.pokes[id].PokeNumber + " " + db.pokes[id].Name}</text>
                <p>Tipos: </p>
                {db.pokes[id].Types.map((item, idx) => {
                  let xpoke = item.Type;
                  return (
                    <text
                      key={idx}
                      className="PokeTypes"
                      style={{
                        background: color[xpoke].ColorType,
                        color: color[xpoke].ColorFont,
                      }}
                    >
                      {item.Type}{" "}
                    </text>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
*/

/*
<div className="Pokedex">
      <h2>Pokedex Page!</h2>
      {db.pokes.filter((item) =>
          item.Name?.toLowerCase().includes(globalState.searchValue)
        )
        .map((item, id) => {
          return (
            <div className="Pokemon" key={id}>
              <div className="PokemonPic">
                <Link
                  to="/Pokemon"
                  state={{
                    id: db.pokes[id].id,
                    db: db,
                    color: color,
                  }}
                >
                  <img src={item.PokePic} alt={item.Name} />
                </Link>
              </div>
              <div className="PokemonInfo">
                <text>
                  # {db.pokes[id].PokeNumber + " " + db.pokes[id].Name}
                </text>
                <p>Tipos: </p>
                {db.pokes[id].Types.map((item, idx) => {
                  let xpoke = item.Type;
                  return (
                    <text
                      key={idx}
                      className="PokeTypes"
                      style={{
                        background: color[xpoke].ColorType,
                        color: color[xpoke].ColorFont,
                      }}
                    >
                      {item.Type}{" "}
                    </text>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
*/
