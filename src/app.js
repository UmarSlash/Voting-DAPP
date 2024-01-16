// Import Web3.js library
const Web3 = require('web3');

// Connect to a local Ethereum node
const web3 = new Web3('http://127.0.0.1:7545');

// Replace the following with the deployed address of your Voting contract
const contractAddress = '0x3cEF3C521C520De88284b7F8927eeB0939A62b78';
const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "voterAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "candidateId",
				"type": "uint256"
			}
		],
		"name": "Voted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "voterAddress",
				"type": "address"
			}
		],
		"name": "VoterRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "winnerName",
				"type": "string"
			}
		],
		"name": "WinnerAnnounced",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "announceWinner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "registerVoter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stopVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_candidateId",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isRegistered",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "hasVoted",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "votedCandidateId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "votingOpen",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
  // Paste the ABI (contract interface) here
];

// Create a contract instance
const votingContract = new web3.eth.Contract(abi, contractAddress);

// Get a list of accounts from Ganache
web3.eth.getAccounts()
  .then((accounts) => {
    // Use the first account as the default account
    const defaultAccount = accounts[0];

// Placeholder functions for your HTML buttons
function startVoting() {
  votingContract.methods.startVoting().send({ from: web3.eth.defaultAccount })
    .on('transactionHash', (hash) => console.log(`Transaction Hash: ${hash}`))
    .on('confirmation', (confirmationNumber, receipt) => console.log(`Confirmation Number: ${confirmationNumber}`, receipt))
    .on('error', (error) => console.error('Error:', error));
}

function stopVoting() {
  votingContract.methods.stopVoting().send({ from: web3.eth.defaultAccount })
    .on('transactionHash', (hash) => console.log(`Transaction Hash: ${hash}`))
    .on('confirmation', (confirmationNumber, receipt) => console.log(`Confirmation Number: ${confirmationNumber}`, receipt))
    .on('error', (error) => console.error('Error:', error));
}

function registerVoter() {
  votingContract.methods.registerVoter().send({ from: web3.eth.defaultAccount })
    .on('transactionHash', (hash) => console.log(`Transaction Hash: ${hash}`))
    .on('confirmation', (confirmationNumber, receipt) => console.log(`Confirmation Number: ${confirmationNumber}`, receipt))
    .on('error', (error) => console.error('Error:', error));
}

function vote(candidateId) {
  votingContract.methods.vote(candidateId).send({ from: web3.eth.defaultAccount })
    .on('transactionHash', (hash) => console.log(`Transaction Hash: ${hash}`))
    .on('confirmation', (confirmationNumber, receipt) => console.log(`Confirmation Number: ${confirmationNumber}`, receipt))
    .on('error', (error) => console.error('Error:', error));
}

function announceWinner() {
  votingContract.methods.announceWinner().call()
    .then((winnerName) => console.log(`Winner: ${winnerName}`))
    .catch((error) => console.error('Error:', error));
}

// Set the default Ethereum account (replace with your account)
web3.eth.defaultAccount = '0xb7A21284bEeDa163326BFC219889189c4359B7c8';
