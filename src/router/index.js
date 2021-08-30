import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Single from "../views/Single";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/single/:id',
    name: 'Single',
    component: Single
  }
]

const router = new VueRouter({
  routes
})

export default router
