export const NFT_STORAGE_ENDPOINT = "https://api.nft.storage";
export const NFT_STORAGE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDUwMTgyNmY5YmQ4YTgzOTU3RkE3OEE0QTkwMjk0N2E2NGJmZTQyNTkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzMjE4NzIyNzQ2NCwibmFtZSI6IlNvbWV0aGluZ0Nvb2xBcGlLZXkifQ.IAWS_6tZMKUhOaSRjKtr20Pjw4vO6gsGjn2Sl59jAGk";

export const INFURA_API_KEY = "b58725ea45f647beac39eee4a2b379f0"; //Harry's infura api key
export const ETHERSCAN_KEY = "4T2IYQ6IJG86YK31QZMQEC2W88RPSM7Z5Y";// Harry's etherscan key
export const ALCHEMY_KEY = "lLk1Rpr7uwV5uFHYspWGReUfF8yEMMTS";
export const NFT721_CONTRACT_ADDRESS = "Deployed address";

export const NETWORKS = {
    localhost: {
        name: "localhost",
        color: "#666666",
        chainId: 31337,
        rpcUrl: "http://" + window.location.hostname + ":8545",
    },
    ropsten: {
        name: "ropsten",
        color: "#F60D09",
        chainId: 3,
        rpcUrl: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_KEY}`,
    },

    // mainnet: {
    //     name: "mainnet",
    //     color: "#ff8b9e",
    //     chainId: 1,
    //     rpcUrl: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
    //     blockExplorer: "https://etherscan.io/",
    // },

};

export const NETWORK = chainId => {
    for (const n in NETWORKS) {
        if (NETWORKS[n].chainId === chainId) {
            return NETWORKS[n];
        }
    }
};