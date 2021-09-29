import { NFTStorage } from 'nft.storage';
import { NFT_STORAGE_API_KEY, NETWORKS } from "../constants";
const contractABI = require("../contracts/NFT721.json");
const tokenAddressFile = require("../contracts/nft721-token-address.json");
const contractAddress = tokenAddressFile.NFT721_Token;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(NETWORKS.ropsten.rpcUrl);


export async function mint({ name, description, image }) {

  const tokenURI = await storeNftData(name, description, image);

  window.contract = await new web3.eth.Contract(contractABI, contractAddress);

  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    data: window.contract.methods
      .mintNFT(window.ethereum.selectedAddress, tokenURI)
      .encodeABI(),
  };

  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      success: true,
      status:
        "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
        txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "😥 Something went wrong: " + error.message,
    };
  }

}


async function storeNftData({ name, description, image, contract, }) {

  // First we use the nft.storage client library to add the image and metadata to IPFS / Filecoin
  const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });
  const metadata = await client.store({
    name,
    description,
    image
  });

  // the returned metadata.url has the IPFS URI we want.
  return metadata.url;
}
