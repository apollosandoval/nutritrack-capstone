const knex = require('../db/knex')
const passport = require('passport')
const jwt = require('jsonwebtoken')

module.exports = {

  postAuthUser: (req, res) => {
    passport.authenticate('local', {session: false}, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: info,
          err: err,
        })
      }
      // Insert bCrypt comparison
      // internal PassportJs login method
      req.login(user, {session: false}, (err) => {
        if (err) { res.send(err) }
        // delete password so we don't send it
        delete user.password;
        // otherwise sign token with JWT.sign
        jwt.sign(user, process.env.SECRET_KEY, {
          expiresIn: 3600,
        }, (err, token) => {
          res.json({
            user: user,
            token: 'Bearer ' + token
          })
        });
      })
    })(req, res);
  },

  postNewUser: async (req, res) => {
    // TODO: make sure to hash password before storing it in db
    try {
      const user = await knex('users').insert(req.body).returning('id');
      const result = await knex('allies').insert({
        professional: 4,
        client: user[0],
      });
      res.send(result);
    } catch(err) {
      res.send(err);
    }
  }

};