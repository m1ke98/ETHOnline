import React from "react";

import logo from "../assets/New Poe 6.png";
import { Body, Image } from "./styling";

export default function Home() {
    return (
        <div>
            <Body>
                <Image src={logo} alt="react-logo" />
            </Body>
        </div>
    )
}