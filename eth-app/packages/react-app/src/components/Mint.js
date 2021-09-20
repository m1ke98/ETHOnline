import React from "react";
import { MintBody, Title, TitleIcon, PageHeader, Button } from "./styling";
import { GiMonaLisa } from "react-icons/gi";

export default function Mint() {
    return (
        <div>
            <PageHeader>
                <TitleIcon><GiMonaLisa /> </TitleIcon> <Title>Mint</Title>
            </PageHeader>
            <div class="container-fluid w-100 p-0 m-0">
                <MintBody class="card" style={{ top: 0 }}>
                    <form class="form-group">
                        <div class="row text-center">
                            <span>
                                <label for="Title" style={{ padding: 1 + 'rem' }}>Title:</label>
                                <input type="text" id="Title" placeholder="Title Here" required></input>
                            </span>
                        </div>
                        <div class="row text-center">
                            <label for="Description" style={{ padding: 1 + 'rem' }}>Description:</label>
                            <textarea name="nftDescription" rows="5" cols="50" id="Description" placeholder="Describe your NFT here" required></textarea>
                        </div>
                        <div class="row text-center">
                            <span>
                                <input type="file" accept="audio/*, video/*, image/*, .html, .pdf" id="upload-media" required>
                                </input>
                                <label for="upload-media" style={{ padding: 0.1 + 'rem' }}>(Supports JPG, PNG and MP4 videos. Max file size : 10MB.)</label>
                            </span>
                        </div>

                        <Button type="submit">Mint</Button>

                    </form>
                </MintBody>
            </div>
        </div >
    )
}