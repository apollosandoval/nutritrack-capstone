const knex = require('../db/knex')
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
    // use functional composition to systematically create the async axios calls
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
    // use decomposition in javascript to build the individual async functions and assign them to a variable
    const [getMealItem1, getMealItem2, getMealItem3] = [queryBuilder('item1'), queryBuilder('item2'), queryBuilder('item3')];
    // use Promise.all to handle concurrent async calls via axios getMealItem1() is making an async call via axios
    Promise.all([getMealItem1(), getMealItem2(), getMealItem3()])
      .then( ([resItem1, resItem2, resItem3]) => {
        const nutrientsItem1 = resItem1.data.parsed[0].food.nutrients;
        const nutrientsItem2 = resItem2.data.parsed[0].food.nutrients;
        const nutrientsItem3 = resItem3.data.parsed[0].food.nutrients;
        // put nutrient values into arrays and use reduce with default values 0, and initialized acc = 0 to deal with 'undefined'
        return {
          calories: [nutrientsItem1.ENERC_KCAL, nutrientsItem2.ENERC_KCAL, nutrientsItem3.ENERC_KCAL].reduce((a,b) => a + (b || 0), 0),
          fat: [nutrientsItem1.FAT, nutrientsItem2.FAT, nutrientsItem3.FAT].reduce((a,b) => a + (b || 0), 0),
          protein: [nutrientsItem1.PROCNT, nutrientsItem2.PROCNT, nutrientsItem3.PROCNT].reduce((a,b) => a + (b || 0), 0),
          carbs: [nutrientsItem1.CHOCDF, nutrientsItem2.CHOCDF, nutrientsItem3.CHOCDF].reduce((a,b) => a + (b || 0), 0),
        };
        // NOTE: DELETE res.send([resItem1.data, resItem2.data, resItem3.data]);
      })
      .then( sum => {
        // use sum to insert new meal values into database
        return knex('meals').returning('*').insert({
          meal: req.body.mealtime,
          calories: Math.floor(sum.calories),
          fat: Math.floor(sum.fat),
          protein: Math.floor(sum.protein),
          carbs: Math.floor(sum.carbs),
          date: req.body.date,
          user: req.params.user_id,
        })
      })
      .then( result => {
        res.send(result);
      })
      .catch(err => {
        res.send(err);
      })
  },

}