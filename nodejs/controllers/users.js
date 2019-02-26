const knex = require('../db/knex')

module.exports = {

  getAllClients: (req, res) => {
    knex('users')
      .join('allies', 'allies.client', '=', 'users.id')
      .where('allies.professional', req.params.user_id)
      .then( data => {
        res.send(data);
      })
  },
  
  getAllAllies: (req, res) => {
    knex('users')
      .join('allies', 'allies.professional', '=', 'users.id')
      .where('allies.client', req.params.user_id)
      .then( data => {
        res.send(data);
      })
      .catch(err => console.log(err))
  }

};