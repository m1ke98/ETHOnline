import { useState } from "react";
import { Body, Title, Button } from "./styling";
import { mintToken } from "./helpers/interact.js";

const Test = ({ account, provider, txHistory }) => {

    const [status, setStatus] = useState("");
    const [successful, setSuccess] = useState("");

    const onMintPressed = async () => {
        const { success, status } = await mintToken(account, provider);
        setStatus(status);
        if (success) {
            setSuccess("Success!");
        } else {
            setSuccess("Failed");
        }
    };

    return (
        <div>
            <Title>Test</Title>
            <Body>
                <Button onClick={onMintPressed}>Mint</Button>
                <br />
                <p id="account">
                    Current Address: {account}
                </p>
                <p id="account">
                    Current Addresses transaction history: {JSON.stringify(txHistory)}
                </p>
                <p id="successful">
                    {successful}
                </p>
                <p id="status">
                    {status}
                </p>
            </Body>
        </div>
    )
};

export default Test;