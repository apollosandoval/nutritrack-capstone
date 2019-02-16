<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8>
        <!-- TODO: Insert empty inbox view with v-if -->
        <v-card>
          <v-list>
            <template v-for="n in 3">
              <!-- TODO: make routing dynamic -->
              <v-list-tile
                :key="`tile-${n}`"
                router
                to="/oscar.sandoval/messages"
              >
                <v-list-tile-action>
                  <v-checkbox></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>From</v-list-tile-content>
                <v-list-tile-content>Subject</v-list-tile-content>
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
  // TODO: get messages by user_id
  data() {
    return {};
  },
  methods: {},
  computed: {},
}
</script>
