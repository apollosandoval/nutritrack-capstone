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
    // NOTE: GET all meals by user id and week
    // NOTE: GET all meals by month
    postDineIn: async function(context, {meal, user, date, mealtime}) {
      try {
        context.commit('REQUEST_MEALS');
        const res = await axios.post(`${URL}/${user.id}/meals/in`, {meal, date, mealtime});
        context.commit('RECEIVE_MEALS_BY_DATE', res.data);
      } catch(err) {
        context.commit('REQUEST_MEALS');
        throw new Error(err);
      }
    },
    postEatOut: async function(context, {meal, user, date, mealtime}) {
      try {
        context.commit('REQUEST_MEALS');
        const res = await axios.post(`${URL}/${user.id}/meals/out`, {meal, date, mealtime});
        context.commit('RECEIVE_MEALS_BY_DATE', res.data);
      } catch(err) {
        context.commit('REQUEST_MEALS');
        throw new Error(err);
      }
    }
    // NOTE: PATCH an existing meal by date
  },

  mutations: {
    REQUEST_MEALS: function(state) {
      state.isFetching = !state.isFetching;
    },
    RECEIVE_MEALS_BY_DATE: function(state, payload) {
      state.isFetching = false;
      state.meals = [...state.meals, ...payload];
    },
  },

}