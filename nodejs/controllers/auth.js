const knex = require('../db/knex')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {

  postAuthUser: (req, res) => {
    passport.authenticate('local', {session: false}, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: info,
          err: err,
        })
      }
      // internal PassportJs login method
      req.logIn(user, {session: false}, (err) => {
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
    try {
      // check if user already exists in DB
      const exists = await knex('users').where('email', req.body.email);
      if (exists && exists.length) {
        res.status(400).json({error: 'User Already Exists'});
      } else {
        let password = req.body.password;
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            req.body.password = hash;
            knex('users').insert(req.body).returning('id')
              .then( user => {
                knex('allies').insert({
                  professional: 4,
                  client: user[0]
                })
                .then(result => res.send(result));
              })
          })
        })
      }
    } catch(err) {
      res.send(err);
    }
  }

};