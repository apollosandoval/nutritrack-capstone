<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    left
    min-width="500"
  >
    <v-btn
      slot="activator"
      flat
    >Reply</v-btn>
    <reply-message-form
      @closeDialogEvent="menu = false"
      :conversation="conversation"
    />
  </v-menu>
</template>

<script>
import ReplyMessageForm from '@/components/ReplyMessageForm'

export default {
  props: ['conversation'],
  components: {
    'reply-message-form': ReplyMessageForm,
  },
  data() {
    return {
      menu: false,
    };
  },
  methods: {},
}
</script>
