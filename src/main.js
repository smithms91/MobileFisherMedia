import Vue from 'vue'
import App from './App'
import router from '../router/router'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
