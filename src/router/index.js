import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'homemenu',
        component: () => import('@/views/HomeMenu')
      }
    ]
  },
  {
    path: '/globalColorPicker',
    name: 'globalColorPicker',
    component: () => import('@/views/GlobalColorPicker')
  }
]

const router = new VueRouter({
  routes
})

export default router
