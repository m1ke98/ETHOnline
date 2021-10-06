export const INFURA_API_KEY = "b58725ea45f647beac39eee4a2b379f0"; 
export const ALCHEMY_KEY = "lLk1Rpr7uwV5uFHYspWGReUfF8yEMMTS";
export const NFT_STORAGE_API_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk0MWM3M2QwOTQyMTlDQzA0N0Q4MTc4ODMzNjM4ZWQzYTk4ODBBMDQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzMzI2OTQ2MzA4NSwibmFtZSI6IlBvRSJ9.Fq37MZTciXPS3_uWjtQy2geZ_9sBnhk8F0egg5_ugrM";

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