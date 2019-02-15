// import route handlers
const auth = require('../controllers/auth')
const users = require('../controllers/users')

module.exports = (app) => {

  // routes for auth
  app.get("/login/:email", auth.getAuthUser);
  
  // routes for users
  app.get("/pro/:user_id/clients", users.getAllClients);

};