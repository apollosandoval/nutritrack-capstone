<template>
  <div>
    <!-- Top Navigation Drawer -->
    <v-toolbar dark app color="primary">
      <v-toolbar-side-icon v-if="authenticated" @click="drawer = true"></v-toolbar-side-icon>
      <v-toolbar-title>Nutritrack</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- TODO: make toolbar nav display auth based -->
      <v-toolbar-items v-if="!authenticated">
        <v-btn flat router to="/login">Sign In</v-btn>
        <v-btn flat router to="/register">Register</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-btn flat @click="logout">Sign Out</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- Sidebar Navigation Drawer -->
    <v-navigation-drawer
      app
      v-model="drawer"
      dark
      disable-resize-watcher
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="250">
            <img src="https://i.imgur.com/ET0WJCb.png" >
          </v-avatar>
        </v-flex>
        <v-flex>
          <v-list>
            <v-list-tile-title>{{ user.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ user.email }}</v-list-tile-sub-title>
          </v-list>
        </v-flex>
      </v-layout>
      <v-spacer></v-spacer>
      <v-divider></v-divider>
      <!-- Links for pro users -->
      <v-list v-if="user.pro">
        <v-list-tile
          v-for="link in links.pro"
          :key="`nav-${link.name}`"
          router
          :to="`/pro/${username}/${link.route}`"
          @click="drawer = false"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ link.name }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
      <!-- Links for regular users -->
      <v-list v-else>
        <v-list-tile
          v-for="link in links.user"
          :key="`nav-${link.name}`"
          router
          :to="`/${username}/${link.route}`"
          @click="drawer = false"
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
          {name: "Dashboard", icon: "dashboard", route: ""},
          {name: "Inbox", icon: "move_to_inbox", route: "inbox"},
          {name: "Sent", icon: "send", route: "sent"},
          {name: "Clients", icon: "people", route: "clients"},
          {name: "Settings", icon: "settings", route: "settings"},
        ],
        user: [
          {name: "Dashboard", icon: "dashboard", route: ""},
          {name: "Inbox", icon: "move_to_inbox", route: "inbox"},
          {name: "Sent", icon: "send", route: "sent"},
          {name: "Allies", icon: "people", route: "allies"},
          {name: "Settings", icon: "settings", route: "settings"},
        ],
      }
    };
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout");
    }
  },
  computed: {
    authenticated: function() {
      return this.$store.getters.authenticated;
    },
    user: function() {
      return this.$store.getters.auth;
    },
    username: function() {
      const { name } = this.$store.getters.auth;
      if (name) {
        return name.split(" ").join(".").toLowerCase();
      }
      return '';
    }
  }
}
</script>
