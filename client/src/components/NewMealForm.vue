<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-select
          :items="items"
          outline
          prepend-inner-icon="kitchen"
          label="Select Your Meal"
        ></v-select>
        <v-text-field
          prepend-inner-icon="search"
          label="Item 1"
          placeholder="Enter an item"
        ></v-text-field>
        <v-text-field
          prepend-inner-icon="search"
          label="Item 2"
          placeholder="Enter an item"
        ></v-text-field>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: ["Snack", "Breakfast", "Lunch", "Dinner"],
    }
  },
  methods: {
    submit: function() {
      // TODO: handle submit of Dining In Tab
    },
  },
}
</script>