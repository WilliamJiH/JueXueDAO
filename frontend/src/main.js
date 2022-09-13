import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'

import ElementUI from 'element-ui'
import { BootstrapVue} from 'bootstrap-vue'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/app.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
