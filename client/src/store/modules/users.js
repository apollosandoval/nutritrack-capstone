import axios from 'axios'
const URL = require('../api-variables').URL;
const headers = {
  'Authorization': localStorage.getItem('token') || axios.defaults.headers.common['Authorization'],
}

export default {
  state: {
    users: {},
    isFetching: false,
  },

  getters: {
    connections: function(state) {
      return state.users;
    }
  },

  actions: {
    getAllClients: async function(context, user) {
      try {
        context.commit('REQUEST_ALL_CONNECTIONS');
        const res = await axios.get(`${URL}/pro/${user.id}/clients`, {headers});
        const payload = res.data.reduce((acc, client) => {
          acc.push({
            name: client.name,
            email: client.email,
            institution: client.institution,
            pro: client.pro,
            id: client.client,
          })
          return acc;
        }, []);
        context.commit('RECEIVE_ALL_CONNECTIONS', payload);
      } catch(err) {
        context.commit('REQUEST_ALL_CONNECTIONS');
        throw new Error(err);
      }
    },
    getAllAllies: async function(context, user) {
      try {
        context.commit('REQUEST_ALL_CONNECTIONS');
        const res = await axios.get(`${URL}/${user.id}/allies`, {headers});
        const payload = res.data.reduce((acc, allie) => {
          acc.push({
            name: allie.name,
            email: allie.email,
            institution: allie.institution,
            pro: allie.pro,
            id: allie.professional,
          })
          return acc;
        }, []);
        context.commit('RECEIVE_ALL_CONNECTIONS', payload);
      } catch(err) {
        context.commit('REQUEST_ALL_CONNECTIONS');
        throw new Error(err);
      }
    }
    // TODO: GET by user id
  },

  mutations: {
    REQUEST_ALL_CONNECTIONS: function(state) {
      state.isFetching = !state.isFetching;
    },
    RECEIVE_ALL_CONNECTIONS: function(state, payload) {
      const users = {};
      payload.forEach(user => users[user.id] = user)
      state.users = users;
      state.isFetching = false;
    },
  },

}