// import route handlers

module.exports = (app) => {

  // routes
  app.get("/", (req,res) => {
    try {
      res.send("Hello World!");
    } catch(err) {
      throw new Error(err);
    }
  })

}