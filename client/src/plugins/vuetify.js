import Vue from 'vue'
import Vuetify, { colors } from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

// TODO: Finalize theme colors
Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#6a627b',
    secondary: colors.grey.darken1,
  }
})