/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers")

require('dotenv').config({ path: "./.env" });

module.exports = {

  defaultNetwork: "rinkeby",

  solidity: {
      version: "0.8.7",
       settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }   
    }
  },
  networks: {
    hardhat: {
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      timeout: 1800000
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.RINKEBY_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`
      ],
      live: true,
      saveDeployments: true,
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      timeout: 1800000
    }
  },
  etherscan: {
    apiKey: process.env.API
  },
  mocha: {
    timeout: 100000
  }
};
