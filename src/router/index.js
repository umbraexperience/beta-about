import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/About'
import App from '@/App'

Vue.use(VueRouter)

export default new VueRouter({
    routes : [
        {
            path: "/",
            component: App
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})