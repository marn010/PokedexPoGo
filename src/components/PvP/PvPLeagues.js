import { Component } from "react";
import PvPLeague from "./PvPLeague";

export default class PvPLeagues extends Component {
  render() {
    let { GreatLeague, UltraLeague, MasterLeague, color } = this.props;
    return (
      <div className="PvPLigas">
        <div className="PvPGL">
          <h3 className="PvPTitle">Great League</h3>
          <PvPLeague League={GreatLeague} color={color} />
        </div>
        <div className="PvPUL">
          <h3 className="PvPTitle">Ultra League</h3>
          <PvPLeague League={UltraLeague} color={color} />
        </div>
        <div className="PvPML">
          <h3 className="PvPTitle">Master League</h3>
          <PvPLeague League={MasterLeague} color={color} />
        </div>
      </div>
    );
  }
}
