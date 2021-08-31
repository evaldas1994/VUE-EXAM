import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Single from "../views/Single";
import SortComponent from "../components/SortComponent";

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
  },
  {
    path: '/sort',
    name: 'Sort',
    component: SortComponent
  }
  // {
  //   path: '/sort/:platform/:type/:sortBy',
  //   name: 'Sort',
  //   component: SortComponent
  // }
]

const router = new VueRouter({
  routes
})

export default router
