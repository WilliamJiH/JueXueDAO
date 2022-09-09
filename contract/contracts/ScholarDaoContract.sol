// contracts/ScholarCoin.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PaperApprovalContract is Ownable{
    address public author;
    address public paperUri;
    mapping (address => bool) public reviewers;
    mapping (address => bool) public reviewersVoting;
    uint public totalVotes;
    uint public approvalCounts;
    bool private contractIsClosed;
    bool public approvalStatus;
    bool public claimContractBrick;

    constructor(address contractOwner, address _author, address _paperUri, address[] memory _reviewers) public {
        transferOwnership(contractOwner);
        author = _author;
        paperUri = _paperUri;
        contractIsClosed = false;
        approvalCounts = 0;
        totalVotes = _reviewers.length;
        for (uint i = 0; i < _reviewers.length; i++){
            reviewers[_reviewers[i]] = true;
        }

    }

    function commitVote(bool vote) public{
        require(!contractIsClosed, "contract already closed!");
        require(reviewers[msg.sender], "You do not have the right to vote!");
        reviewers[msg.sender] = false;
        if (vote){
            approvalCounts += 1;
        }
    }

    function closeContract() public onlyOwner{
        require(!contractIsClosed, "contract already closed!");
        contractIsClosed = true;
    }

    function checkVotingStatus() public view returns(uint _totalVotes, uint _approvalCounts, bool _contractIsClosed){
        return(totalVotes, approvalCounts, contractIsClosed);
    }

    function isContractClaimable() public view returns(bool){
        return contractIsClosed && (approvalCounts > (totalVotes / 2));
    }

}

contract ScholarDaoContract is ERC1155, Ownable {
    mapping (uint256 => string) private _uris;
    uint256 public constant SCHOLAR_BRICK = 0;
    uint256 public constant SCHOLAR_SAND = 1;

    mapping (address => bool) public scholarAddresses;

    //a mapping of scholar and their papper 
    mapping (address => mapping(address => ScholarPaper)) public scholarPaperMap;

    struct ScholarPaper {
        PaperApprovalContract paperContract;
        mapping(address => bool) scholarSandClaimable;
        bool scholarBrickClaimed;
    }

    constructor() public ERC1155("") {
        // set up assets
        _uris[SCHOLAR_BRICK] = "SCHOLA_BRICK";
        _uris[SCHOLAR_SAND] = "SCHOLA_SAND";

    }

    function uri(uint256 tokenId) override public view returns (string memory){
        //find out tokenId represents in this contract
        return(_uris[tokenId]);
    }

    function setTokenUri(uint256 _tokenId, string memory _uri) public onlyOwner {
        _uris[_tokenId] = _uri;
    }

    function mint(address recipient, uint256 tokenId, uint256 amount) public onlyOwner {
        _mint(recipient, tokenId, amount, "");
    }

    function approveNewScholar(address recipient) public onlyOwner {
        // add new scholar to address list, but they are not yet a dao member
        scholarAddresses[recipient] = true;
    }

    function initReviewContract(address author, address paperUri, address[] memory _reviewers) public onlyOwner returns(address contractAddress){
        scholarPaperMap[author][paperUri].paperContract =  new PaperApprovalContract(msg.sender, author, paperUri, _reviewers);
        scholarPaperMap[author][paperUri].scholarBrickClaimed = false;
        return address(scholarPaperMap[author][paperUri].paperContract);
    }

    function mintScholarBrick(address recipient, address paperUri) public {
        require(address(scholarPaperMap[recipient][paperUri].paperContract) != address(0x0), "Recipient must own this paper");
        require(scholarPaperMap[recipient][paperUri].paperContract.isContractClaimable(), "Paper contract cannot be claimed!");
        require(msg.sender == recipient || msg.sender == owner(), "Only the author or the owner can claim this contract!");
        require(!scholarPaperMap[recipient][paperUri].scholarBrickClaimed, "Scholar brick was claimed!");
        _mint(recipient, SCHOLAR_BRICK, 1, "");
        scholarPaperMap[recipient][paperUri].scholarBrickClaimed = true;
    }

    function addPaperRefferenceAddresses(address author, address paperUri, address[] memory referenceScholarAddresses) public onlyOwner{
        for(uint i = 0; i < referenceScholarAddresses.length; i ++){
            scholarPaperMap[author][paperUri].scholarSandClaimable[referenceScholarAddresses[i]] = true;
        }
    }

    function mintScholarSand(address recipient, address author, address paperUri) public{
        require(address(scholarPaperMap[author][paperUri].paperContract) != address(0x0), "Paper must exists");
        require(scholarPaperMap[author][paperUri].scholarSandClaimable[recipient], "Recipient is unable to claim with this paper");
        _mint(recipient, SCHOLAR_SAND, 5, "");
        scholarPaperMap[author][paperUri].scholarSandClaimable[recipient] = false;

    }

    function convertSandToBrick(address recipient, uint amount) public{
        // convert every 1 thousand sand from msg.sender into 1 brick to recipient
        require(balanceOf(msg.sender, SCHOLAR_SAND) >= amount, "Sender must have enough sand amount");
        uint convertNum = amount / 1000;
        _burn(msg.sender, SCHOLAR_SAND, convertNum * 1000);
        _mint(recipient, SCHOLAR_BRICK, convertNum, "");
    }


} 
