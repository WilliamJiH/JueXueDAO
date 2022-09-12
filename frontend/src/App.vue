<template>
  <div id="app">
    <Navbar v-if="isAuthenticated" />
    <router-view @setAuthenticated="setAuthenticated" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {
      isAuthenticated: false,
    }
  },

  mounted() {
    
    console.log(this.isAuthenticated)
    if (!this.isAuthenticated && this.$route.path !== '/login') {
      this.$router.replace({ name: 'login' })
    }
    
  },
  methods: {
    setAuthenticated(status) {
      console.log("set auth", status)
      this.isAuthenticated = status
    },
    logout() {
      this.isAuthenticated = false
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
