import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/views/Landing'
import Login from '@/views/Login'
import Register from '@/views/Register'
import UserDashboard from '@/views/UserDashboard'
import ProDashboard from '@/views/ProDashboard'
import Clients from '@/views/Clients'
import Allies from '@/views/Allies'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/:username",
      name: "User",
      component: UserDashboard
    },
    {
      path: "/:username/allies",
      name: "Allies",
      component: Allies,
    },
    {
      path: "/pro/:username",
      name: "Pro",
      component: ProDashboard
    },
    {
      path: "/pro/:username/clients",
      name: "Clients",
      component: Clients
    },
    {
      path: "/",
      name: "Landing",
      component: Landing,
    },
  ]
})
