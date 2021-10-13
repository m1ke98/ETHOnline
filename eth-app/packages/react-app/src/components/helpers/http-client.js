const fetch = require('node-fetch');
require("dotenv").config();
const ETHERSCAN_API_ROPSTEN = process.env.REACT_APP_ETHERSCAN_ROPSTEN;
const ETHERSCAN_API_KEY = process.env.REACT_APP_ETHERSCAN_KEY;

export const getTxHistoryByAddress = async (userAddress, contractAddress) => {
    const response = await fetch(`${ETHERSCAN_API_ROPSTEN}/api
?module=account
&action=tokennfttx
&contractaddress=${contractAddress}
&address=${userAddress}
&page=1
&offset=100
&startblock=0
&endblock=27025780
&sort=asc
&apikey=${ETHERSCAN_API_KEY}`);
    const data = await response.json();
    if (data.message === "OK") {
        return {
            success: true,
            txHistory: data.result
        }
    } else {
        return {
            success: false,
            txHistory: data.message
        }
    }
}

/*{
    EXAMPLE RESPONSE:
   "status":"1",
   "message":"OK",
   "result":[ // Result is array of transaction objects
      {
         "blockNumber":"4708120",
         "timeStamp":"1512907118",
         "hash":"0x031e6968a8de362e4328d60dcc7f72f0d6fc84284c452f63176632177146de66",
         "nonce":"0",
         "blockHash":"0x4be19c278bfaead5cb0bc9476fa632e2447f6e6259e0303af210302d22779a24",
         "from":"0xb1690c08e213a35ed9bab7b318de14420fb57d8c",
         "contractAddress":"0x06012c8cf97bead5deae237070f9587f8e7a266d",
         "to":"0x6975be450864c02b4613023c2152ee0743572325",
         "tokenID":"202106", // Token ID!
         "tokenName":"CryptoKitties",
         "tokenSymbol":"CK",
         "tokenDecimal":"0",
         "transactionIndex":"81",
         "gas":"158820",
         "gasPrice":"40000000000",
         "gasUsed":"60508",
         "cumulativeGasUsed":"4880352",
         "input":"deprecated",
         "confirmations":"7990490"
      },
      {
         "blockNumber":"4708161",
         "timeStamp":"1512907756",
         "hash":"0x9626e7064b68b5463cf677e10815a0b394645a0bfa245f26a2de6074324e83ff",
         "nonce":"1",
         "blockHash":"0xe1c6cbc39a723496f4cbc3e70241012854f2e88b4d2d5f339d8f0a4a1cc406d8",
         "from":"0xb1690c08e213a35ed9bab7b318de14420fb57d8c",
         "contractAddress":"0x06012c8cf97bead5deae237070f9587f8e7a266d",
         "to":"0x6975be450864c02b4613023c2152ee0743572325",
         "tokenID":"147739",
         "tokenName":"CryptoKitties",
         "tokenSymbol":"CK",
         "tokenDecimal":"0",
         "transactionIndex":"41",
         "gas":"135963",
         "gasPrice":"40000000000",
         "gasUsed":"45508",
         "cumulativeGasUsed":"3359342",
         "input":"deprecated",
         "confirmations":"7990449"
      }
   ]
} */