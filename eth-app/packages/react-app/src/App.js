import React, { useEffect, useState, useMemo, useCallback } from "react";
import useWeb3Modal from "./hooks/useWeb3Modal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getTxHistoryByAddress } from "./components/helpers/http-client";
import { addresses } from "@project/contracts";

import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Profile from "./components/Profile.js";
import Mint from "./components/Mint.js";
import Test from "./components/Test.js";
import Quiz from "./components/Quiz.js";

function App() {

  const [account, setAccount] = useState("");
  const [rendered, setRendered] = useState("");
  const [txHistory, setTxHistory] = useState(null);
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  const [network, setNetwork] = useState(undefined);


  useEffect(() => {
    async function fetchAccount() {
      try {
        if (!provider) {
          return;
        }

        // Load the user's accounts.
        const accounts = await provider.listAccounts();
        setAccount(accounts[0]);

        try {
          // Resolve the ENS name for the first account.
          const name = await provider.lookupAddress(accounts[0]);

          // Render either the ENS name or the shortened account address.
          if (name) {
            setRendered(name);
          } else {
            setRendered(account.substring(0, 6) + "..." + account.substring(36));
          }
        } catch (err) {
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
  }, [provider, account, setAccount, setRendered]);




  useEffect(() => {
    async function checkNetwork() {
      try {
        if (!provider) {
          return;
        }

        const networkInfo = await provider.getNetwork();
        if (networkInfo) {
          switch (networkInfo.chainId) {
            case 1:
              setNetwork('mainnet');
              break;
            case 3:
              setNetwork('ropsten');
              break;
            default:
              setNetwork('localhost');
          }
        }

      } catch (err) {
        console.error(err);
        return;
      }
    }
    checkNetwork();
  }, [provider]);

  useEffect(() => {
    async function fetchTransactions() {
      if (!provider || !network) {
        return;
      }
      console.log('Wallet is connected to: ' + network);
      // Load accounts history of transactions with our contract   
      if (network && network !== 'localhost') {
        const result = await getTxHistoryByAddress(account, addresses[network].poeNft);
        console.log(result);
        setTxHistory(result.txHistory);
      }
    }
    fetchTransactions();
  }, [account, provider, network]);


  function web3Modal() {
    if (!provider) {
      /* catch prevents errors when user closes wallet modal*/
      loadWeb3Modal().then(() => { }).catch((err) => { console.log(err) });
    } else {
      logoutOfWeb3Modal().then(() => { }).catch((err) => { console.log(err) });
    }
  }

  return (
    <Router>
      <div className="App">
        <Navbar web3Modal={web3Modal} rendered={rendered}></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile web3Modal={web3Modal} provider={provider} account={account} txHistory={txHistory} />
          </Route>
          <Route path="/mint">
            <Mint web3Modal={web3Modal} provider={provider} account={account} />
          </Route>
          <Route path="/test">
            <Test account={account} provider={provider} test={txHistory} />
          </Route>
          <Route path="/quiz">
            <Quiz account={account} provider={provider} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
