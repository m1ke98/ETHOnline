# ETHOnline

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

