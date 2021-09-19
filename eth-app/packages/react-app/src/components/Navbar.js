import React, { useEffect, useState }  from "react";

import { StyledLink, Button } from "./styling";
import useWeb3Modal from "../hooks/useWeb3Modal";

function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {

    const [account, setAccount] = useState("");
    const [rendered, setRendered] = useState("");
  
    useEffect(() => {
      async function fetchAccount() {
        try {
          if (!provider) {
            return;
          }
  
          // Load the user's accounts.
          const accounts = await provider.listAccounts();
          setAccount(accounts[0]);
  
          // Resolve the ENS name for the first account.
          const name = await provider.lookupAddress(accounts[0]);
  
          // Render either the ENS name or the shortened account address.
          if (name) {
            setRendered(name);
          } else {
            setRendered(account.substring(0, 6) + "..." + account.substring(36));
          }
        } catch (err) {
          setAccount("");
          setRendered("");
          console.error(err);
        }
      }
      fetchAccount();
    }, [account, provider, setAccount, setRendered]);

  
    return (
      <Button
        onClick={() => {
          if (!provider) {
            loadWeb3Modal();
          } else {
            logoutOfWeb3Modal();
          }
        }}
      >
        {rendered === "" && "Connect Wallet"}
        {rendered !== "" && rendered}
      </Button>
    );
}

export default function Navbar() {
    const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

    return (
      <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
          <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav me-auto">
              <li class="nav-item active">
                <h2 class="dapp-title">SomethingCool</h2>
              </li>
            </ul>
          </div>
          <div class="w-50 d-flex mx-auto order-0 justify-content-center">
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/profile">Profile</StyledLink>
            <StyledLink to="/mint">Mint</StyledLink>
          </div>
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <div class="login-button">
                  <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
