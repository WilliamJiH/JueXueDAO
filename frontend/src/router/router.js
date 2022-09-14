import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import LandingPage from '../pages/LandingPage.vue'
import MainPage from '../pages/MainPage.vue'
import UploadPage from '../pages/UploadPage.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/login',
      name: 'login',
      component: LandingPage,
    },
    {
      path: '/home',
      component: HomePage,
    },
    {
      path: '/upload',
      component: UploadPage,
    }
  ],
})
