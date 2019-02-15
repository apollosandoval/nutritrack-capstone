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
          <v-form>
            <v-select
              :items="items"
              outline
              label="Select A Meal"
            ></v-select>
            <v-text-field
              prepend-inner-icon="search"
            ></v-text-field>
          </v-form>
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
      items: ["Snack", "Breakfast", "Lunch", "Dinner"],
    }
  },
  methods: {
    submit: function() {
      // TODO: handle submit of Eating Out Tab
    },
  },
  computed: {},
}
</script>
