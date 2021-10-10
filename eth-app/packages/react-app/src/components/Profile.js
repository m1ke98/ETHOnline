import {Title, Body} from "./styling";
import image2 from "../assets/image2.png";
import ProfileCard from "./ProfileCard";
import SignInPrompt from "./SignInPrompt";

export default function Profile({
    provider,
    web3Modal,
    account,
    txHistory
}) {
    const profileCards = {};

    if (provider) {
        return (
            <div>
                <Title>Profile</Title>
                <Body>
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
                </Body>
            </div>
        )
    }

    return (<SignInPrompt web3Modal={web3Modal} />);
}