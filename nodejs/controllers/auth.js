const knex = require('../db/knex')

module.exports = {

  getAuthUser: (req, res) => {
    knex('users').where('email', req.params.email).first()
      .then( data => {
        res.send(data);
      })
  },

  getAuthPro: (req, res) => {
    let pro = {};
    res.send(pro);
  }

};