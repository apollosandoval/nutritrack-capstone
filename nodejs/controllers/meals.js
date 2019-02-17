const knex = require('../db/knex')

module.exports = {

  getMealsByDate: (req, res) => {
    knex('meals')
      .where('date', req.params.date)
      .then( data => {
        res.send(data);
      })
  },

  getMealsByWeek: (req, res) => {

  },

  getMealsByMonth: (req, res) => {

  }

}