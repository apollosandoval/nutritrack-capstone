<template>
  <v-container grid-list-xl>
    <v-layout column>
      
      <client-card
        v-for="(client, key) in clients"
        :key="`client-${key}`"
        :client="client"
      ></client-card>

    </v-layout>
  </v-container>
</template>

<script>
import ClientCard from '../components/ClientCard'

export default {
  components: {
    'client-card': ClientCard,
  },
  data() {
    return {};
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
