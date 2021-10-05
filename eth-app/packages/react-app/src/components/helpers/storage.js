import { NFTStorage, File } from 'nft.storage';

require('dotenv').config();
const NFT_STORAGE_API_KEY = process.env.NFT_STORAGE_API_KEY;



export const storeNftData = async (name, description, file) => {

    const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });
    client.store({
        name: name,
        description: description,
        image: new File([file], file.name, { type: file.type })
    }).then(metadata => {
        return metadata;
    })
}