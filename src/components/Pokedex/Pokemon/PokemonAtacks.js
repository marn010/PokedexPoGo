import { Component } from "react";

export default class PokemonAtacks extends Component {
  render() {
    let {Poke} = this.props;
    return (
      <>
        <div className="PokeFast">
          <p>Ataques Rapidos:</p>
          {Poke.FastMove.map((item, id) => {
            return <span key={id}>{item.FastMove + " "}</span>;
          })}
        </div>
        <div className="PokeCharge">
          <p>Ataques Cargados:</p>
          {Poke.ChargedMove.map((item, id) => {
            return <span key={id}>{item.ChargedMove + " "}</span>;
          })}
        </div>
      </>
    );
  }
}
