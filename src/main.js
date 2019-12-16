import VueAgile from 'vue-agile'
import Vue from 'vue'
import App from './App.vue'


Vue.use(VueAgile)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
