<template>
  <div>
    <v-toolbar dark app>
      <!-- TODO: Insert side icon for side drawer -->
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Nutritrack</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- TODO: make toolbar nav display auth based -->
      <v-toolbar-items>
        <v-btn flat router to="/login">Sign In</v-btn>
        <v-btn flat router to="/register">Register</v-btn>
        <v-btn flat router to="/">Sign Out</v-btn>
        <v-btn flat router to="/user">User</v-btn>
        <!-- NOTE: REMOVE JUST FOR TESTING -->
        <v-btn flat router to="/test">TEST</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- Sidebar for navigation -->
    <v-navigation-drawer
      app
      v-model="drawer"
      dark
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="250">
            <img src="https://i.imgur.com/ET0WJCb.png" >
          </v-avatar>
        </v-flex>
        <v-flex>
          <v-list>
            <v-list-tile-title>Joe Trainer</v-list-tile-title>
            <v-list-tile-sub-title>JoeTrainer@email.com</v-list-tile-sub-title>
          </v-list>
        </v-flex>
      </v-layout>
      <v-spacer></v-spacer>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile
          v-for="link in links.user"
          :key="`nav-${link.name}`"
          router
          :to="link.route"
          @click="drawer=!drawer"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ link.name }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: {
        pro: [
          {name: "Dashboard", icon: "dashboard", route: "/pro"},
          {name: "Inbox", icon: "move_to_inbox", route: "/inbox"},
          {name: "Sent", icon: "send", route: "/sent"},
          {name: "Clients", icon: "people", route: "/"},
          {name: "Settings", icon: "settings", route: "/settings"},
        ],
        user: [
          {name: "Dashboard", icon: "dashboard", route: "/user"},
          {name: "Inbox", icon: "move_to_inbox", route: "/inbox"},
          {name: "Sent", icon: "send", route: "/sent"},
          {name: "Allies", icon: "people", route: "/"},
          {name: "Settings", icon: "settings", route: "/settings"},
        ],
      }
    };
  },
  methods: {},
  computed: {}
}
</script>
