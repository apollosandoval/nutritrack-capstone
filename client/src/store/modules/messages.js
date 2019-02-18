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
    postConversation: async function(context, message) {
      // TODO: compose new message
      try {
        // register a new conversation and retrieve conversation_id
        const conversation = await axios.post(`${URL}/conversations`, {
          subject: message.subject,
          from: message.from,
          to: message.to,
        });
        // post new message with generated conversation_id
        const res = await axios.post(`${URL}/messages`, {
          conversation_id: conversation.data[0],
          from: message.from,
          to: message.to,
          content: message.content,
        })
        console.log('conversation response:', conversation.data);
        console.log('mesages response:', res.data);
      } catch(err) {
        throw new Error(err);
      }
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