import axios from 'axios'
const URL = require('../api-variables').URL;
const headers = {
  'Authorization': localStorage.getItem('token'),
}

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
    messagesByConversationId: (state) => (conversation_id) => {
      return state.messages[conversation_id];
    }
  },

  actions: {
    getInbox: async function(context, user) {
      try {
        context.commit('REQUEST_MESSAGES');
        const res = await axios.get(`${URL}/${user.id}/inbox`, {headers});
        context.commit('RECEIVE_INBOX', res.data);
      } catch(err) {
        context.commit('REQUEST_MESSAGES');
        throw new Error(err);
      }
    },
    getMessagesByConversationId: async function(context, {user, conversationId}) {
      try {
        context.commit('REQUEST_MESSAGES');
        const res = await axios.get(`${URL}/${user.id}/inbox/${conversationId}`, {headers})
        context.commit('RECEIVE_CONVERSATION_MESSAGES',{messages: res.data, conversationId});
      } catch(err) {
        context.commit('REQUEST_MESSAGES');
        throw new Error(err);
      }
    },
    postConversation: async function(context, message) {
      try {
        context.commit('REQUEST_MESSAGES');
        // register a new conversation and retrieve conversation_id
        const conversation = await axios.post(`${URL}/conversations`, {
          subject: message.subject,
          from: message.from,
          to: message.to,
        }, {headers});
        // post new message with generated conversation_id
        const res = await axios.post(`${URL}/messages`, {
          conversation_id: conversation.data[0].id,
          from: message.from,
          to: message.to,
          content: message.content,
        }, {headers})
        // commit result
        context.commit('RECEIVE_CONVERSATION', {
          conversation: conversation.data[0],
          message: res.data[0],
        });
      } catch(err) {
        context.commit('REQUEST_MESSAGES')
        throw new Error(err);
      }
    },
    postMessageToConversation: async function(context, message) {
      try {
        context.commit('REQUEST_MESSAGES');
        const res = await axios.post(`${URL}/messages`, {
          conversation_id: message.conversation_id,
          from: message.from,
          to: message.to,
          content: message.content,
        }, {headers});
        context.commit('RECEIVE_MESSAGE', res.data);
      } catch(err) {
        context.commit('REQUEST_MESSAGES');
        throw new Error(err);
      }
    },
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
    RECEIVE_CONVERSATION_MESSAGES: function(state, payload) {
      state.isFetching = false;
      state.messages = {
        ...state.messages,
        [payload.conversationId]: payload.messages,
      }
    },
    RECEIVE_CONVERSATION: function(state, {conversation, message}) {
      state.conversations[conversation.id] = conversation;
      state.messages[conversation.id] = [message];
      state.isFetching = false;
    },
    RECEIVE_MESSAGE: function(state, payload) {
      state.isFetching = false;
      state.messages[payload[0].conversation_id] = [
        ...state.messages[payload[0].conversation_id],
        payload[0],
      ];
    },
  }

}