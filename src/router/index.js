import Vue from 'vue'
import VueRouter from 'vue-router'
import Base from '../views/Base.vue'
import Lifecycle from '../views/Lifecycle.vue'
import Component from '../views/Component.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Base',
    component: Base
  },
  {
    path: '/lifecycle',
    name: 'Lifecycle',
    component: Lifecycle
  },
  {
    path: '/component',
    name: 'Component',
    component: Component
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
