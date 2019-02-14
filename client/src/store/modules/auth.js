import axios from 'axios'
import router from '@/router/router'
const URL = require('../api-variables').URL;

export default {
  state: {
    user: [],
    authenticated: false,
  },
  
  getters: {
    auth: function(state) {
      return state.user;
    },
    authenticated: function(state) {
      return state.authenticated;
    }
  },

  actions: {
    register: function() {},
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