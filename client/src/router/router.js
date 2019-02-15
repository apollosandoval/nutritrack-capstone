import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/views/Landing'
import Login from '@/views/Login'
import Register from '@/views/Register'
import UserDashboard from '@/views/UserDashboard'
import ProDashboard from '@/views/ProDashboard'
import Clients from '@/views/Clients'
import Allies from '@/views/Allies'
import Settings from '@/views/Settings'

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
      path: "/:username/allies",
      name: "Allies",
      component: Allies,
    },
    {
      path: "/:username",
      name: "User",
      component: UserDashboard
    },
    {
      path: "/pro/:username/clients",
      name: "Clients",
      component: Clients
    },
    {
      path: "/pro/:username/settings",
      name: "Settings",
      component: Settings
    },
    {
      path: "/pro/:username",
      name: "Pro",
      component: ProDashboard
    },
    {
      path: "/",
      name: "Landing",
      component: Landing,
    },
  ]
})

// TODO: figure out if I need to nest routes
// TODO: remove 'pro' from url labels