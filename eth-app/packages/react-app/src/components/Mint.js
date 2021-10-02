import React, { useState } from "react";
import { MintBody, Title, TitleIcon, PageHeader } from "./styling";
import { GiMonaLisa } from "react-icons/gi";
import { CardWrapper, CardBody, CardButton } from "./styling/Card";
import { Body } from "./styling";


export default function Mint({
    provider,
    web3Modal
}) {

    const [file, setFile] = useState(null);
    const [previewURL, setPreviewURL] = useState(null);
    const [nftName, setName] = useState("");
    const [description, setDescription] = useState("");
    const [minting, setMinting] = useState(false);
    const [status, setStatus] = useState("");
    const [tokenId, setTokenId] = useState(null);

    if (provider) {
        return (
            <div>
                <PageHeader>
                    <TitleIcon><GiMonaLisa /> </TitleIcon> <Title>Mint</Title>
                </PageHeader>
                <div className="container-fluid w-100 p-0 m-0">
                    <MintBody style={{ top: 0 }}>
                        <CardWrapper>
                            <form className="form" onSubmit={() => {

                            }}>
                                <CardBody className="card-body">
                                    <div className="row text-center">
                                        <span>
                                            <label htmlFor="Title" style={{ padding: 1 + 'rem' }}>Title: </label>
                                            <input type="text" id="Title" placeholder="Title Here" onChange={e => {
                                                setName(e.target.value);
                                            }} required></input>
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <label htmlFor="Description" style={{ padding: 1 + 'rem' }}>Description: </label>
                                        <textarea rows="5" cols="50" id="Description" placeholder="Describe your NFT here" onChange={e => {
                                            setDescription(e.target.value);
                                        }} required></textarea>
                                    </div>
                                    <div className="row text-center">
                                        <span>
                                            <input type="file" accept="audio/*, video/*, image/*, .html, .pdf" id="upload-media" required>
                                            </input>
                                            <label htmlFor="upload-media" style={{ padding: 0.1 + 'rem' }}>(Supports JPG, PNG and MP4 videos.Max file size: 10MB.)</label>
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

    web3Modal();
    return (<div>
        <Body>
            Please connect to continue...
        </Body>
    </div>);
}