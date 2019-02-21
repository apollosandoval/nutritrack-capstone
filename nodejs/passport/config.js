// configuration file using Passport.js and the LocalStrategy
// for authenticating a user
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const knex = require('../db/knex');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
};

module.exports = (passport) => {

  passport.use(new LocalStrategy({
    // By default, LocalStrategy expects credentials parameters 'username' and
    // 'password'; if we want to call them something else we must 
    // pass in an object with the desired parameters
    usernameField: 'email',
    passwordField: 'password',
  },
  function(username, password, done) {
    knex('users').where('email', username).first()
      .then(user => {
        if (!user) {
          return done(null, false);
        } else if (user && user.password == password) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
      .catch(err => done(null, err));
  }))

  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    knex('users').where('email', jwt_payload.email)
      .then(user => {
        if (user) return done(null, user);
        else return done(null, false);
      })
      .catch(err => done(err, false));

  }));

};