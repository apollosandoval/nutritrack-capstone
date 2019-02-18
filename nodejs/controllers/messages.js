const knex = require('../db/knex')

module.exports = {

  getAllConversations: (req, res) => {
    knex('conversations')
      .where('from', req.params.user_id)
      .orWhere('to', req.params.user_id)
      .then( data => {
        res.send(data);
      })
  },

  getMessagesByConversationId: (req, res) => {
    knex('messages')
      .where('conversation_id', req.params.conversation_id)
      .orderBy('created_at')
      .then( data => {
        res.send(data);
      });
  },

  postConversation: (req, res) => {
    knex('conversations')
      .returning('id')
      .insert(req.body)
      .then( data => {
        res.send(data);
      })
  },

  postMessageByConversationId: (req, res) => {
    knex('messages')
      .insert(req.body)
      .returning('*')
      .then( data => {
        res.send(data);
      })
  },

}