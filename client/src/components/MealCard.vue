<template>
  <v-flex>
    <v-card>
      <v-layout>
        <v-flex xs5>
          <!-- Insert Image Here -->
        </v-flex>
        <v-flex xs7>
          <v-card flat>
            <v-card-title class="headline">
              {{ meal.meal }}
              <v-spacer></v-spacer>
              <v-btn flat @click="deleteCard">
                <v-icon>close</v-icon>
              </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>Calories:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ meal.calories }} kCal</v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-content>Fat:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ meal.fat }} G</v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-content>Protein:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ meal.protein }} G</v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-content>Carbohydrates:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ meal.carbs }} G</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['meal'],
  methods: {
    deleteCard: function() {
      this.$store.dispatch('deleteCard', this.meal.id);
    }
  }
}
</script>
