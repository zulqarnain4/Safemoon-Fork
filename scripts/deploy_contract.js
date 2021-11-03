const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const SafeMoonFork = await ethers.getContractFactory("SafeMoonFork");

  const safeMoonFork = await SafeMoonFork.deploy(
      "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",//Uniswap router address
      5);

  console.log("contract deployed to :",safeMoonFork.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
