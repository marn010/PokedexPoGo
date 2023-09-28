import { Component } from "react";

export default class PvPLeague extends Component{
  render(){
    let {League, color} = this.props
    return(
      <>
        {League?.map((item, id) => {
            return (
              <div className="PvPPoke" key={id}>
                <div className="Rank">#{item.id}</div>
                <div className="Poke">
                  {item.Name}
                  {item.Types.map((item, id) => {
                    let type = item.Type;
                    return (
                      <span
                        style={{
                          backgroundColor: color[type].ColorType,
                          color: color[type].ColorFont,
                        }}
                      >
                        {item.Type}
                      </span>
                    );
                  })}
                </div>
                <div className="IV">
                  IV's: {item.IV[0].ATK} {item.IV[0].DEF} {item.IV[0].STA}
                </div>
                <div className="CP">cp: {item.CP}</div>
                <div className="Moves">
                  {item.Moves.map((item, id) => {
                    let type = item.Type;
                    return (
                      <div key={id} className="MovesItem">
                        <p>{item.Name}</p>
                        <p>{item.Energy}</p>
                        <span
                          className=""
                          style={{
                            backgroundColor: color[type].ColorType,
                            color: color[type].ColorFont,
                          }}
                        >
                          {item.Type}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </>
    )
  }
}