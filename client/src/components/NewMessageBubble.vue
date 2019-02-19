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
    >
      <v-icon>chat_bubble</v-icon>
    </v-btn>
    <new-message-form
      @closeDialogEvent="menu = false"
      :connection="connection"
    />
  </v-menu>
</template>

<script>
import NewMessageForm from '@/components/NewMessageForm'

export default {
  props: ['connection'],
  components: {
    'new-message-form': NewMessageForm,
  },
  data() {
    return {
      menu: false,
    }
  },
  methods: {},
}
</script>
