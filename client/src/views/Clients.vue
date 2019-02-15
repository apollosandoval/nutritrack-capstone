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
            <template v-for="n in 2">
              <v-divider v-if="n !== 1" :key="`divider-${n}`"></v-divider>
              <v-list-tile
                :key="`client-${n}`"
                router
              >
                <v-list-tile-avatar>
                  <v-icon x-large>account_circle</v-icon>
                </v-list-tile-avatar>
                <!-- TODO: add button to end of tile in order to compose messages to client -->
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
    return {
      searchTerm: ''
    }
  },
  mounted() {},
  computed: {
    // TODO: retrieve a list of all of my clients
    clients: function() {},
  },
}
</script>
