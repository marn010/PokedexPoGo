import "./main.css";

import db from "../db/pvp/db.json";

export default function PvP() {
  let GreatLeague = db.rank[0];
  let UltraLeague = db.rank[1];
  let MasterLeague = db.rank[2];

  return (
    <div className="PvP">
      <h2>PvP Page</h2>
      <div className="PvPLigas">
        <div className="PvPGL">
          <h3>Great League</h3>
          {GreatLeague.Great?.map((item, id) => {
            let idx = id;
            return (
              <div className="PvPPoke" key={id}>
                <div className="Rank">
                  {item.id}#{id + 1}
                </div>
                <div className="Poke">{item.Name}</div>
                <div className="IV"></div>
                <div className="CP"></div>
                <div className="Moves">
                  {item.Moves.map((item, id) => {
                    return (
                      <div key={id}>
                        <div>{item.Name}</div>
                        <div>{item.Type}</div>
                        <div>{item.Energy}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="PvPUL">
          <h3>Ultra League</h3>
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
          <h3>Master League</h3>
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
