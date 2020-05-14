import React from "react";
import SideDiv from "./SideDiv";
import "../public/css/side.css";
import RighBidders from "./RightBidders";

function Bidders() {
  return <div className="App">
    <SideDiv/>
    <RighBidders/>
  </div>;
}

export default Bidders;
