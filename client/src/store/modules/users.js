import axios from 'axios'
const URL = require('../api-variables').URL;

export default {
  state: {
    users: {},
    isFetching: false,
  },

  getters: {
    clients: function(state) {
      return state.users;
    }
  },

  actions: {
    getAllClients: async function(context, user) {
      try {
        context.commit('REQUEST_ALL_CLIENTS');
        const res = await axios.get(`${URL}/pro/${user.id}/clients`);
        context.commit('RECEIVE_ALL_CLIENTS', res.data)
      } catch(err) {
        context.commit('REQUEST_ALL_CLIENTS')
        throw new Error(err);
      }
    },
    // TODO: GET all allies
    // TODO: GET by user id
  },

  mutations: {
    REQUEST_ALL_CLIENTS: function(state) {
      state.isFetching = !state.isFetching;
    },
    RECEIVE_ALL_CLIENTS:  function(state, payload) {
      const users = {};
      payload.forEach(user => users[user.id] = user)
      state.users = users;
    },
  },

}