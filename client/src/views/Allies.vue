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
      <v-flex>
        <v-card>
          <v-list two-line>
            <v-list-tile v-for="allie in allies" :key="`tile-${allie.name}`">
              <v-list-tile-avatar>
                <v-icon>account_circle</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ allie.name }}</v-list-tile-title>
                <v-list-tile-sub-title>Institution Name</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  left
                  min-width="500"
                >
                  <v-btn
                    slot="activator"
                    flat
                  >
                    <v-icon>chat_bubble</v-icon>
                  </v-btn>
                  <new-message-form />
                </v-menu>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <!--Searchable List of Available Allies -->
      <v-flex></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import NewMessageForm from '@/components/NewMessageForm'

export default {
  components: {
    'new-message-form': NewMessageForm,
  },
  data() {
    return {
      menu: false,
    };
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
