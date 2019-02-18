<template>
  <v-flex>
    <v-card>
      <v-card-title>
        <v-list-tile class="grow">
          <v-list-tile-avatar color="grey darken-3">
            <v-img
              v-if="false"
              class="elevation-6"
            ></v-img>
            <v-icon v-else size="64" class="elevation-6">account_circle</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content class="display-1 font-weight-black">{{ client.name }}</v-list-tile-content>
        </v-list-tile>
      </v-card-title>

      <v-sheet>
        <v-sparkline
          :value="value"
          :smooth="16"
          :line-width="3"
          auto-draw
        ></v-sparkline>
      </v-sheet>

    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['client'],
  data() {
    return {
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    }
  }
}
</script>
