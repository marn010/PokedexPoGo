import { Link } from "react-router-dom";

import "./Navigation.css";


const  Navigation =() => {
  return (
    <div className="NavBar">
      <Link to="/">PokemonGo</Link>
      {/* <div className="Navitem">
        <Link to="/">Home </Link>
      </div> */}
      <div className="Navitem">
        <Link to="/Pokedex">Pokedex </Link>
      </div>
      <div className="Navitem">
        <Link to="/PvP">PvP</Link>
      </div>
      {/* <div className="Navitem">
      <Link to="/Raids">Raids </Link>
      </div> */}
      {/* <div className="Navitem">
        <p></p>
      </div> */}
    </div>
  );
}
export default Navigation;
