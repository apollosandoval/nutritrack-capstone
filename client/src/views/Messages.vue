<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8>
        <v-toolbar>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>arrow_back</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>Conversation Subject</v-list-tile-content>
            <v-spacer></v-spacer>
            <!-- NOTE: delete if can't get right aligned -->
            <v-list-tile-action>
              <v-icon>send</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-toolbar>
        <template v-for="n in 3">
          <v-card :key="`message-${n}`">
            <v-card-title></v-card-title>
            <v-card-text>
              This is some sample text that I'm using to test the working features of my
              messages card.
            </v-card-text>
          </v-card>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  // TODO: retrieve messages corresponding to conversation id
}
</script>
