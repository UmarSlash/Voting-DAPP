// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    address public admin;
    bool public votingOpen;

    struct Voter {
        bool isRegistered;
        bool hasVoted;
        uint256 votedCandidateId;
    }

    struct Candidate {
        string name;
        uint256 voteCount;
    }

    mapping(address => Voter) public voters;
    Candidate[] public candidates;

    event VoterRegistered(address indexed voterAddress);
    event Voted(address indexed voterAddress, uint256 indexed candidateId);
    event WinnerAnnounced(string winnerName);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only the admin can execute this");
        _;
    }

    modifier votingIsOpen() {
        require(votingOpen, "Voting is not open");
        _;
    }

    constructor() {
        admin = msg.sender;
        votingOpen = false;

        candidates.push(Candidate("Kay", 0));
        candidates.push(Candidate("Aiman", 0));
        candidates.push(Candidate("Afiq", 0));
    }

    function startVoting() public onlyAdmin {
        require(!votingOpen, "Voting is already open");
        votingOpen = true;
    }

    function stopVoting() public onlyAdmin {
        require(votingOpen, "Voting is already closed");
        votingOpen = false;
    }

    function registerVoter() public votingIsOpen {
        require(!voters[msg.sender].isRegistered, "Voter is already registered.");
        
        voters[msg.sender].isRegistered = true;

        emit VoterRegistered(msg.sender);
    }

    function vote(uint256 _candidateId) public votingIsOpen {
        require(voters[msg.sender].isRegistered, "Voter is not registered.");
        require(!voters[msg.sender].hasVoted, "Voter has already voted.");
        require(_candidateId < candidates.length, "Invalid candidate ID.");

        voters[msg.sender].hasVoted = true;
        voters[msg.sender].votedCandidateId = _candidateId;
        candidates[_candidateId].voteCount++;

        emit Voted(msg.sender, _candidateId);
    }

    function announceWinner() public onlyAdmin {
        require(!votingOpen, "Voting is still ongoing.");

        uint256 winningVoteCount = 0;
        string memory winnerName;

        for (uint256 i = 0; i < candidates.length; i++) {
            if (candidates[i].voteCount > winningVoteCount) {
                winningVoteCount = candidates[i].voteCount;
                winnerName = candidates[i].name;
            }
        }

        emit WinnerAnnounced(winnerName);
    }
}
