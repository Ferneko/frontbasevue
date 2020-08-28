import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Layout from "./views/Layout"

Vue.config.productionTip = false

Vue.component("Layout", Layout);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
