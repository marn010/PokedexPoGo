import "./Main.css";

import Pokedex from "../Pokedex/main";
import PvP from "../PvP/main";

export default function Main() {
  return (
    <div className="Main">
      <h1>Main here works!!</h1>
      <Pokedex/>
      <PvP/>
    </div>
  );
}
