<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8>
        <!-- render card if no messages in inbox yet -->
        <v-card v-if="Object.keys(inbox).length === 0">
          <v-list-tile>
            <v-list-tile-content>No Messages Yet.</v-list-tile-content>
          </v-list-tile>
        </v-card>
        <!-- Otherwise display inbox -->
        <v-card v-else>
          <v-list>
            <template v-for="conversation in inbox">
              <v-list-tile
                :key="`conversation-${conversation.id}`"
                router
                :to="`/${username}/inbox/${conversation.id}`"
              >
                <v-list-tile-action>
                  <v-checkbox></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                  {{ users[conversation.from].name }}
                </v-list-tile-content>
                <v-list-tile-content>{{ conversation.subject }}</v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch('getInbox', this.$store.getters.auth);
  },
  methods: {},
  computed: {
    username: function() {
      const { name } = this.$store.getters.auth;
      if (name) {
        return name.split(" ").join(".").toLowerCase();
      }
      return '';
    },
    inbox: function() {
      const filtered = {};
      const inbox = this.$store.getters.inbox;
      const me = this.$store.getters.auth.id;
      for (let key in inbox) {
        if (inbox[key].from !== me) {
          filtered[key] = inbox[key];
        }
      }
      return filtered;
    },
    users: function() {
      return this.$store.getters.connections;
    }
  },
}
</script>
