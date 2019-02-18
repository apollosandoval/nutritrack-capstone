<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <!-- TODO: make search bar functional -->
        <v-text-field
          label="Search..."
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-list two-line>
            <template v-for="(client, index) in clients">
              <v-divider v-if="index > 0" :key="`divider-${index}`"></v-divider>
              <v-list-tile
                :key="`client-${client.id}`"
                router
              >
                <v-list-tile-avatar>
                  <v-icon x-large>account_circle</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ client.name }}</v-list-tile-title>
                  <v-list-tile-sub-title></v-list-tile-sub-title>
                </v-list-tile-content>
                <!-- Creates pop-over effect of NewMessageForm when clicking btn -->
                <v-list-tile-action>
                  <new-message-bubble :connection="client"/>
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import NewMessageBubble from '@/components/NewMessageBubble'

export default {
  components: {
    'new-message-bubble': NewMessageBubble,
  },
  data() {
    return {
      searchTerm: '',
    }
  },
  mounted() {
    this.$store.dispatch('getAllClients', this.$store.getters.auth);
  },
  computed: {
    clients: function() {
      return this.$store.getters.connections;
    },
  },
}
</script>
