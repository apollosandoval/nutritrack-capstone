// import route handlers
const auth = require('../controllers/auth')
const users = require('../controllers/users')
const messages = require('../controllers/messages');
const meals = require('../controllers/meals');

module.exports = (app) => {

  // routes for auth
  app.get("/login/:email", auth.getAuthUser);
  
  // routes for users
  app.get("/pro/:user_id/clients", users.getAllClients);
  app.get("/:user_id/allies", users.getAllAllies);

  // routes for messages
  app.get("/:user_id/inbox", messages.getAllConversations);
  app.get("/:user_id/inbox/:conversation_id", messages.getMessagesByConversationId);
  app.post("/conversations", messages.postConversation);
  app.post("/messages", messages.postMessageByConversationId);

  // routes for meals
  app.get("/:user_id/meals/:date", meals.getMealsByDate);
  app.get("/:user_id/history/:week", meals.getMealsByWeek);
  app.get("/:user_id/history/:month", meals.getMealsByMonth);
  app.post("/:user_id/meals/in", meals.postDineIn);
  app.post("/:user_id/meals/out", meals.postEatOut);
  app.delete("/meals/:meal_id", meals.deleteMeal);

};