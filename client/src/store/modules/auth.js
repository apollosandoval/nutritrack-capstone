import axios from 'axios'
import router from '@/router/router'
const URL = require('../api-variables').URL;

export default {
  state: {
    user: [],
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
      const { email } = user;
      try {
        const res = await axios.get(`${URL}/login/${email}`);
        res.data.username = res.data.name.split(" ").join(".").toLowerCase();
        context.commit('LOGIN', {user: res.data});
        if (res.data.pro) {
          router.push({path: `/pro/${res.data.username}`});
        } else {
          router.push({path: `/${res.data.username}`});
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