<template>
  <v-card>
    <!-- Banner Photo -->
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      :aspect-ratio="16/9"
    >
      <!-- Profile Avatar -->
      <v-layout column fill-height>
        <v-spacer></v-spacer>
        <v-list-tile class="headline white--text">
          <v-list-tile-avatar>
            <v-icon x-large color="white">account_circle</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Oscar Sandoval</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-layout>
    </v-img>
  </v-card>
</template>

<script>
export default {
  // TODO: compute daily nutritional Info for banner

}
</script>
