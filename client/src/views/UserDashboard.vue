<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex>
        <profile-banner></profile-banner>
      </v-flex>
    </v-layout>
    <v-layout column>
      <template v-for="(meal, index) of today">
        <v-flex :key="`meal-${index}`">
          <meal-card :meal="meal"></meal-card>
        </v-flex>
      </template>
    </v-layout>
    <!-- Add Meal button -->
    <v-btn
      fab
      dark
      color="error"
      fixed
      bottom
      right
      @click="dialog=true"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <new-meal-dialog @closeDialogEvent="dialog=false"/>
    </v-dialog>
  </v-container>
</template>

<script>
import ProfileBanner from '@/components/ProfileBanner'
import MealCard from '@/components/MealCard'
import NewMealDialog from '@/components/NewMealDialog'

export default {
  components: {
    'profile-banner': ProfileBanner,
    'meal-card': MealCard,
    'new-meal-dialog': NewMealDialog,
  },
  data() {
    return {
      dialog: false,
    };
  },
  mounted() {
    const date = new Date();
    this.$store.dispatch('getTodaysMeals', {
      user: this.$store.getters.auth,
      // TODO: change hard coded date
      date: date.toDateString(),
    });
    this.$store.dispatch('getAllAllies', this.$store.getters.auth);
  },
  computed: {
    today: function() {
      const { id } = this.$store.getters.auth;
      return this.$store.getters.mealsByUserId(id);
    }
  },
}
</script>
