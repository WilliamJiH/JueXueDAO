import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { eventBus } from './main'
import { Conflux } from 'js-conflux-sdk'
Vue.use(Vuex)

// Create a new store instance.
const store = new Vuex.Store({
  state: {
    cfx: new Conflux({
      url: 'https://test.confluxrpc.com',
      networkId: 1,
    }),
    scholarAddr: undefined,
    backendUrl: 'http://localhost:5000/api',
    platformAddr: 'cfxtest:aane51nxnydk7azb4bz14t2rfacbckp572xa9cur87',
    daoContractAddr: 'cfxtest:acfg1y2j1etc48krz4g1wyu841kdymwf6jy3vs7ren',
    daoContract: undefined,
    lang: 'en',
    isAuthenticated: false,
    gasPrice: 1e9,
  },
  actions: {
    async connectWallet(context) {
      console.log('trying to connect wallet')
      if (this.state.isAuthenticated) {
        return
      }
      if (!window.conflux) {
        alert('Please install ConfluxPortal')
        return false
      }
      try {
        console.log('requesting account')
        // connect wallet
        await window.conflux.request({ method: 'cfx_requestAccounts' })
        // get accounts
        const accounts = await window.conflux.request({
          method: 'cfx_accounts',
        })
        console.log(accounts)
        // const sig = await this.state.cfx.request({
        //   method: 'personal_sign',
        //   params: [msg, address],
        //   from: address,
        // })
        context.commit('setScholarAddress', accounts[0])
        alert('Wallet connected')
        // get scholar info from backend
        //todo
        return true
      } catch (err) {
        console.log(err)
      }
    },
  },
  mutations: {
    setCfx(state, cfx) {
      state.cfx = cfx
    },
    setScholarAddress: (state, addr) => {
      state.scholarAddr = addr
    },
    setIsAuthenticated: (state, isAuthenticated) => {
      state.isAuthenticated = isAuthenticated
    },
    setDaoContract: (state, daoContract) => {
      state.daoContract = daoContract
    },
  },
  getters: {
    getCfx: (state) => state.cfx,
    getIsAuthenticated: (state) => state.isAuthenticated,
    getScholarAddr: (state) => state.schoolAddr,
    getBackendUrl: (state) => state.backendUrl,
    getDaoContractAddr: (state) => state.daoContractAddr,
    getlang: (state) => state.lang,
    getDaoContract: (state) => state.daoContract,
  },
})

export default store
