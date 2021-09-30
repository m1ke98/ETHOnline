import { getDefaultProvider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import { addresses, abis } from "@project/contracts";

export const mintToken = async(account) => {

    const tokenURI = "https://gateway.pinata.cloud/ipfs/QmPRACzUUf4dZjDjMk8a7QhNuDXb952uHB5ruNieWURND9";

    const defaultProvider = getDefaultProvider();
    const poeNFT = new Contract(addresses.poeNft, abis.poeNft, defaultProvider);


    const transactionParameters = {
        to: addresses.poeNft,
        from: account,
        'data': poeNFT.methods.mintToken(account, tokenURI).encodeABI()
    };

    try {
        const txHash = await defaultProvider
            .call({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            });
        return {
            success: true,
            status: "Success!" + txHash
        }
    } catch (error) {
        return {
            success: false,
            status: "Something went wrong: " + error.message
        }
    }
}