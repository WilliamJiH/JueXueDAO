import configs from '@configs'
import { Conflux } from 'js-conflux-sdk'
import { abi as scholarDaoAbi } from '@contracts/ScholarDaoContract.json'
import { abi as articleReviewAbi } from '@contracts/PaperApprovalContract.json'

export const cfx = new Conflux({
  url: 'https://test.confluxrpc.com',
  networkId: 1,
  logger: console,
})

export const CfxManager = cfx.wallet.addPrivateKey(configs.cfxManagerKey)

export const ScholarDaoContract = cfx.Contract({
  abi: scholarDaoAbi,
  address: configs.scholarDaoContractAddress,
})

export const ARTICLE_REVIEW_CONTRACT_ABI = articleReviewAbi
