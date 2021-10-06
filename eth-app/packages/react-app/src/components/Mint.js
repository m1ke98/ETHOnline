import React, { useState } from "react";
import { MintBody, Title, TitleIcon, PageHeader } from "./styling";
import { GiMonaLisa } from "react-icons/gi";
import { CardWrapper, CardBody, CardButton } from "./styling/Card";
import { Body } from "./styling";
import { storeNftData } from './helpers/storage';


export default function Mint({
    provider,
    web3Modal,
    account
}) {
    const [nftName, setNftName] = useState("");
    const [nftDescription, setNftDescription] = useState("");
    const [nftFile, setNftFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [stored, setStored] = useState(false);
    const [tokenURI, setTokenURI] = useState(null);
    const [status, setStatus] = useState("");
    const [minted, setMinted] = useState(null);


    const onMintSubmit = async (event) => {
        event.preventDefault();
        storeNftData(nftName, nftDescription, nftFile).then(value => {
            const metadata = value;
            setTokenURI(metadata.url);
            setStored(true);

            // Confirm NFT MetaData was pinned to ipfs (nft.storage) before minting
            // testMintToken(account, provider, tokenURI, addresses.poeNft, abis.poeNft).then((success, status) => {
            //     setStatus(status);
            //     if (success) {
            //         setSuccess("Success!");
            //         setShowMessage(window.confirm('Token minting succeded at txHash: ' + status +
            //             '\nPreview Url: ' + previewURL));
            //     } else {
            //         setSuccess("Failed");
            //         setShowMessage(window.alert('Token failed to mint at txHash: ' + status));

            //     }

            // }).catch(error => {
            //     console.log('Error occurred during minting: ' + error);
            //     setShowMessage(window.alert('Error occurred during minting: ' + error));
            // });
        }).catch(error => {
            setStored(false);
            console.error(error);
        });
        if (stored) {
            window.confirm("Storage MetaData Token URI: " + tokenURI);
        } else {
            window.alert("Failed to store nft data.");
        }
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
                                            <label htmlFor="Title" style={{ padding: 1 + 'rem' }}>Title: </label>
                                            <input type="text"
                                                id="Title"
                                                placeholder="Title Here"
                                                onChange={e => {
                                                    setNftName(e.target.value);
                                                }}
                                                required></input>
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <label htmlFor="Description" style={{ padding: 1 + 'rem' }}>Description: </label>
                                        <textarea rows="5" cols="50" id="Description" placeholder="Describe your NFT here" onChange={e => {
                                            setNftDescription(e.target.value);
                                        }} required></textarea>
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