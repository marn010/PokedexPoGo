import { Link } from "react-router-dom";

import "./pokedex.css";
import { Component } from "react";
import PokemonTypes from "./Pokemon/PokemonTypes";

export default class PokemonCard extends Component {
  render() {
    let { id, item, db, color } = this.props;
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
          <PokemonTypes Poke={db.pokes[id]} color={color} />
        </div>
      </div>
    );
  }
}
