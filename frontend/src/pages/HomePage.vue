<template>
  <Navbar :navItems="navItems" />
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'HomePage',
  components: {
    Navbar,
  },

  data() {
    return {
      navItems: [
        { index: '/', link: '/', name: 'Home' },
        { index: '/login', link: '/login', name: 'Login' },
      ],
    }
  },
}
</script>
