import db from "../db/pvp/db.json";
import color from "../db/dbTypes.json";

import "./PvP.css";
import PvPLeagues from "./PvPLeagues";

export default function PvP() {
  let GreatLeague = db.Great;
  let UltraLeague = db.Ultra;
  let MasterLeague = db.Master;

  return (
    <div className="PvP">
      <h2 className="PvPTitle">PvP Page</h2>
      <PvPLeagues
        GreatLeague={GreatLeague}
        UltraLeague={UltraLeague}
        MasterLeague={MasterLeague}
        color={color}
      />
    </div>
  );
}
