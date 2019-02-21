import Vue from 'vue'
import Router from 'vue-router'
import jwt_decode from 'jwt-decode'

import Landing from '@/views/Landing'
import Login from '@/views/Login'
import Register from '@/views/Register'
import UserDashboard from '@/views/UserDashboard'
import ProDashboard from '@/views/ProDashboard'
import Clients from '@/views/Clients'
import Allies from '@/views/Allies'
import Inbox from '@/views/Inbox'
import Messages from '@/views/Messages'
import Settings from '@/views/Settings'

Vue.use(Router)

const router = new Router({
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
      path: "/",
      name: "Landing",
      component: Landing,
    },
    {
      path: "/:username/allies",
      name: "Allies",
      component: Allies,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/:username/inbox",
      name: "Inbox",
      component: Inbox,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/:username/inbox/:conversationId",
      name: "Messages",
      component: Messages,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/:username/settings",
      name: "Settings",
      component: Settings,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/:username",
      alias: "/test/:username",
      name: "User",
      component: UserDashboard,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/pro/:username/clients",
      name: "Clients",
      component: Clients,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/pro/:username/inbox",
      name: "ProInbox",
      component: Inbox,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/pro/:username/inbox/:conversationId",
      name: "ProMessages",
      component: Messages,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/pro/:username/settings",
      name: "ProSettings",
      component: Settings,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/pro/:username",
      name: "Pro",
      component: ProDashboard,
      meta: {
        requiresAuth: true,
      }
    },
  ]
})

// NOTE: remove 'pro' from url labels
// TODO: setup authentication 
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = jwt_decode(localStorage.getItem('token'));
  const username = currentUser.name.split(" ").join(".").toLowerCase();

  if (requiresAuth && !currentUser) next('/login');
  else if (!requiresAuth && currentUser) next(`/${username}`);
  else next();
});

export default router;