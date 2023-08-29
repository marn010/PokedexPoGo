import { useContext } from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";
import GlobalState from "../../globalState";

const  Navigation =() => {
  const { state: globalState } = useContext(GlobalState);
  const { updateSearchValue } = useContext(GlobalState);
  /* const { updateToken } = useContext(GlobalState); */
  const searchAnyElse = (e) => {
    e.preventDefault();
    console.log(globalState.searchValue);
    /* setSearchValue(globalState.searchValue); */
    /* updateSearchValue(searchValue.toLowerCase()); */
  };
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
      <form inline onSubmit={searchAnyElse}>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => updateSearchValue(e.target.value.toLowerCase())}
          placeholder="Search..."
          className=""
        />
      </form>
    </div>
  );
}
export default Navigation;
