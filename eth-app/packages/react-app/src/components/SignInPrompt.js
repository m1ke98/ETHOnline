import { SignInButton } from "./styling/index";
import metamaskTransparent from "../assets/metamaskTransparent.png";
import { Body } from "./styling";

export default function SignInPrompt({
    web3Modal
}) {

    return (<div>
        <Body style={{marginTop:0}}>
            <div style={{ display: 'inline-block' }} >
                <img src={metamaskTransparent} alt="metamask" height="200" style={{ padding: 1 + 'rem' }} />
            </div>
            <SignInButton onClick={web3Modal} variant="contained" style={{ marginTop: 2 + 'rem' }}>{"Connect Wallet"}</SignInButton>
        </Body>
    </div >);
}