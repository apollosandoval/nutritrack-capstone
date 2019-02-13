import axios from 'axios'
import router from '@/router/router'

export default {
  state: {
    user: [],
    authenticated: false,
  },
  
  getters: {},

  actions: {
    register: function() {},
    login: async function(context, user) {
      const { email, password } = user;
      try {
        const res = await axios.get('https://localhost:8082/login/' + email);
        context.commit('LOGIN', res);
        router.push({path: "/user"});
      } catch(err) {
        throw new Error(err);
      }
    },
    logout: function() {},
  },

  mutations: {
    LOGIN: function(state, payload) {
      state.user = payload.user;
      state.authenticated = true;
    },
    LOGOUT: function() {
      state.user = [];
      state.authenticated = false;
    },
  },

}