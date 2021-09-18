import React from "react";
import { useQuery } from "@apollo/react-hooks";
//import { Contract } from "@ethersproject/contracts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import { getDefaultProvider } from "@ethersproject/providers";
//import React, { useEffect, useState } from "react";

// For readOnChainData() function
//import { addresses, abis } from "@project/contracts";

import GET_TRANSFERS from "./graphql/subgraph";

import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Profile from "./components/Profile.js";

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

  const { loading, error, data } = useQuery(GET_TRANSFERS);
  //const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  React.useEffect(() => {
    if (!loading && !error && data && data.transfers) {
      console.log({ transfers: data.transfers });
    }
  }, [loading, error, data]);

  return (
    <Router>
      <div class="app">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
