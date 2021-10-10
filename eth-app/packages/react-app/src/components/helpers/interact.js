import { Contract } from "@ethersproject/contracts";
import { addresses, abis } from "@project/contracts";

require("dotenv").config();

export const mintToken = async (account, provider, tokenURI) => {

    const signer = provider.getSigner();
    const poeNFT = new Contract(addresses.poeNft, abis.poeNft, signer);

    try {
        const txReceipt = await poeNFT.mintToken(account, tokenURI);

        await txReceipt.wait();
        return {
            success: true,
            status: "Transaction Hash: " + txReceipt.hash
        }
    } catch (error) {
        return {
            success: false,
            status: error.message
        }
    }
}

export const mintTokenForUri = async (account, provider, tokenURI) => {

    const signer = provider.getSigner();
    const poeNFT = new Contract(addresses.poeNft, abis.poeNft, signer);

    try {
        const txReceipt = await poeNFT.mintToken(account, tokenURI);

        await txReceipt.wait();
        return {
            success: true,
            status: "Transaction Hash: " + txReceipt.hash
        }
    } catch (error) {
        return {
            success: false,
            status: error.message
        }
    }
}
