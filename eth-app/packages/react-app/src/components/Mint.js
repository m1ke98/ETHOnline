import React, { useState } from "react";
import { MintBody, Title, TitleIcon, PageHeader } from "./styling";
import { GiMonaLisa } from "react-icons/gi";
import { CardWrapper, CardBody, CardButton } from "./styling/Card";
import { Body } from "./styling";
import { storeNftData } from './helpers/storage';
import { mintTokenForUri } from "./helpers/interact";


export default function Mint({
    provider,
    web3Modal,
    account
}) {
    const [nftName, setNftName] = useState("");
    const [nftDescription, setNftDescription] = useState("");
    const [nftFile, setNftFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [tokenURI, setTokenURI] = useState("");
    const [status, setStatus] = useState("");
    const [success, setSuccess] = useState("");
    const [minted, setMinted] = useState(null);


    const onMintSubmit = async (event) => {
        event.preventDefault();
        await storeNftData(nftName, nftDescription, nftFile).then(metadata => {
            setTokenURI(metadata.url);
            // Confirm NFT MetaData was pinned to ipfs (nft.storage) before minting
            if (tokenURI !== "") {
                mintTokenForUri(account, provider, tokenURI).then((result) => {
                    setStatus(result.status);
                    if (result.success) {
                        setSuccess("Success!");
                    } else {
                        setSuccess("Failed");
                    }


                    window.confirm("Token Minted to Address:\n" + account +
                        "\nStorage MetaData Token URI:\n" + tokenURI +
                        "\nToken minting succeded at txHash:\n" + status);

                }).catch(error => {
                    console.error(error)
                });
            }

        }).catch(error => {
            console.error(error);
        });

    }

    const handleImagePreview = (event) => {
        setImagePreview(URL.createObjectURL(event.target.files[0]));

    }

    const preview = (
        <img src={imagePreview} height="160" width="auto" alt="selected preview here" />);

    if (provider) {
        return (
            <div>
                <PageHeader>
                    <TitleIcon><GiMonaLisa /> </TitleIcon> <Title>Mint</Title>
                </PageHeader>
                <div className="container-fluid w-100 p-0 m-0">
                    <MintBody style={{ top: 0 }}>
                        <CardWrapper>
                            <form className="form" onSubmit={onMintSubmit}>
                                <CardBody className="card-body">
                                    <div className="row text-center">
                                        <span>
                                            <input type="text"
                                                id="Title"
                                                placeholder="Title Here"
                                                onChange={e => {
                                                    setNftName(e.target.value);
                                                }}
                                                required style={{ margin: 2 + 'rem', width: 60 + '%' }}></input>
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <textarea rows="5" cols="50" id="Description" placeholder="Describe your NFT here" onChange={e => {
                                            setNftDescription(e.target.value);
                                        }} required style={{ marginBottom: 2 + 'rem' }}></textarea>
                                    </div>
                                    <div className="row text-center">
                                        <span>
                                            <input type="file"
                                                accept="audio/*, video/*, image/*, .html, .pdf"
                                                id="upload-media"
                                                onChange={e => {
                                                    setNftFile(e.target.files[0]);
                                                    handleImagePreview(e);
                                                }}
                                                required>
                                            </input>
                                            <label htmlFor="upload-media" style={{ padding: 0.1 + 'rem' }}>(Supports JPG, PNG and MP4 videos.Max file size: 10MB.)</label>
                                        </span>
                                    </div>
                                    <div className="card-footer">
                                        <CardButton type="submit">Mint</CardButton>
                                    </div>
                                    <div className="container text-center align-items-center">
                                        {imagePreview ? preview : (<div></div>)}
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