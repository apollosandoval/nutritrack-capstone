<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-toolbar dark>
            <v-toolbar-title>Settings</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              label="Name"
            ></v-text-field>
            <v-text-field
              label="Email"
            ></v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <!-- TODO: add submit handler -->
            <v-btn>Submit</v-btn>
            <v-spacer></v-spacer>
            <!-- TODO: add handler to cancel changes -->
            <v-btn>Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    // TODO: add data fields for settings form
    return {};
  },
  methods: {
    // TODO: POST new UserSettings
    submit: function() {},
  },
  computed: {}
}
</script>
