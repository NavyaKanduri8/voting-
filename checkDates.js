// checkDates.js
const { ethers } = require("ethers");

async function main() {
  // Connect to your local Ethereum node (Hardhat or Ganache)
  const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

  const contractAddress = "0x9023556fdd01d20191cDD4e5ed4aF116f5BE36CF"; // replace with your actual deployed contract address

  const contractABI = [
    {
      "inputs": [],
      "name": "electionStart",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "electionEnd",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  const start = await contract.electionStart();
  const end = await contract.electionEnd();

  console.log("Election Start:", start.toString());
  console.log("Election End:", end.toString());
  console.log("Current timestamp:", Math.floor(Date.now() / 1000));
}

main().catch(console.error);
