import { Contract } from "@ethersproject/contracts";
import { addresses, abis } from "@project/contracts";

require("dotenv").config();

export const getTokenUri = async (account, provider, tokenId) => {
    const signer = provider.getSigner();
    const poeNFT = new Contract(addresses.poeNft, abis.poeNft, signer);

    try {
        const tokenURI = await poeNFT.tokenURI(tokenId);

        console.log(tokenURI);

        return {
            success: true,
            status: tokenURI
        }
    } catch (error) {
        return {
            success: false,
            status: error.message
        }
    }
}

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
