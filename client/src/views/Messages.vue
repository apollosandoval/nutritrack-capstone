// TODO: Build Messages View
<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <new-message-form></new-message-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import NewMessageForm from '../components/NewMessageForm'

export default {
  components: {
    'new-message-form': NewMessageForm,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
}
</script>
