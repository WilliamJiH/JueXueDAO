import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store.js'
import ElementUI from 'element-ui'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/app.scss'
export const eventBus = new Vue()
Vue.config.productionTip = false

Vue.use(ElementUI)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
