import { MintBody, Title } from "./styling";
import image2 from "../assets/image2.png";
import ProfileCard from "./styling/ProfileCard";

export default function Profile() {

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