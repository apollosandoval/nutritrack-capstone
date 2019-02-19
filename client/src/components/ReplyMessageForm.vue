<template>
  <v-card>
    <!-- NOTE: Toolbar (remove?) -->
    <v-toolbar dark card color="primary">
      <v-toolbar-title >Reply</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <!-- Message Subject -->
        <v-text-field
        ></v-text-field>
        <v-divider></v-divider>
        <v-textarea
          v-model="content"
          single-line
          full-width
        ></v-textarea>
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <!-- POST new reply or 'CLEAR' and close menu -->
    <v-card-actions>
      <v-btn flat @click="submit">Reply</v-btn>
      <v-spacer></v-spacer>
      <v-btn flat @click="clearForm">
        <v-icon>delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['conversation'],
  data() {
    return {
      content: '',
    };
  },
  methods: {
    submit: function() {
      this.$store.dispatch('postMessageToConversation', {
        conversation_id: this.conversation.id,
        from: this.$store.getters.auth.id,
        to: this.conversation.to,
        content: this.content,
      });
      this.$emit('closeDialogEvent');
    },
    clearForm: function() {
      this.content = '';
      this.$emit('closeDialogEvent')
    },
  },
}
</script>
