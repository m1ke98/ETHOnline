import React, { useState } from "react";
import { MintBody, Title, TitleIcon, PageHeader } from "./styling";
import { GiMonaLisa } from "react-icons/gi";
import { CardWrapper, CardBody, CardButton } from "./styling/Card";
import { Body } from "./styling";
import { storeNftData } from './helpers/storage';
import { mintTokenForUri } from "./helpers/interact";
import BasicModal from "./styling/BasicModal";
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import { Switch, FormControlLabel } from '@mui/material';





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
    const [progress, setProgress] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [externalProof, setExternalProof] = useState(false);


    const handleOpen = () => setModalOpen(true);
    const handleClose = () => {
        setModalOpen(false)
    };


    const onMintSubmit = async (event) => {
        event.preventDefault();
        setProgress((<CircularProgress variant="indeterminate" />));
        if (!externalProof) {
            const metadata = await storeNftData(nftName, nftDescription, nftFile);
            if (metadata) {
                setTokenURI(metadata.url);
                // Confirm NFT MetaData was pinned to ipfs (nft.storage) before minting
                const res = await mintTokenForUri(account, provider, metadata.url);
                if (res.success) {
                    setModalContent({
                        toAccount: account,
                        url: metadata.url,
                        txStatus: res.status
                    });

                    handleOpen();

                    setProgress(null);
                    event.target.reset();
                    setImagePreview(null);

                } else {
                    window.alert(res.status);
                }

            }
        } else {
            // TODO: Confirm the provided TokenURI is legit before minting
            const res = await mintTokenForUri(account, provider, tokenURI);
            if (res.success) {
                setModalContent({
                    toAccount: account,
                    url: tokenURI,
                    txStatus: res.status
                });

                handleOpen();

                setProgress(null);
                event.target.reset();
                setImagePreview(null);

            } else {
                window.alert(res.status);
            }
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
                    {progress}
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
                                                placeholder="Name of your experience"
                                                onChange={e => {
                                                    setNftName(e.target.value);
                                                }}
                                                required style={{ margin: 2 + 'rem', width: 60 + '%' }}></input>
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <textarea rows="5" cols="50" id="Description" placeholder="Describe your experience here" onChange={e => {
                                            setNftDescription(e.target.value);
                                        }} required style={{ marginBottom: 2 + 'rem' }}></textarea>
                                    </div>
                                    <div className="row text-center">
                                        <span>
                                            <input type="file"
                                                accept="audio/*, video/*, image/*, .html, .pdf"
                                                id="upload-media"
                                                disabled={externalProof}
                                                onChange={e => {
                                                    setNftFile(e.target.files[0]);
                                                    handleImagePreview(e);
                                                }}
                                                required>
                                            </input>
                                            <label htmlFor="upload-media" style={{ padding: 0.1 + 'rem' }}>Evidence  of experience (e.g audio/*, video/*, image/*, .html, .pdf)</label>
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <FormControlLabel
                                            sx={{
                                                display: 'block',
                                            }}
                                            control={
                                                <Switch
                                                    checked={externalProof}
                                                    onChange={() => {
                                                        setExternalProof(!externalProof);
                                                        setImagePreview(null);
                                                        setNftFile(null);
                                                    }}
                                                    name="proofSelector"
                                                    color="primary"
                                                />
                                            }
                                            label="Link an existing  asset"
                                        />
                                        <span>
                                            <input type="text"
                                                id="linkToAsset"
                                                disabled={!externalProof}
                                                placeholder="e.g. ipfs://<hash>"
                                                onChange={e => {
                                                    setTokenURI(e.target.value);
                                                }}
                                                required style={{ margin: 2 + 'rem', width: 60 + '%' }}></input>
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
                    <BasicModal open={modalOpen} handleClose={handleClose} title={"Mint Experience, Success!"} content={modalContent} ></BasicModal>
                </div>
            </div>
        )
    }

    web3Modal();
    return (<div>
        <Body>
            Please connect MetaMask to continue...
        </Body>
    </div>);
}