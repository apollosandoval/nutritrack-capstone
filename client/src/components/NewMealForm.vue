<template>
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
      <v-text-field
        prepend-inner-icon="search"
      ></v-text-field>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: ["Snack", "Breakfast", "Lunch", "Dinner"],
    }
  }
}
</script>