import React from "react";
import "./App.css";
import Header from "./components/Header";
import SideDiv from "./components/SideDiv";
import AuctionsTable from "./components/AuctionsTable";

function App() {
  return <div className="App">
    <div className="centerDiv" >
      <SideDiv/>
      <AuctionsTable/>
    </div>
  </div>;
}

export default App;
