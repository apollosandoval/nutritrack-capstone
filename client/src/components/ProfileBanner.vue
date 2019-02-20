<template>
  <v-card>
    <!-- Banner Photo -->
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      :height="250"
    >
      <v-layout column fill-height>
        <v-spacer></v-spacer>
        <v-list-tile class="headline white--text">
          <v-card-actions></v-card-actions>
          <!-- Profile Avatar -->
          <v-list-tile-avatar>
            <v-icon size="64" class="elevation-6 white">account_circle</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content class="display-1">
            {{ auth.name }}
          </v-list-tile-content>
          <!-- Protein Display -->
          <v-list-tile-content>
            <v-list-tile-title class="font-weight-medium">
              {{ nutrients.protein }} G Protein
            </v-list-tile-title>
            <v-list-tile-sub-title class="font-italic font-weight-light">/ 50 G</v-list-tile-sub-title>
          </v-list-tile-content>
          <!-- Carbohydrate Display -->
          <v-list-tile-content>
            <v-list-tile-title class="font-weight-medium">
              {{ nutrients.carbs }} G Carbs
            </v-list-tile-title>
            <v-list-tile-sub-title class="font-italic font-weight-light">/ 130 G</v-list-tile-sub-title>
          </v-list-tile-content>
          <!-- Fat Display -->
          <v-list-tile-content>
            <v-list-tile-title class="font-weight-medium">
              {{ nutrients.fat }} G Fat
            </v-list-tile-title>
            <v-list-tile-sub-title class="font-italic font-weight-light">/ 30 G</v-list-tile-sub-title>
          </v-list-tile-content>
          <!-- Calorie Display -->
          <v-list-tile-content>
            <v-list-tile-title class="font-weight-medium">
              {{ nutrients.calories }} kCal
            </v-list-tile-title>
            <v-list-tile-sub-title class="font-italic font-weight-light">/ 1800 kCal</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-layout>
    </v-img>
  </v-card>
</template>

<script>
export default {
  computed: {
    auth: function() {
      return this.$store.getters.auth;
    },
    nutrients: function() {
      const { id } = this.$store.getters.auth;
      const meals = this.$store.getters.mealsByUserId(id);
      if (meals) {
        return meals.reduce((acc, cv) => {
          for (let key in cv) {
            acc[key] += cv[key];
          }
          return acc;
        }, {protein: 0, carbs: 0, fat: 0, calories: 0})
      } else {
        return {protein: 0, carbs: 0, fat: 0, calories: 0}
      }
    }
  }

}
</script>
