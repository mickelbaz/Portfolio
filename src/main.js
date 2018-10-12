import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Bio from './components/bio.vue'
import Works from './components/works.vue'
import Homepage from './components/homepage.vue'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Homepage },
  { path: '/bio', component: Bio },
  { path: '/works', component: Works }
]
const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
