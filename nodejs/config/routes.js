// import route handlers
const auth = require('../controllers/auth')
const users = require('../controllers/users')
const messages = require('../controllers/messages');

module.exports = (app) => {

  // routes for auth
  app.get("/login/:email", auth.getAuthUser);
  
  // routes for users
  app.get("/pro/:user_id/clients", users.getAllClients);
  app.get("/:user_id/allies", users.getAllAllies);

  // routes for messages
  app.get("/:user_id/inbox", messages.getAllConversations);
  app.get("/:user_id/inbox/:conversation_id", messages.getMessagesByConversationId);

};