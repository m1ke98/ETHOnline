import { SignInButton } from "./styling/index";
import { Typography } from "@mui/material";
import metamaskTransparent from "../assets/metamaskTransparent.png";
// import wcIcon from "../assets/wconnet.svg";
import { Body } from "./styling";

export default function SignInPrompt({
    web3Modal
}) {

    return (<div>
        <Body>
            <div style={{ display: 'inline-block' }} >
                <img src={metamaskTransparent} alt="metamask" height="200" style={{ padding: 1 + 'rem' }} />
                {/* <img src={wcIcon} alt="wallent-connect" height="200" style={{ padding: 1 + 'rem' }} /> */}
            </div>
            <SignInButton onClick={web3Modal} variant="contained" style={{ marginTop: 2 + 'rem' }}>{"Connect Wallet"}</SignInButton>
            <Typography sx={{ marginTop: 2 }}>Please Connect Wallet to see your Profile</Typography>
        </Body>
    </div >);
}