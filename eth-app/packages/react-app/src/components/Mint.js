import { MintBody, Title, TitleIcon, PageHeader } from "./styling";
import { GiMonaLisa } from "react-icons/gi";
import { CardWrapper, CardBody, CardButton, CardInput } from "./styling/Card";

import { Body } from "./styling";
import useWeb3Modal from "../hooks/useWeb3Modal";


export default function Mint() {
    const [provider, loadWeb3Modal] = useWeb3Modal();

    if (!provider) {
        loadWeb3Modal();
        return (
            <div>
                <Body>
                    Please login.
                </Body>
            </div>
        )
    } else {
        return (
            <div>
                <PageHeader>
                    <TitleIcon><GiMonaLisa /> </TitleIcon> <Title>Mint</Title>
                </PageHeader>
                <div className="container-fluid w-100 p-0 m-0">
                    <MintBody style={{ top: 0 }}>
                        <CardWrapper>
                            <form className="form">
                                <CardBody className="card-body">
                                    <div class="row text-center">
                                        <span>
                                            <label for="Title" style={{ padding: 1 + 'rem' }}>Title: </label>
                                            <CardInput type="text" id="Title" placeholder="Title Here" required></CardInput>
                                        </span>
                                    </div>
                                    <div class="row text-center">
                                        <label for="Description" style={{ padding: 1 + 'rem' }}>Description: </label>
                                        <textarea name="nftDescription" rows="5" cols="50" id="Description" placeholder="Describe your NFT here" required></textarea>
                                    </div>
                                    <div class="row text-center">
                                        <span>
                                            <input type="file" accept="audio/*, video/*, image/*, .html, .pdf" id="upload-media" required>
                                            </input>
                                            <label for="upload-media" style={{ padding: 0.1 + 'rem' }}>(Supports JPG, PNG and MP4 videos.Max file size: 10MB.)</label>
                                        </span>
                                    </div>
                                    <div className="card-footer"><CardButton type="submit">Mint</CardButton>
                                    </div>
                                </CardBody>
                            </form>

                        </CardWrapper>

                    </MintBody>
                </div>
            </div >
        )
    }
}