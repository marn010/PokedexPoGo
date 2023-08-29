import { Component } from "react";

export default class PokemonTypes extends Component {
  render() {
    let { Poke, color } = this.props;
    return (
      <>
        <p>Tipos: </p>
        {Poke.Types.map((item, id) => {
          let xpoke = item.Type;
          return (
            <span
              key={id}
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
      </>
    );
  }
}
