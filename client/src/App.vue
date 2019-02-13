<template>
  <v-app>
    <!-- Navigation Toolbar -->
    <nav-bar />
    <!-- Main Content w/ Routing -->
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    'nav-bar': Navbar,
  },
}
</script>
