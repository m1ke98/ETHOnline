import { Contract } from "@ethersproject/contracts";
import { addresses, abis } from "@project/contracts";

export const mintToken = async(account, provider) => {

    const tokenURI = "https://gateway.pinata.cloud/ipfs/QmPRACzUUf4dZjDjMk8a7QhNuDXb952uHB5ruNieWURND9";

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