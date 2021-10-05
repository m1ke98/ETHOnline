import { Contract } from "@ethersproject/contracts";
import { addresses, abis } from "@project/contracts";


export const mintToken = async (account, provider) => {
    const tokenURI = "https://gateway.pinata.cloud/ipfs/QmPRACzUUf4dZjDjMk8a7QhNuDXb952uHB5ruNieWURND9";

    const signer = provider.getSigner();
    const poeNFT = new Contract(addresses.poeNft, abis.poeNft, signer);

    try {
        const txHash = await poeNFT.mintToken(account, tokenURI);

        await txHash.wait();
        return {
            success: true,
            status: txHash
        }
    } catch (error) {
        return {
            success: false,
            status: error.message
        }
    }
}

export const testMintLocal = async (account, provider, tokenURI, contractAddress, abi) => {

    const signer = provider.getSigner();
    const poeNFT = new Contract(contractAddress, abi, signer);

    try {
        const txHash = await poeNFT.mintToken(account, tokenURI);

        await txHash.wait();
        return {
            success: true,
            status: txHash
        }
    } catch (error) {
        return {
            success: false,
            status: error.message
        }
    }
}