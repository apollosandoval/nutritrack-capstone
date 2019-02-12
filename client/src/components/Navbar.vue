<template>
  <div>
    <v-toolbar dark app>
      <!-- TODO: Insert side icon for side drawer -->
      <v-toolbar-title>Nutritrack</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- TODO: make toolbar nav display auth based -->
      <v-toolbar-items>
        <v-btn flat router to="/login">Sign In</v-btn>
        <v-btn flat router to="/register">Register</v-btn>
        <v-btn flat router to="/">Sign Out</v-btn>
        <!-- NOTE: REMOVE JUST FOR TESTING -->
        <v-btn flat router to="/test">TEST</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {}
}
</script>
