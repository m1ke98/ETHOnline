const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
    let PoeNft;
    let poeNft;
    let owner;
    let addr1;

    beforeEach(async function () {
        PoeNft = await ethers.getContractFactory("PoeNft");
        [owner, addr1] = await ethers.getSigners();

        poeNft = await PoeNft.deploy();
    });

    describe("Mint", function () {
        it("Should show the owner doesn't have any tokens", async function () {
            expect(await poeNft.balanceOf(owner.address)).to.equal(0);
        });

        it("Should show the owner has a single token", async function () {
            const mintPoe = await poeNft.mintToken(owner.address, "https://your-metadata-api.herokuapp.com/api/token/");
            await mintPoe.wait();
    
            expect(await poeNft.balanceOf(owner.address)).to.equal(1);
        });
    });
    
    describe("Transfer", function () {
        it("Should transfer tokens", async function () {
            const mintPoe = await poeNft.mintToken(owner.address, "https://your-metadata-api.herokuapp.com/api/token/");
            await mintPoe.wait();

            const mintAnotherPoe = await poeNft.mintToken(owner.address, "https://your-metadata-api.herokuapp.com/api/token/");
            await mintAnotherPoe.wait();            

            expect(await poeNft.balanceOf(owner.address)).to.equal(2);

            expect(await poeNft.balanceOf(addr1.address)).to.equal(0);

            const transferToken = await poeNft.transferFrom(owner.address, addr1.address, 2);
            await transferToken.wait();

            expect(await poeNft.balanceOf(addr1.address)).to.equal(1);

            expect(await poeNft.ownerOf(2)).to.equal(addr1.address);
            expect(await poeNft.ownerOf(1)).to.equal(owner.address);
        });
    });

    
});