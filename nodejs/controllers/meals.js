const knex = require('../db/knex')
const querystring = require('querystring')
const axios = require('axios')

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

  },

  postMeal: (req, res) => {
    const queryBuilder = (key) => {
      return function() {
        return axios.get(`${process.env.EDAMAM_PARSER}`, {
          params: {
            ingr: req.body.meal[key],
            app_id: process.env.APP_ID,
            app_key: process.env.APP_KEY,
          }
        })
      }
    }
    
    const [getMealItem1, getMealItem2, getMealItem3] = [queryBuilder('item1'), queryBuilder('item2'), queryBuilder('item3')];
    
    Promise.all([getMealItem1(), getMealItem2(), getMealItem3()])
      .then( ([resItem1, resItem2, resItem3]) => {
        res.send([resItem1.data, resItem2.data, resItem3.data]);
      })
      .catch(err => {
        res.send(err);
      })
  },

}