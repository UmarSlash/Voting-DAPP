var artifacts = require('truffle-artifactor');
const Voting = artifacts.require("Voting");

contract('Voting', () => {
  it("Should deploy smart contract properly", async() => {
    const testVoting = await Voting.deployed();
    console.log(testVoting.address);
    assert(testVoting.address !== '');
    });
  });