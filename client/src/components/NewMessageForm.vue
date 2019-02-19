<template>
  <v-card>
    <!-- Toolbar -->
    <v-toolbar dark card>
      <v-toolbar-title>New Message</v-toolbar-title>
    </v-toolbar>
    <!-- Compose Message -->
    <v-card-text>
      <v-form>
        <v-text-field
          :value="connection.name"
          single-line
          readonly
        ></v-text-field>
        <v-text-field
          v-model="subject"
          label="Subject"
          single-line
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
    <!-- POST newly created message or 'CLEAR' and close menu -->
    <v-card-actions>
      <v-btn flat @click="submit">Send</v-btn>
      <v-spacer></v-spacer>
      <v-btn flat @click="clearForm">
        <v-icon>delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['connection'],
  data() {
    return {
      subject: '',
      content: '',
    };
  },
  methods: {
    submit: function() {
      this.$store.dispatch('postConversation', {
        subject: this.subject,
        content: this.content,
        from: this.$store.getters.auth.id,
        to: this.connection.id,
      });
      this.$emit('closeDialogEvent');
    },
    clearForm: function() {
      this.subject = '';
      this.content = '';
      this.$emit('closeDialogEvent');
    }
  },
}
</script>
