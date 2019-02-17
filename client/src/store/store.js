import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import users from './modules/users'
import messages from './modules/messages'
import meals from './modules/meals'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    users,
    messages,
    meals,
  }
})
