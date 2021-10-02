<p align="center">
  <a href="https://github.com/m1ke98/ETHOnline">
    <img src="https://raw.githubusercontent.com/m1ke98/ETHOnline/main/eth-app/packages/react-app/public/img/New%20Poe.png" alt="Logo" width="200" height="200">
  </a>
  <h3 align="center">Proof of Experience
</h3>
  <p align="center">
  Blockchain based tokenization platform for minting provable credentials, diplomas, and digital badges
  <br/>
  </p>
  
  
## Installation Guide
Install the repository:
```
git clone git@github.com:m1ke98/ETHOnline.git
cd eth-app
yarn install
```

## Start
Start the app by running the following code:
```
cd eth-app
yarn react-app:start
```
## Develop:

cd smart-contracts

npm install
#### Run the hardhat local network:
npx hardhat node

#### Deploy the contract to test:
npx hardhat run scripts/{deploy-script-here.js} --network localhost

Example:
npx hardhat run scripts/deploy-nft721.js --network localhost

