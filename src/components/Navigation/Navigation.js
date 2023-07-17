import "./Navigation.css";

import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="NavBar">
      <Link to="/">PokemonGo</Link>
      <div className="Navitem">
        <Link to="/">Home </Link>
      </div>
      <div className="Navitem">
        <Link to="/Pokedex">Pokedex </Link>
      </div>
      <div className="Navitem">
        <Link to="/PvP">PvP</Link>
      </div>
      <div className="Navitem">
      <Link to="/Raids">Raids </Link>
      </div>
      <div className="Navitem">
        <p></p>
      </div>
    </div>
  );
}
