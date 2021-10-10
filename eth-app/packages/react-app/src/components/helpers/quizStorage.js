import { NFTStorage, File } from 'nft.storage';
import logo from "./poe.png";

require("dotenv").config();

const NFT_STORAGE_API_KEY = process.env.REACT_APP_NFT_STORAGE_API_KEY;

export const storeQuizData = async (name, address, score, imageId) => {

    const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });
    const metadata = await client.store({
        name: name,
        description: 'PoE Certificate',
        image: new File([logo], 'poe.png', {
            type: 'image/png',
        }),
        properties: {
            address: address,
            score: score,
        },
    });
    return metadata;
}

export default storeQuizData;