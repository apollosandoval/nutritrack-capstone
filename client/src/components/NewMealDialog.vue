<template>
  <v-card>
    <v-tabs
      centered
      dark
      fixed-tabs
    >
      <v-tab>Eating Out</v-tab>
      <v-tab>Dining In</v-tab>
      <!-- Eating Out tab items -->
      <v-tab-item>
        <v-card>
          <v-card-text>
            <v-form>
              <v-select
                v-model="mealtime"
                :items="times"
                outline
                prepend-inner-icon="kitchen"
                label="Select A Meal"
              ></v-select>
              <v-text-field
                v-model="item1"
                prepend-inner-icon="search"
                label="Item 1"
                placeholder="Find your item"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="submit">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-tab-item>
      <!-- Dining in tab items -->
      <v-tab-item>
        <new-meal-form />
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import NewMealForm from "@/components/NewMealForm"

export default {
  components: {
    'new-meal-form': NewMealForm,
  },
  data() {
    return {
      times: ["Snack", "Breakfast", "Lunch", "Dinner"],
      mealtime: null,
      item1: '',
    }
  },
  methods: {
    submit: function() {
      const date = new Date();
      this.$store.dispatch('postEatOut', {
        meal: {
          item1: this.item1,
        },
        mealtime: this.mealtime,
        user: this.$store.getters.auth,
        date: date.toDateString(),
      })
    },
  },
  computed: {},
}
</script>
