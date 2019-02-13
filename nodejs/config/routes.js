// import route handlers
const auth = require('../controllers/auth');

module.exports = (app) => {

  // routes
  app.get("/login/:email", auth.getAuthUser),
  app.get("/", (req,res) => {
    try {
      res.send("Hello World!");
    } catch(err) {
      throw new Error(err);
    }
  })

}