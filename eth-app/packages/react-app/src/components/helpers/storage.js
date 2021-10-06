import { NFTStorage, File } from 'nft.storage';
import { NFT_STORAGE_API_KEY } from '../../constants';

export const storeNftData = async (name, description, file) => {

    const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });
    const metadata = await client.store({
        name: name,
        description: description,
        image: new File([file], file.name, { type: file.type })
    });
    return metadata;
}

export default storeNftData;