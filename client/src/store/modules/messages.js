import axios from 'axios'
const URL = require('../api-variables').URL;

export default {
  state: {
    conversations: {},
    messages: {},
    isFetching: false,
  },

  getters: {
    inbox: function(state) {
      return state.conversations;
    },
    messagesById: (state) => (conversation_id) => {
      return state.messages[conversation_id];
    }
  },

  actions: {
    getInbox: async function(context, user) {
      try {
        context.commit('REQUEST_MESSAGES');
        const res = await axios.get(`${URL}/${user.id}/inbox`);
        context.commit('RECEIVE_INBOX', res.data);
      } catch(err) {
        context.commit('REQUEST_MESSAGES');
        throw new Error(err);
      }
    },
    getMessagesById: async function(context, {user, conversationId}) {
      try {
        context.commit('REQUEST_MESSAGES');
        const res = await axios.get(`${URL}/${user.id}/inbox/${conversationId}`)
        context.commit('RECEIVE_MESSAGES',{messages: res.data, conversationId});
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
    RECEIVE_MESSAGES: function(state, payload) {
      state.isFetching = false;
      state.messages = {
        ...state.messages,
        [payload.conversationId]: payload.messages,
      }
    },
  }

}