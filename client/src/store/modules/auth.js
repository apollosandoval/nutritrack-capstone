import axios from 'axios'
import router from '@/router/router'
const URL = require('../api-variables').URL;
const jwt_decode = require('jwt-decode');

export default {
  state: {
    user: localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token')) : [],
    authenticated: false,
    // TODO: make sure token exists;
    token: localStorage.getItem('token')
  },
  
  getters: {
    auth: function(state) {
      return state.user;
    },
    authenticated: function(state) {
      return state.authenticated;
    },
    token: function(state) {
      // NOTE: this method is currently not being used anywhere
      return state.token;
    }
  },

  actions: {
    register: async function(context, user) {
      try {
        const res = await axios.post(`${URL}/register`, user);
        if (res.status === 200) {
          router.push({path: '/login'});
        }
      } catch(err) {
        throw new Error(err);
      }
    },
    login: async function(context, user) {
      const { email, password } = user;
      try {
        // NOTE: include token 'if' statement, and make sure that it doesn't already
        // exist in local storage
        const res = await axios.post(`${URL}/login`, {
          email,
          password,
        });
        localStorage.setItem('token', res.data.token);
        const user = jwt_decode(res.data.token);
        user.username = user.name.split(" ").join(".").toLowerCase();
        context.commit('LOGIN', {user: user});
        // TODO: place token in local storage as well
        if (res.data.pro) {
          router.push({path: `/pro/${user.username}`});
        } else {
          router.push({path: `/${user.username}`});
        }
      } catch(err) {
        throw new Error(err);
      }
    },
    logout: function(context) {
      context.commit("LOGOUT");
      router.push({path: "/login"});
    },
  },

  mutations: {
    LOGIN: function(state, payload) {
      state.user = payload.user;
      state.authenticated = true;
    },
    LOGOUT: function(state) {
      state.user = [];
      state.authenticated = false;
    },
  },

}