import axios from 'axios'
import router from '@/router/router'

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
        const res = await axios.get('http://localhost:8082/login/' + email);
        context.commit('LOGIN', {user: res.data});
        router.push({path: "/user"});
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