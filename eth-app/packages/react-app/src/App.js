import React, { useEffect, useState } from "react";

import useWeb3Modal from "./hooks/useWeb3Modal";


// import { useQuery } from "@apollo/react-hooks";
//import { Contract } from "@ethersproject/contracts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//import { getDefaultProvider } from "@ethersproject/providers";
//import React, { useEffect, useState } from "react";

// For readOnChainData() function
//import { addresses, abis } from "@project/contracts";

// import GET_TRANSFERS from "./graphql/subgraph";

import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Profile from "./components/Profile.js";
import Mint from "./components/Mint.js";
import { Modal } from "web3modal";

/*
async function readOnChainData() {
  // Should replace with the end-user wallet, e.g. Metamask
  const defaultProvider = getDefaultProvider();
  // Create an instance of an ethers.js Contract
  // Read more about ethers.js on https://docs.ethers.io/v5/api/contract/contract/
  const ceaErc20 = new Contract(addresses.ceaErc20, abis.erc20, defaultProvider);
  // A pre-defined address that owns some CEAERC20 tokens
  const tokenBalance = await ceaErc20.balanceOf("0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C");
  console.log({ tokenBalance: tokenBalance.toString() });
}
*/

function App() {

  const [account, setAccount] = useState("");
  const [rendered, setRendered] = useState("");
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

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
        return;
      }
    }
    fetchAccount();

  }, [account, provider, setAccount, setRendered]);
  // const { loading, error, data } = useQuery(GET_TRANSFERS); // For use with GraphQL
  // For GraphQl
  // React.useEffect(() => {
  //   if (!loading && !error && data && data.transfers) {
  //     console.log({ transfers: data.transfers });
  //   }
  // }, [loading, error, data]);

  function wallentButtonClicked() {
    if (!provider) {
      loadWeb3Modal();
    } else {
      let response = window.confirm("Are you sure you want to sign out?");
      if (response) {
        logoutOfWeb3Modal();
      } else {
        return;
      }
    }
  }

  return (
    <Router>
      <div className="App">
        <Navbar handleWalletConnect={wallentButtonClicked} rendered={!rendered ? "Connect Wallet" : rendered + ""}></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/mint">
            <Mint />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
