const Voting = artifacts.require("Voting");

contract('Voting', (accounts) => {
  let votingInstance;

  beforeEach(async () => {
    votingInstance = await Voting.deployed();
  });

  it("Should deploy smart contract properly", async () => {
    assert(votingInstance.address !== '');
  });

  it("Should allow only admin to start voting", async () => {
    try {
      await votingInstance.startVoting({ from: accounts[1] });
      assert.fail("Non-admin should not be able to start voting");
    } catch (error) {
      assert(error.reason.includes("Only the admin can execute this"));
    }

    await votingInstance.startVoting({ from: accounts[0] });
    const isOpen = await votingInstance.votingOpen();
    assert.isTrue(isOpen, "Voting should be open");
  });

  it("Should allow only admin to stop voting", async () => {
    try {
      await votingInstance.stopVoting({ from: accounts[1] });
      assert.fail("Non-admin should not be able to stop voting");
    } catch (error) {
      assert(error.reason.includes("Only the admin can execute this"));
    }

    await votingInstance.stopVoting({ from: accounts[0] });
    const isOpen = await votingInstance.votingOpen();
    assert.isFalse(isOpen, "Voting should be closed");
  });
});
