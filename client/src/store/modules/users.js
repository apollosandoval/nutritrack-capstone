import axios from 'axios'
const URL = require('../api-variables').URL;

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
        const res = await axios.get(`${URL}/pro/${user.id}/clients`);
        context.commit('RECEIVE_ALL_CONNECTIONS', res.data);
      } catch(err) {
        context.commit('REQUEST_ALL_CONNECTIONS');
        throw new Error(err);
      }
    },
    getAllAllies: async function(context, user) {
      try {
        context.commit('REQUEST_ALL_CONNECTIONS');
        // TODO: build route for all allies by user id
        const res = await axios.get(`${URL}/${user.id}/allies`);
        context.commit('RECEIVE_ALL_CONNECTIONS', res.data);
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
    },
  },

}