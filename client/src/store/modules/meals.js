import axios from 'axios'
const URL = require('../api-variables').URL;

export default {
  state: {
    meals: [],
    isFetching: false,
  },

  getters: {
    meals: function(state) {
      return state.meals;
    }
  },

  actions: {
    getTodaysMeals: async function(context, {user, date}) {
      try {
        context.commit('REQUEST_MEALS');
        const res = await axios.get(`${URL}/${user.id}/meals/${date}`);
        context.commit('RECEIVE_MEALS_BY_DATE', res.data);
      } catch(err) {
        context.commit('REQUEST_MEALS');
        throw new Error(err);
      }
    },
    // TODO: GET all meals by user id and week
    // TODO: GET all meals by month
    // TODO: POST new meal
    // TODO: PATCH an existing meal by date
  },

  mutations: {
    REQUEST_MEALS: function(state) {
      state.isFetching = !state.isFetching;
    },
    RECEIVE_MEALS_BY_DATE: function(state, payload) {
      state.isFetching = false;
      state.meals = payload;
    }
  },

}