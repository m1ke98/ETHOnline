import { useState } from "react";
import { Body, Title, Button } from "./styling";
import { mintToken } from "./helpers/interact.js";

const Test = (props) => {

    const account = props.account;
    const provider = props.provider;
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
                <br/>
                <p id="account">
                    Current Address: {account}
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