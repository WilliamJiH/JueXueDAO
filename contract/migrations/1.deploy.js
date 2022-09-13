const ScholarDaoContract = artifacts.require('ScholarDaoContract')

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(ScholarDaoContract)
}