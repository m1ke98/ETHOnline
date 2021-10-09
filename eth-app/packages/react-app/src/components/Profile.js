import { MintBody, Title, Body } from "./styling";
import image2 from "../assets/image2.png";
import ProfileCard from "./ProfileCard";
import { SignInButton } from "./styling/index";
import { Typography } from "@mui/material";
import metamaskTransparent from "../assets/metamaskTransparent.png";
import wcIcon from "../assets/wconnet.svg";
import SignInPrompt from "./SignInPrompt";

export default function Profile({
    provider,
    web3Modal,
    account
}) {
    const profileCards = {};

    if (provider) {
        return (
            <div>
                <Title>Profile</Title>
                <MintBody>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <ProfileCard cardImage={image2} imageTitle={"Test Image Title"}></ProfileCard>
                            </div>
                            <div className="col-sm">
                                <ProfileCard cardImage={image2} imageTitle={"Test Image Title"}></ProfileCard>

                            </div>
                            <div className="col-sm">
                                <ProfileCard cardImage={image2} imageTitle={"Test Image Title"}></ProfileCard>
                            </div>
                        </div>
                    </div>
                </MintBody>
            </div>
        )
    }

    return (<SignInPrompt web3Modal={web3Modal} />);
}