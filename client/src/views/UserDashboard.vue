<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12>
        <!-- TODO: ProfileBanner Component -->
        <profile-banner />
      </v-flex>
    </v-layout>
    <!-- TODO: add meal card list -->
    <meal-card />
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
    >
      <new-meal-form />
    </v-dialog>
  </v-container>
</template>

<script>
import ProfileBanner from '@/components/ProfileBanner'
import MealCard from '@/components/MealCard'
import NewMealForm from '@/components/NewMealForm'

export default {
  components: {
    'profile-banner': ProfileBanner,
    'meal-card': MealCard,
    'new-meal-form': NewMealForm,
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    // TODO: compute list of meal cards
    // TODO: compute dialy nutritional Info for banner
  }
}
</script>
