import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
