import "./main.css";

import db from "../db/pvp/db.json";

export default function PvP() {
  let GreatLeague = db.rank[0];
  let UltraLeague = db.rank[1];
  let MasterLeague = db.rank[2];

  return (
    <div className="PvP">
      <h2 className="PvPTitle">PvP Page</h2>
      <div className="PvPLigas">
        <div className="PvPGL">
          <h3 className="PvPTitle">Great League</h3>
          {GreatLeague.Great?.map((item, id) => {
            return (
              <div className="PvPPoke" key={id}>
                <div className="Rank">
                  #{item.id}
                  {/* {id + 1} */}
                </div>
                <div className="Poke">{item.Name}</div>
                <div className="IV">
                  IV's: {item.IV[0].ATK} {item.IV[0].DEF} {item.IV[0].STA}
                </div>
                <div className="CP">cp: {item.CP}</div>
                <div className="Moves">
                  {item.Moves.map((item, id) => {
                    return (
                      <div key={id} className="MovesItem">
                        <p>{item.Name}</p>
                        <p>{item.Energy}</p>
                        <div>{item.Type}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="PvPUL">
          <h3 className="PvPTitle">Ultra League</h3>
          {UltraLeague.Ultra?.map((item, id) => {
            return (
              <div className="PvPPoke" key={id}>
                <div>{item.id}a</div>
                <div>{item.Name}</div>
              </div>
            );
          })}
        </div>
        <div className="PvPML">
          <h3 className="PvPTitle">Master League</h3>
          {MasterLeague.Master?.map((item, id) => {
            return (
              <div className="PvPPoke" key={id}>
                <div>{item.id}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
