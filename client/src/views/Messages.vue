<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8>
        <v-toolbar>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>arrow_back</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ conversation.subject }}</v-list-tile-content>
            <v-spacer></v-spacer>
            <!-- NOTE: delete if can't get right aligned -->
            <v-list-tile-action>
              <v-icon>send</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-toolbar>
        <template v-for="message in messages">
          <v-card :key="`message-${message.id}`">
            <v-card-title></v-card-title>
            <v-card-text>
              {{ message.content }}
            </v-card-text>
          </v-card>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getMessagesById', {
      user: this.$store.getters.auth,
      conversationId: this.$route.params.conversationId,
    })
  },
  computed: {
    messages: function() {
      return this.$store.getters.messagesById(this.$route.params.conversationId)
    },
    conversation: function() {
      return this.$store.getters.inbox[this.$route.params.conversationId];
    }
  }
}
</script>
