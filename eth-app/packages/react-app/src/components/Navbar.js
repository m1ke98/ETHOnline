import React from "react";
import { StyledLink, Button } from "./styling";
import logo from "../assets/New Poe 6.png";

export default function Navbar({
  web3Modal,
  rendered
}) {

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <h2 className="dapp-title"><img src={logo} alt="nav-logo" height="90" width="auto" /></h2>
            </li>
          </ul>
        </div>
        <div className="w-50 d-flex mx-auto order-0 justify-content-center">
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/profile">Profile</StyledLink>
          <StyledLink to="/mint">Mint</StyledLink>
          <StyledLink to="/test">Test</StyledLink>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <div className="button">
                <Button onClick={web3Modal}>{(rendered && rendered !== "") ? rendered : "Connect Wallet"}</Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
