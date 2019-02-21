// import route handlers
const auth = require('../controllers/auth')
const users = require('../controllers/users')
const messages = require('../controllers/messages');
const meals = require('../controllers/meals');

module.exports = (app, passport) => {

  // routes for auth
  app.post("/login", auth.postAuthUser);
  app.post("/register", auth.postNewUser);
  
  // routes for users
  app.get("/pro/:user_id/clients", passport.authenticate('jwt', {session: false}), users.getAllClients);
  app.get("/:user_id/allies", passport.authenticate('jwt', {session: false}), users.getAllAllies);

  // routes for messages
  app.get("/:user_id/inbox", passport.authenticate('jwt', {session: false}), messages.getAllConversations);
  app.get("/:user_id/inbox/:conversation_id", passport.authenticate('jwt', {session: false}), messages.getMessagesByConversationId);
  app.post("/conversations", passport.authenticate('jwt', {session: false}), messages.postConversation);
  app.post("/messages", passport.authenticate('jwt', {session: false}), messages.postMessageByConversationId);

  // routes for meals
  app.get("/:user_id/meals/:date", passport.authenticate('jwt', {session: false}), meals.getMealsByDate);
  app.get("/:user_id/history/:week", passport.authenticate('jwt', {session: false}), meals.getMealsByWeek);
  app.get("/:user_id/history/:month", passport.authenticate('jwt', {session: false}), meals.getMealsByMonth);
  app.post("/:user_id/meals/in", passport.authenticate('jwt', {session: false}), meals.postDineIn);
  app.post("/:user_id/meals/out", passport.authenticate('jwt', {session: false}), meals.postEatOut);
  app.delete("/meals/:meal_id", passport.authenticate('jwt', {session: false}), meals.deleteMeal);

};