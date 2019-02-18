<template>
  <v-container grid-list-xl>
    <v-layout column>
      <!-- Open Invitations Component -->
      <v-flex>
        <v-card>
          <v-card-text>No pending invitations</v-card-text>
        </v-card>
      </v-flex>
      <!-- Current Allies -->
      <v-divider></v-divider>
      <v-flex>
        <v-card>
          <v-list two-line>
            <v-list-tile v-for="allie in allies" :key="`tile-${allie.name}`">
              <v-list-tile-avatar>
                <v-icon>account_circle</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ allie.name }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ allie.institution }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <!-- Creates pop-over effect of NewMessageForm when clicking btn -->
                <new-message-bubble :connection="allie"/>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <!-- NOTE: Insert Searchable List of Available Allies -->
      <v-flex></v-flex>
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
    return {};
  },
  mounted() {
    this.$store.dispatch('getAllAllies', this.$store.getters.auth);
  },
  computed: {
    allies: function() {
      return this.$store.getters.connections;
    }
  }
}
</script>
