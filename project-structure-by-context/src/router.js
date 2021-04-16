import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as homeRoutes } from './views/home/router.js'
import { routes as aboutRoutes } from './views/about/router.js'

Vue.use(VueRouter)

const routes = [
  ...homeRoutes,
  ...aboutRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
