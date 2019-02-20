<template>
  <v-flex>
    <v-card>
      <!-- Client Info -->
      <v-card-title>
        <v-list-tile class="grow">
          <v-list-tile-avatar>
            <v-img
              v-if="false"
              class="elevation-6"
            ></v-img>
            <v-icon
              v-else
              size="64"
              class="elevation-6"
            >account_circle</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content class="display-1 font-weight-black">{{ client.name }}</v-list-tile-content>
        </v-list-tile>
      </v-card-title>
      <!-- Display Graph -->
      <v-sheet>
        <v-sparkline
          :value="weeklyStats"
          :smooth="16"
          :line-width="3"
          :fill="true"
          :gradient="gradient"
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
      gradient: ['#E53935','#FDD835','#8BC34A','#4CAF50'],
    }
  },
  mounted() {
    this.$store.dispatch('getWeeklyMeals', {user: this.client});
  },
  computed: {
    // TODO: Need to compute daily calories for a week
    weeklyStats: function() {
      const meals = this.$store.getters.mealsByUserId(this.client.id);
      if (meals) {
        return meals.map(meal => meal.calories);
      } else {
        return [];
      }
    }
  },
}
</script>
