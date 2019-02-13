import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/views/Landing'
import Login from '@/views/Login'
import Register from '@/views/Register'
import UserDashboard from '@/views/UserDashboard'
// NOTE: COMPONENT BELOW IS CURRENTLY BEING TESTED
import ProDashboard from '@/views/ProDashboard'

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
      path: "/user",
      name: "User",
      component: UserDashboard
    },
    // NOTE: COMPONENT BELOW IS CURRENTLY BEING TESTED
    {
      path: "/test",
      name: "Test",
      component: ProDashboard
    },
    {
      path: "/",
      name: "Landing",
      component: Landing,
    },
  ]
})
