const knex = require('@/db/knex')

module.exports = {

  getAuthUser: (req, res) => {
    let user = {};
    res.send(user);
  },

  getAuthPro: (req, res) => {
    let pro = {};
    res.send(pro);
  }

};