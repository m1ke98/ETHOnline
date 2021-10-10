import {Title, Body} from "./styling";
import image2 from "../assets/image2.png";
import image1 from "../assets/New Poe 6.png";
import image3 from "../assets/poe.png";

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
                                <ProfileCard cardImage={image1} name={"Quiz #1"} description={"60%"}></ProfileCard>
                            </div>
                            <div className="col-sm">
                            <ProfileCard cardImage={image2} name={"Quiz #2"} description={"80%"}></ProfileCard>

                            </div>
                            <div className="col-sm">
                            <ProfileCard cardImage={image3} name={"Quiz #3"} description={"100%"}></ProfileCard>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm">
                            </div>
                            <div className="col-sm">

                            </div>
                            <div className="col-sm">
                            </div>
                        </div>
                    </div>
                </Body>
            </div>
        )
    }

    return (<SignInPrompt web3Modal={web3Modal} />);
}