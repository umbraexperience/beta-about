import Flickity from 'vue-flickity';
import Vue from 'vue'
import App from './App.vue'
import router from './router'



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

new Vue({
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
        
        // any options from Flickity can be used
      }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
});