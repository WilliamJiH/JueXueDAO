import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import LandingPage from '../pages/LandingPage.vue'
import MainPage from '../pages/MainPage.vue'
import UploadPage from '../pages/UploadPage.vue'
import ReviewerApplicationPage from '../pages/ReviewerApplicationPage.vue'
import UserProfilePage from '../pages/UserProfilePage.vue'
import ReviewPage from '../pages/ReviewPage.vue'
import ArticlePage from '../pages/ArticlePage.vue'
import ForumPage from '../pages/ForumPage.vue'
import myPaperPage from '../pages/myPaperPage.vue'

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
    },
    {
      path: '/reviewerApplication',
      component: ReviewerApplicationPage,
    },
    {
      path: '/userProfile',
      component: UserProfilePage,
    },
    {
      path: '/review',
      component: ReviewPage,
    },
    {
      path: '/article',
      component: ArticlePage,
    },
    {
      path: '/paper',
      component: myPaperPage,
    },
    // {
    //   path: '/article/:address',
    //   component: ArticlePage,
    // },
    {
      path: '/forum',
      component: ForumPage,
    },
  ],
})
