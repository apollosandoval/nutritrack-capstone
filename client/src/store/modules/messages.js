import axios from 'axios'
const URL = require('../api-variables').URL;

export default {
  state: {
    conversations: {},
    isFetching: false,
  },

  getters: {
    inbox: function(state) {
      return state.conversations;
    },
  },

  actions: {
    getInbox: async function(context, user) {
      try {
        context.commit('REQUEST_MESSAGES');
        const res = await axios.get(`${URL}/${user.id}/inbox`)
        context.commit('RECEIVE_INBOX', res.data);
      } catch(err) {
        context.commit('REQUEST_MESSAGES');
        throw new Error(err);
      }
    },
    postMessage: function() {
      // TODO: compose new message
    }
  },

  mutations: {
    REQUEST_MESSAGES: function(state) {
      state.isFetching = !state.isFetching;
    },
    RECEIVE_INBOX: function(state, payload) {
      const conversations = {};
      payload.forEach(conversation => conversations[conversation.id] = conversation)
      state.conversations = conversations;
      state.isFetching = false;
    },
    RECEIVE_MESSAGES: function() {},
  }

}