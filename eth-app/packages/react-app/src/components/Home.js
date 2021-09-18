import React from "react";

import logo from "../ethereumLogo.png";
import { Body, Image } from "./styling";

export default function Home() {
    return (
        <div>
            <Body>
                <Image src={logo} alt="react-logo" />
                <p>
                    We are building SomethingCool.
                </p>
                {/* Remove the "hidden" prop and open the JavaScript console in the browser to see what this function does
                <Button hidden onClick={() => readOnChainData()}>
                    Read On-Chain Balance
                </Button>
                */}
            </Body>
        </div>
    )
}