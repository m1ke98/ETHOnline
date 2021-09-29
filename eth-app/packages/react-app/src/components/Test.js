import { Body, Title, Button } from "./styling";
import { Contract } from "@ethersproject/contracts";

import { addresses, abis } from "@project/contracts";

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

export default function Test({ account, provider }) {

    async function _mintToken() {
        const poeNft = new Contract(
            addresses.poeNft,
            abis.PoeNft,
            account
        );

        try {
            const tx = await poeNft.mintToken(account, "https://your-metadata-api.herokuapp.com/api/token/");

            const receipt = await tx.wait();

            if (receipt.status === 0) {
                throw new Error("Transaction failed");
            }
        } catch (error) {
            if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
                return;
            }
            console.error(error);
        }
    }

    return (
        <div>
            <Title>Test</Title>
            <Body>
                <Button onClick={_mintToken}>Mint</Button>
            </Body>
        </div>
    )
}