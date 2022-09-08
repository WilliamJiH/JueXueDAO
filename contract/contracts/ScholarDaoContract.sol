// contracts/ScholarCoin.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

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

    function recieveVote(bool vote) public{
        require(!contractIsClosed, "contract already closed!");
        require(reviewers[msg.sender], "only reviewers can vote!");
        reviewers[msg.sender] = vote;
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
    uint256 public constant SCHOLA_BRICK = 0;
    uint256 public constant SCHOLA_SAND = 1;

    // Mapping from token ID to account balances
    mapping (uint256 => mapping(address => uint256)) private _balances;
    mapping (address => bool) public scholarAddresses;

    //a mapping of scholar and their papper 
    mapping (address => mapping(address => ScholarPaper)) public scholarPaperMap;

    struct ScholarPaper {
        PaperApprovalContract paperContract;
        mapping(address => bool) scholarSandClaimed;
        bool scholarBrickClaimed;
    }

    constructor() public ERC1155("") {
        // set up assets
        _uris[SCHOLA_BRICK] = "SCHOLA_BRICK";
        _uris[SCHOLA_SAND] = "SCHOLA_SAND";

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

    // function joinScholarDao(address recipient) public onlyOwner {
    //     // to-do //contract become payable
    // }

    function initReviewContract(address author, address paperUri, address[] memory _reviewers) public onlyOwner returns(address contractAddress){
        scholarPaperMap[author][paperUri].paperContract =  new PaperApprovalContract(msg.sender, author, paperUri, _reviewers);
        scholarPaperMap[author][paperUri].scholarBrickClaimed = false;
        return address(scholarPaperMap[author][paperUri].paperContract);
    }

    function mintScholarBrick(address recipient, address paperUri) public {
        require(address(scholarPaperMap[recipient][paperUri].paperContract) != address(0x0), "Recipient must own this paper");
        require(scholarPaperMap[recipient][paperUri].paperContract.isContractClaimable(), "Paper contract cannot be claimed!");
        require(msg.sender == recipient || msg.sender == owner(), "Only the author or the owner can claim this contract!");
        _mint(recipient, SCHOLA_BRICK, 1, "");
    }

    function addPaperRefferenceAddresses(address author, address paperUri, address[] memory referenceScholarAddresses) public onlyOwner{
        for(uint i = 0; i < referenceScholarAddresses.length; i ++){
            scholarPaperMap[author][paperUri].scholarSandClaimed[referenceScholarAddresses[i]] = false;
        }
    }

    function mintScholarSand(address recipient, address author, address paperUri) public{
        require(address(scholarPaperMap[recipient][paperUri].paperContract) != address(0x0), "recipient must be a scholar!");
        require(scholarPaperMap[author][paperUri].scholarSandClaimed[recipient] == false, "recipient is unable to claim with this paper");
        _mint(recipient, SCHOLA_SAND, 5, "");
        scholarPaperMap[author][paperUri].scholarSandClaimed[recipient] = true;

    }


} 
