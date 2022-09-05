<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
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
