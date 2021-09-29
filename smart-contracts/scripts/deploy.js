
const hre = require("hardhat");

async function main() {

  const PoeNft = await hre.ethers.getContractFactory("PoeNft");
  const poeNft = await PoeNft.deploy();

  await poeNft.deployed();

  console.log("PoeNft deployed to:", poeNft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
