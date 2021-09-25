
import { Contract } from '@ethersproject/contracts';
import { ethers } from 'ethers';
import { useEffect, useMemo, useState } from 'react';

import { parseProviderOrSigner } from '~~/functions/providerOrSigner';

/**
 * Configuration for useContractLoader
 */
export class ContractConfig {
    hardhatNetworkName = '';
    customAddresses = '';
    deployedContracts = '';
    externalContracts = '';
};

/**
 * Loads your local contracts and gives options to read values from contracts
  or write transactions into them
   ~ Features ~
  - localProvider enables reading values from contracts
  - userProvider enables writing transactions into contracts
  - Example of keeping track of "purpose" variable by loading contracts into readContracts
    and using ContractReader.js hook:
    const purpose = useContractReader(readContracts,"YourContract", "purpose")
  - Example of using setPurpose function from our contract and writing transactions by Transactor.js helper:
    tx( writeContracts.YourContract.setPurpose(newPurpose) )
  config can include:
  - chainId - to hardcode the chainId, irrespective of the providerOrSigner chainId
  - hardhatNetworkName - to hardcode the hardhat network of interest
  - customAddresses: { contractName: 0xCustomAddress } to hardcode the address for a given named contract
  - hardhatContracts: object following the hardhat deploy export format (Json with chainIds as keys, which have hardhat network names as keys, which contain arrays of contracts for each)
  - externalContracts: object with chainIds as keys, with an array of contracts for each
 * @param providerOrSigner (TEthersProviderOrSigner)
 * @param config (TContractConfig) :: configuration for loader
 * @returns (Record<string, Contract>) :: a record of contractName:contract
 */
export const useContractLoader = (
    providerOrSigner,
    config = {},
    chainId) => {
    const [contracts, setContracts] = useState({});
    const configDep = useMemo(() => JSON.stringify(config ?? {}), [config]);

    useEffect(() => {
        let active = true;

        const loadContracts = async () => {
            if (providerOrSigner && typeof providerOrSigner !== 'undefined') {
                console.log(`loading contracts`);
                console.log(providerOrSigner, config);
                try {
                    // we need to check to see if this providerOrSigner has a signer or not
                    if (typeof providerOrSigner !== 'undefined') {
                        // we need to check to see if this providerOrSigner has a signer or not

                        const { providerNetwork } = await parseProviderOrSigner(providerOrSigner);
                        // find the current chainId based on this order:
                        //  - chainId passed in or a fallback of provider chainId
                        const currentChainId = chainId ?? providerNetwork?.chainId ?? 0;

                        // Type definition
                        //  Record<string, Record<string, Contract>>
                        //  { chainId: { contractName: Contract } }
                        const contractList = { ...(config.deployedContracts ?? {}) };
                        const externalContractList = {
                            ...(config.externalContracts ?? {}),
                        };
                        let combinedContracts = {};

                        // combine partitioned contracts based on all the available and chain id.
                        if (contractList?.[currentChainId] != null) {
                            for (const hardhatNetwork in contractList[currentChainId]) {
                                if (Object.prototype.hasOwnProperty.call(contractList[currentChainId], hardhatNetwork)) {
                                    if (!config.hardhatNetworkName || hardhatNetwork === config.hardhatNetworkName) {
                                        combinedContracts = {
                                            ...combinedContracts,
                                            ...contractList?.[currentChainId]?.[hardhatNetwork]?.contracts,
                                        };
                                    }
                                }
                            }
                        }

                        if (externalContractList?.[currentChainId] != null) {
                            combinedContracts = { ...combinedContracts, ...externalContractList[currentChainId].contracts };
                        }

                        const newContracts = Object.keys(combinedContracts).reduce(
                            (accumulator, contractName) => {
                                const address =
                                    config.customAddresses && Object.keys(config.customAddresses).includes(contractName)
                                        ? config.customAddresses[contractName]
                                        : combinedContracts[contractName].address;
                                accumulator[contractName] = new ethers.Contract(
                                    address,
                                    combinedContracts[contractName].abi,
                                    providerOrSigner
                                );
                                return accumulator;
                            },
                            {}
                        );
                        if (active) setContracts(newContracts);
                    }
                } catch (e) {
                    console.log('ERROR LOADING CONTRACTS!!', e);
                }
            }
        };

        void loadContracts();

        return () => {
            active = false;
        };
        // disable as configDep is used for dep instead of config
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [providerOrSigner, configDep]);

    return contracts;
};