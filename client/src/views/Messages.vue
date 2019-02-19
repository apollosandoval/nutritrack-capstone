<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8>
        <v-toolbar color="primary" dark>
          <v-list-tile class="grow">
            <v-list-tile-action>
              <!-- NOTE: Add routing back to /:username/inbox -->
              <!-- <v-icon>arrow_back</v-icon> -->
            </v-list-tile-action>
            <v-list-tile-content>{{ conversation.subject }}</v-list-tile-content>
            <v-spacer></v-spacer>
            <!-- Reply Bubble -->
            <v-list-tile-action>
              <reply-bubble :conversation="conversation"/>
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
import ReplyBubble from '@/components/ReplyBubble'

export default {
  components: {
    'reply-bubble': ReplyBubble,
  },
  mounted() {
    this.$store.dispatch('getMessagesByConversationId', {
      user: this.$store.getters.auth,
      conversationId: this.$route.params.conversationId,
    })
  },
  computed: {
    messages: function() {
      return this.$store.getters.messagesByConversationId(this.$route.params.conversationId)
    },
    conversation: function() {
      return this.$store.getters.inbox[this.$route.params.conversationId];
    }
  }
}
</script>
