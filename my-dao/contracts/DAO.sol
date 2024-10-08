// SPDX-License-Identifier: MIT
pragma solidity  ^0.8.0; //original0.8.27

contract DAO {
    struct Proposal {
        string description;
        uint voteCount;
        bool executed;
    }

    mapping(address => bool) public members;
    Proposal[] public proposals;
    address public owner;

    constructor() {
        owner = msg.sender;
        members[owner] = true; // O criador da DAO é o primeiro membro
    }

    modifier onlyMembers() {
        require(members[msg.sender], "Not a member");
        _;
    }

    function joinDAO() public {
        require(!members[msg.sender], "Already a member");
        members[msg.sender] = true;
    }

    function createProposal(string memory _description) public onlyMembers {
        proposals.push(
            Proposal({description: _description, voteCount: 0, executed: false})
        );
    }

    function voteOnProposal(uint _proposalIndex) public onlyMembers {
        Proposal storage proposal = proposals[_proposalIndex];
        proposal.voteCount += 1;
    }

    function executeProposal(uint _proposalIndex) public onlyMembers {
        Proposal storage proposal = proposals[_proposalIndex];
        require(proposal.voteCount > 0, "Not enough votes");
        require(!proposal.executed, "Already executed");

        proposal.executed = true;
        // Aqui a proposta seria executada
    }
}
