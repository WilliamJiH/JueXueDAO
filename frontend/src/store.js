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
    daoContractAddr: 'cfxtest:accjxyknf6y073ey668reamfs5ukrh61d2rx731hak',
    daoContract: undefined,
    lang: 'en',
    isAuthenticated: false,
    gasPrice: 1e9,
    cards: [
      {
        title: '自然语言处理技术下电网敏感客户画像多特征提取方法',
        authors: ['刘振华', '苏立伟', '苏华权'],
        date: '2021-05-01',
        category: '计算机科学',
        desc: '为快速、准确地识别和认知电网客户,并制定针对性、精细化、个性化的服务方案,从而提升服务质量与效率,该文提出一种自然语言处理技术下电网敏感客户画像多特征提取方法。基于电力系统业务需求方向,选取头脑风暴方式确定电网敏感客户画像标签本相,利用德尔菲法确定和完善与电网业务具有高度相关的标签,由此获取具有应用性的电网敏感客户画像标签。',
        imgSrc: '',
        address: 'cfxtest:aane51nxnydk7azb4bz14t2rfacbckp572xa9cur87',
      },
      {
        title: '基于深度学习的图像分类方法研究',
        authors: ['孟丹 '],
        date: '2021-05-01',
        category: '计算机科学',
        desc: '图像分类是模式识别、机器学习和人工智能的重要基础,图像分类一般包括感兴趣区域选取、特征提取以及分类器建模三个步骤,其中,图像的特征提取是完成其他任务的重要基础。而在多数模式识别场景下,合适的特征表达是其中的关键环节,直接影响着整个分类系统的性能。',
        imgSrc: 'images/user_article5.png',
        address: 'cfxtest:aane51nxnydk7azb4bz14t2rfacbckp572xa9cur87',
      },
      {
        title: '在图书馆喝奶茶学习能否提高学习效率',
        authors: ['小小本科生'],
        date: '2022-09-15',
        category: '社会心理',
        desc: '在平均每天只睡七个小时以下的大学生活里, 我们在考final期间, 平均睡眠基本不到六个小时。在强行突破被窝的封印之后, 艰难地来到图书馆，却总也集中不了精神。在面对那些刷不完的题目, 记不完的重点里, 奶茶简直就是大号血瓶，喝一口仿佛就能帮我们脉动回来！那么接下来我们将会探讨一下奶茶的成分。',
        imgSrc: 'images/user_article1.png',
        address: 'cfxtest:aane51nxnydk7azb4bz14t2rfacbckp572xa9cur87',
      },
    ],
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
    setCards(state, newCard) {
      state.cards = newCard
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
    getCards: (state) => state.cards,
  },
})

export default store
