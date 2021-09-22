const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PoeNft", function () {
    it("Should show the owner has a single token", async function () {
        const [owner] = await ethers.getSigners();

        const PoeNft = await ethers.getContractFactory("PoeNft");
        const poeNft = await PoeNft.deploy();
        await poeNft.deployed();

        expect(await poeNft.balanceOf(owner.address)).to.equal(0);

        const mintPoe = await poeNft.mintToken(owner.address, "https://your-metadata-api.herokuapp.com/api/token/");

        // wait until the transaction is mined
        await mintPoe.wait();

        expect(await poeNft.balanceOf(owner.address)).to.equal(1);
    });
});
