import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="NavBar">
      <p>PokemonGo</p>
      <div className="Navitem">
        <p>Home</p>
      </div>
      <div className="Navitem">
        <p>Pokedex</p>
      </div>
      <div className="Navitem">
        <p>PvP</p>
      </div>
      <div className="Navitem">
        <p>Raids</p>
      </div>
      <div className="Navitem">
        <p></p>
      </div>
    </div>
  );
}
