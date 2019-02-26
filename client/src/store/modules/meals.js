import axios from 'axios'
const URL = require('../api-variables').URL;
const headers = {
  'Authorization': axios.defaults.headers.common['Authorization'] || localStorage.getItem('token'),
}

export default {
  state: {
    meals: {},
    isFetching: false,
  },

  getters: {
    mealsByUserId: (state) => (user_id) => {
      return state.meals[user_id];
    },
  },

  actions: {
    getTodaysMeals: async function(context, {user, date}) {
      try {
        context.commit('REQUEST_MEALS');
        const res = await axios.get(`${URL}/${user.id}/meals/${date}`, {headers});
        context.commit('RECEIVE_MEALS_BY_DATE', {meals: res.data, user: user});
      } catch(err) {
        context.commit('REQUEST_MEALS');
        throw new Error(err);
      }
    },
    // NOTE: GET all meals by user id and week
    getWeeklyMeals: async function(context, {user}) {
      try {
        context.commit('REQUEST_MEALS');
        const res = await axios.get(`${URL}/${user.id}/history/week`, {headers});
        context.commit('RECEIVE_MEALS_BY_DATE', {meals: res.data, user: user});
      } catch(err) {
        context.commit('REQUEST_MEALS');
      }
    },
    // NOTE: GET all meals by month
    postDineIn: async function(context, {meal, user, date, mealtime}) {
      try {
        context.commit('REQUEST_MEALS');
        const res = await axios.post(`${URL}/${user.id}/meals/in`, {meal, date, mealtime}, {headers});
        context.commit('RECEIVE_MEALS_BY_DATE', {meals:res.data, user: user});
      } catch(err) {
        context.commit('REQUEST_MEALS');
        throw new Error(err);
      }
    },
    postEatOut: async function(context, {meal, user, date, mealtime}) {
      try {
        context.commit('REQUEST_MEALS');
        const res = await axios.post(`${URL}/${user.id}/meals/out`, {meal, date, mealtime}, {headers});
        context.commit('RECEIVE_MEALS_BY_DATE', {meals: res.data, user: user});
      } catch(err) {
        context.commit('REQUEST_MEALS');
        throw new Error(err);
      }
    },
    deleteCard: async function(context, {meal_id, user}) {
      try {
        context.commit('REQUEST_MEALS');
        const res = await axios.delete(`${URL}/meals/${meal_id}`, {headers});
        context.commit('DELETE_CARD', {id: res.data[0], user: user});
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
    RECEIVE_MEALS_BY_DATE: function(state, {meals, user}) {
      const prev = state.meals[user.id];
      state.isFetching = false;
      state.meals = {
        ...state.meals,
        [user.id]: [
          ...meals,
          ...(prev || [])
        ],
      }
    },
    DELETE_CARD: function(state, payload) {
      const { id, user } = payload;
      state.isFetching = false;
      state.meals[user.id] = state.meals[user.id].filter(meal => meal.id !== id);
    }
  },

}