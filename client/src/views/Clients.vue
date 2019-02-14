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
    <v-layout></v-layout>
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
