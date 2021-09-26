
const contractListPromise = import("../contracts/hardhat_contracts.json");
/* import extrenal contract configuration @SEE: ./contracts/example-deployed-contracts */
const externalContractsPromise = import("../contracts/example-deployed-contracts");

export const loadAppContracts = async () => {
  const config = {};
  config.deployedContracts = (await contractListPromise).default ?? {};
  config.externalContracts = (await externalContractsPromise).default ?? {};
  return config;
};