import Vue from 'vue'
import App from './App'
import router from '../router/router'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
