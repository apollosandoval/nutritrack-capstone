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
          label="To"
          single-line
        ></v-text-field>
        <v-text-field
          label="Subject"
          single-line
        ></v-text-field>
        <v-divider></v-divider>
        <v-textarea
          single-line
          full-width
        ></v-textarea>
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn flat>Send</v-btn>
      <v-spacer></v-spacer>
      <v-btn flat>
        <v-icon>delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  // TODO: Bind data in new message form
  data() {
    return {};
  },
  method: {
    submit: function() {
      // TODO: Build Submit NewMessageForm
    },
  }
}
</script>
