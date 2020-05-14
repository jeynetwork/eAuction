import React from "react";
import "../public/css/Header.css";
import "../public/css/ionicons/css/ionicons.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header({ children }) {
  return (
    <div>
      <div className="Header">
        <h3>eAuction</h3>
        <ul>
          <Link to="/auctions" exact>
            <li>
              <i className="ion-clipboard"></i>
              auctions
            </li>
          </Link>

          {/* <Link to="/bidders">
            <li>
              <i className="ion-ios-keypad"></i>
              Bidders
            </li>
          </Link> */}

          <Link to="/sellers">
            <li>
              <i className="ion-android-funnel"></i>
              Sellers
            </li>
          </Link>

          <Link to="/account">
            <li>
              <i className="ion-android-lock"></i>
              Account
            </li>
          </Link>
        </ul>
      </div>
      {children}
    </div>
  );
}

export default Header;
