const knex = require('../db/knex')

module.exports = {

  getAuthUser: (req, res) => {
    knex('users').where('email', req.params.email).first()
      .then( data => {
        res.send(data);
      })
  },

  postNewUser: async (req, res) => {
    console.log('REQUEST BODY: ', req.body);
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