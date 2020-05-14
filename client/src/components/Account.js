import React from "react";
import AccountDetails from "./AccountDetails";
import AuctionsList from "./AuctionsList";
import NewAuction from "./NewAuction";

function Account() {
  return <div className="App" >
    <AccountDetails/>
    <div className="midAuctions" >
      <AuctionsList/>
    </div>
    <div className="newAuctionForm" >
      <NewAuction/>
    </div>
  </div>;
}

export default Account