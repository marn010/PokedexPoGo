import "./pokedex.css";

/* import { Link } from "react-router-dom"; */

import db from "../db/dbonline.json";
import color from "../db/dbTypes.json";
import React, { useContext } from "react";
import GlobalState from "../../globalState";
import SearchBar from "../Search/SearchBar";
import PokemonCard from "./PokemonCard";

const Pokedex = (props) => {
  const { state: globalState } = useContext(GlobalState);
//  let url ="https://www.wealthandfreedompackage.com/images/2023/10/07/";
  /* console.log("Try: " + db.pokes[0].id) */
  return (
    <div className="Pokedex">
      <div className="PokedexTitle">
        <h2>Pokedex Page!</h2>
        <SearchBar />
      </div>
      {db.pokes
        .filter((item) =>
          item.Name?.toLowerCase().includes(globalState.searchValue)
        )
        .map((item) => {
          let id = item.id;
          return (
            <PokemonCard id={id} item={item} db={db}color={color}/>
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
                <span># {db.pokes[id].PokeNumber + " " + db.pokes[id].Name}</span>
                <p>Tipos: </p>
                {db.pokes[id].Types.map((item, idx) => {
                  let xpoke = item.Type;
                  return (
                    <span
                      key={idx}
                      className="PokeTypes"
                      style={{
                        background: color[xpoke].ColorType,
                        color: color[xpoke].ColorFont,
                      }}
                    >
                      {item.Type}{" "}
                    </span>
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
                <span>
                  # {db.pokes[id].PokeNumber + " " + db.pokes[id].Name}
                </span>
                <p>Tipos: </p>
                {db.pokes[id].Types.map((item, idx) => {
                  let xpoke = item.Type;
                  return (
                    <span
                      key={idx}
                      className="PokeTypes"
                      style={{
                        background: color[xpoke].ColorType,
                        color: color[xpoke].ColorFont,
                      }}
                    >
                      {item.Type}{" "}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
*/
