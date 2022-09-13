const ScholarDAO = artifacts.require("ScholarDAO");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("ScholarDAO", function (/* accounts */) {
  it("should assert true", async function () {
    await ScholarDAO.deployed();
    return assert.isTrue(true);
  });
});
