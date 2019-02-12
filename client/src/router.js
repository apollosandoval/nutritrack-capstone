import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/views/Landing'
import Login from '@/views/Login'
import Register from '@/views/Register'
// NOTE: COMPONENT BELOW IS CURRENTLY BEING TESTED
import UserDashboard from '@/views/UserDashboard'

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
    // NOTE: COMPONENT BELOW IS CURRENTLY BEING TESTED
    {
      path: "/test",
      name: "Test",
      component: UserDashboard
    },
    {
      path: "/",
      name: "Landing",
      component: Landing,
    },
  ]
})
