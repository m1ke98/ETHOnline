import { MintBody, Title, TitleIcon, PageHeader, StyledInput, StyledInputTextArea } from "./styling";
import { GiMonaLisa } from "react-icons/gi";
import { CardWrapper, CardBody, CardButton } from "./styling/Card";
import { Body } from "./styling";
import useWeb3Modal from "../hooks/useWeb3Modal";


export default function Mint() {
    const [provider, loadWeb3Modal] = useWeb3Modal();

    if (provider) {
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
                                    <div className="row text-center">
                                        <span>
                                            <label htmlFor="Title" style={{ padding: 1 + 'rem' }}>Title: </label>
                                            <StyledInput type="text" id="Title" placeholder="Title Here" required></StyledInput>
                                        </span>
                                    </div>
                                    <div className="row text-center">
                                        <label htmlFor="Description" style={{ padding: 1 + 'rem' }}>Description: </label>
                                        <StyledInputTextArea name="nftDescription" rows="5" cols="50" id="Description" placeholder="Describe your NFT here" required></StyledInputTextArea>
                                    </div>
                                    <div class="row text-center">
                                        <span>
                                            <StyledInput type="file" accept="audio/*, video/*, image/*, .html, .pdf" id="upload-media" required>
                                            </StyledInput>
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
            </div>
        )
    }

    loadWeb3Modal().then((result) => {
        if (result) {

        }
    }).catch((err) => {
        console.log(err)
    });
    return (<div>
        <Body>
            Please connect to continue...
        </Body>
    </div>);
}