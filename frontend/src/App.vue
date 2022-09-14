<template>
  <div id="app">
    <Navbar v-if="this.$store.getters.getIsAuthenticated" />
    <router-view @setAuthenticated="setAuthenticated" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
const { abi: ScholarDaoContractAbi } = require('./contracts/ScholarDaoContract.json')
export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {}
  },

  async mounted() {
    const cfx = this.$store.getters.getCfx
    cfx.provider = window.conflux
    window.conflux.on('chainChanged', cfx.updateNetworkId)
    console.log(this.$store.getters.getDaoContractAddr)

    const daoContract = cfx.Contract({
      abi: ScholarDaoContractAbi,
      address: this.$store.getters.getDaoContractAddr,
    })
    this.$store.commit('setDaoContract', daoContract)

    // call contract method
    // const contractName = await daoContract.name();
    // console.log(contractName)
    // const scholar = this.$store.getters.getScholarAddr
    // const balance = await daoContract.balanceOf(scholar);
    // console.log(balance)

    if (!this.$store.getters.getIsAuthenticated && this.$route.path !== '/login') {
      this.$router.replace({ name: 'login' })
    }
  },
  methods: {
    setAuthenticated(status) {
      // set the auth status in the store
      this.$store.commit('setIsAuthenticated', status)
      this.$router.replace({ name: 'main' })
    },
    logout() {
      this.$store.commit('setIsAuthenticated', false)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0 !important;
}

@font-face {
  font-family: 'Gilroy';
  src: local('Gilroy'), url(./fonts/Gilroy.otf) format('opentype');
}

@font-face {
  font-family: 'Inter';
  src: local('Inter'), url(./fonts/Inter.ttf) format('truetype');
}
</style>
